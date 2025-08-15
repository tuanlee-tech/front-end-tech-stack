import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { Task, TaskInput } from "../features/tasks/types";
import axiosInstance from "../api/axiosInstance";

/** Custom hook quản lý tasks với TanStack Query */
export function useTasks() {
    const queryClient = useQueryClient();

    const {
        data: tasks = [],
        isLoading,
        error,
    } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await axiosInstance.get('/tasks');
            return response.data;
        },
    });

    // Tối ưu hóa: Cập nhật cache sau khi tạo thành công
    const createTask = useMutation({
        mutationFn: async (task: TaskInput) => {
            const response = await axiosInstance.post('/tasks', task);
            return response.data;
        },
        onSuccess: (newTask) => {
            queryClient.setQueryData<Task[]>(['tasks'], (oldTasks) => {
                return oldTasks ? [...oldTasks, newTask] : [newTask];
            });
        },
    });

    // Tối ưu hóa: Sử dụng Optimistic Updates để cập nhật UI ngay lập tức
    const updateTask = useMutation({
        mutationFn: async ({ id, task }: { id: string; task: Partial<Task> }) => {
            const response = await axiosInstance.put(`/tasks/${id}`, task);
            return response.data;
        },
        onMutate: async ({ id, task }) => {
            // 1. Hủy bỏ các refetch đang diễn ra cho query 'tasks'
            await queryClient.cancelQueries({ queryKey: ['tasks'] });

            // 2. Lưu lại giá trị cũ của tasks để có thể hoàn tác nếu mutation thất bại
            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);

            // 3. Cập nhật cache ngay lập tức (Optimistic Update)
            if (previousTasks) {
                queryClient.setQueryData<Task[]>(
                    ['tasks'],
                    previousTasks.map((oldTask) =>
                        oldTask.id === id ? { ...oldTask, ...task } : oldTask
                    )
                );
            }

            return { previousTasks };
        },
        onError: (_error, _variables, context) => {
            // 4. Hoàn tác lại nếu mutation thất bại
            if (context?.previousTasks) {
                queryClient.setQueryData(['tasks'], context.previousTasks);
            }
        },
        onSettled: () => {
            // 5. Đánh dấu cache là stale và refetch trong nền để đồng bộ
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    // Tối ưu hóa: Sử dụng Optimistic Updates để xóa task
    const deleteTask = useMutation({
        mutationFn: async (id: string) => {
            await axiosInstance.delete(`/tasks/${id}`);
        },
        onMutate: async (idToDelete) => {
            await queryClient.cancelQueries({ queryKey: ['tasks'] });
            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);

            if (previousTasks) {
                queryClient.setQueryData<Task[]>(
                    ['tasks'],
                    previousTasks.filter((task) => task.id !== idToDelete)
                );
            }

            return { previousTasks };
        },
        onError: (_error, _variables, context) => {
            if (context?.previousTasks) {
                queryClient.setQueryData(['tasks'], context.previousTasks);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    return { tasks, isLoading, error, createTask, updateTask, deleteTask };
}