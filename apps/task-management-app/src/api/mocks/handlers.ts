import { http, HttpResponse } from 'msw';
import type { Task, TaskInput } from '../../features/tasks/types';

let mockTasks: Task[] = [
    { id: '1', title: 'Sample Task', priority: 'medium', status: 'todo' },
    { id: '2', title: 'Another Task', priority: 'low', status: 'in-progress' },
];

export const handlers = [
    // GET: Lấy tất cả các task
    http.get('/tasks', () => {
        return HttpResponse.json(mockTasks);
    }),

    // POST: Tạo một task mới
    http.post('/tasks', async ({ request }) => {
        const taskInput = (await request.json()) as TaskInput;
        const newTask: Task = {
            id: String(mockTasks.length + 1),
            ...taskInput,
            status: 'todo', // Status mặc định
        };
        mockTasks.push(newTask);
        return HttpResponse.json(newTask, { status: 201 });
    }),

    // PUT: Cập nhật một task
    http.put('/tasks/:id', async ({ request, params }) => {
        const { id } = params;
        const updates = (await request.json()) as Partial<Task>;

        let updatedTask: Task | undefined;
        mockTasks = mockTasks.map((task) => {
            if (task.id === id) {
                updatedTask = { ...task, ...updates };
                return updatedTask;
            }
            return task;
        });

        if (!updatedTask) {
            return new HttpResponse('Task not found', { status: 404 });
        }

        return HttpResponse.json(updatedTask);
    }),

    // DELETE: Xóa một task
    http.delete('/tasks/:id', ({ params }) => {
        const { id } = params;
        const initialLength = mockTasks.length;
        mockTasks = mockTasks.filter((task) => task.id !== id);

        if (mockTasks.length === initialLength) {
            return new HttpResponse('Task not found', { status: 404 });
        }

        return new HttpResponse(null, { status: 204 });
    }),
];