/** Type cho Task */
export interface Task {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'in-progress' | 'done';
}

/** Type cho input khi tạo/cập nhật Task */
export interface TaskInput {
    title: string;
    description?: string;
    deadline?: string;
    priority: 'low' | 'medium' | 'high';
}
