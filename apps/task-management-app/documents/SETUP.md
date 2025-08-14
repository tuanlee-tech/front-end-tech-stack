
## 🚀 Bắt Đầu Coding Dự Án 1: Task Management App

### Bước 1: Setup Project với Vite + TypeScript + Tailwind

Chúng ta sẽ sử dụng **Vite** làm build tool vì nó nhanh, hỗ trợ TypeScript tốt, và phù hợp với React 19+. Sau đó, tích hợp Tailwind CSS, ESLint, Prettier, và các dependencies khác.




# Hướng Dẫn Setup Dự Án Task Management App

## 1. Tạo Project với Vite
Chạy lệnh sau để tạo project React với TypeScript:

```bash
npm create vite@latest task-management-app -- --template react-ts
cd task-management-app
npm install
```

## 2. Cài Đặt Dependencies
Cài các thư viện cần thiết:

Dưới đây là hai lệnh `npm install` đã được **phân tách rõ ràng** giữa `dependencies` và `devDependencies`:

---

### ✅ Cài đặt **dependencies** (cho production):

```bash
npm install @tanstack/react-router @tanstack/react-router-devtools react-hook-form zod axios tailwindcss @tailwindcss/vite
```

---

### 🛠️ Cài đặt **devDependencies** (cho development và testing):

```bash
npm install --save-dev @tanstack/router-plugin msw @axe-core/react @testing-library/react @testing-library/jest-dom @testing-library/user-event prettier vitest jsdom
```

## 3. Cấu Hình Tailwind CSS
Cập nhật `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
...
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    ...
    tailwindcss(),
  ],
})
```

Thêm Tailwind vào `src/index.css`:

```css
@import "tailwindcss";
```

## 4. Cấu Hình ESLint


Tạo `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 5. Cấu Hình TypeScript
Cập nhật `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 6. Cấu Hình Jest
Tạo `jest.config.ts`:

```bash
npm init jest@latest
```

Tạo `src/tests/setup.ts`:

```typescript
import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
configure({ testIdAttribute: "data-testid" });
```

## 7. Khởi Chạy Project
```bash
npm run dev
```

Mở `http://localhost:5173` để kiểm tra.


---

### Bước 2: Tạo Cấu Trúc Thư Mục

Dựa trên cấu trúc feature-based đã đề xuất, tạo các thư mục sau:


```bash 
task-management-app/
├── public/
├── src/
│   ├── api/
│   │   ├── axiosInstance.ts
│   │   └── mocks/
│   │       └── handlers.ts
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── TaskItem.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   └── types.ts
│   │   ├── tasks/
│   │   │   ├── components/
│   │   │   │   ├── TaskList.tsx
│   │   │   │   ├── TaskForm.tsx
│   │   │   │   └── FilterSearch.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTasks.ts
│   │   │   │   └── useTaskForm.ts
│   │   │   ├── types.ts
│   │   │   └── tests/
│   │   │       └── TaskList.test.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Tasks.tsx
│   ├── router/
│   │   └── routes.ts
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── dateFormatter.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── types/
│       └── index.d.ts
├── docs/
│   ├── backlog.md
│   ├── guidelines.md
│   └── test-plan.md
├── tests/
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

### Bước 3: Implement Core Features

Chúng ta sẽ bắt đầu với các feature chính: **User Auth**, **CRUD Tasks**, và **Filter/Search**. Dưới đây là các code snippets chính, tập trung vào **type safety**, **modularity**, và **production practices**.

#### 3.1. User Auth Cơ Bản (Login/Logout với Local Storage)

Tạo context và hook để quản lý auth state, sử dụng local storage để persist user.

```js

import { createContext, useContext, useState, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const login = (email: string, password: string) => {
    // Mock login logic (replace with real API later)
    if (email && password) {
      setUser({ id: '1', email });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

```

```js

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

```

```js

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}

```

**Giải Thích**:
- **AuthContext**: Quản lý user state, cung cấp `login`/`logout` functions.
- **useLocalStorage**: Custom hook để persist user vào local storage, type-safe với generics.
- **LoginForm**: Dùng React Hook Form + Zod để validate form, hiển thị errors inline, đảm bảo accessibility với ARIA.

---

#### 3.2. CRUD Tasks với TanStack Query

Tạo API client và hook để quản lý tasks, tích hợp mock API với MSW.

```js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  // Add auth headers later
  return config;
});

export default axiosInstance;

```

```js

export interface Task {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
}

export interface TaskInput {
  title: string;
  description?: string;
  deadline?: string;
  priority: 'low' | 'medium' | 'high';
}

```

```js

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../api/axiosInstance';
import { Task, TaskInput } from '../types';

export function useTasks() {
  const queryClient = useQueryClient();

  const { data: tasks = [], isLoading, error } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await axiosInstance.get('/tasks');
      return response.data;
    },
  });

  const createTask = useMutation({
    mutationFn: async (task: TaskInput) => {
      const response = await axiosInstance.post('/tasks', task);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const updateTask = useMutation({
    mutationFn: async ({ id, task }: { id: string; task: Partial<TaskInput> }) => {
      const response = await axiosInstance.put(`/tasks/${id}`, task);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const deleteTask = useMutation({
    mutationFn: async (id: string) => {
      await axiosInstance.delete(`/tasks/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { tasks, isLoading, error, createTask, updateTask, deleteTask };
}

```

```js

import { rest } from 'msw';

let mockTasks: Task[] = [
  { id: '1', title: 'Sample Task', priority: 'medium', status: 'todo' },
];

export const handlers = [
  rest.get('/api/tasks', (req, res, ctx) => {
    return res(ctx.json(mockTasks));
  }),
  rest.post('/api/tasks', async (req, res, ctx) => {
    const task = await req.json();
    const newTask = { id: String(mockTasks.length + 1), ...task, status: 'todo' };
    mockTasks.push(newTask);
    return res(ctx.json(newTask));
  }),
  rest.put('/api/tasks/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const updates = await req.json();
    mockTasks = mockTasks.map((task) =>
      task.id === id ? { ...task, ...updates } : task
    );
    return res(ctx.json(mockTasks.find((task) => task.id === id)));
  }),
  rest.delete('/api/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    mockTasks = mockTasks.filter((task) => task.id !== id);
    return res(ctx.status(204));
  }),
];

```

**Giải Thích**:
- **axiosInstance**: Config Axios với baseURL, sẵn sàng thêm interceptors cho auth.
- **useTasks**: Custom hook dùng TanStack Query để fetch, create, update, delete tasks. Invalidate cache sau mutations để sync UI.
- **MSW Handlers**: Mock API endpoints cho `/tasks`, hỗ trợ CRUD với mock data.

---

#### 3.3. Task Form và Filter/Search

Tạo form để thêm/sửa task và component để filter/search tasks.

```js

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { TaskInput } from '../types';
import { useTasks } from '../hooks/useTasks';

const taskSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  deadline: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  task?: TaskInput;
  onSubmitSuccess?: () => void;
}

export function TaskForm({ task, onSubmitSuccess }: TaskFormProps) {
  const { createTask, updateTask } = useTasks();
  const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: task || { title: '', description: '', priority: 'medium' },
  });

  const onSubmit = (data: TaskFormData) => {
    if (task?.id) {
      updateTask.mutate({ id: task.id, task: data }, { onSuccess: onSubmitSuccess });
    } else {
      createTask.mutate(data, { onSuccess: onSubmitSuccess });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div>
        <Input
          placeholder="Task Title"
          {...register('title')}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <span className="text-red-500">{errors.title.message}</span>}
      </div>
      <div>
        <Input
          placeholder="Description"
          {...register('description')}
          aria-invalid={errors.description ? 'true' : 'false'}
        />
      </div>
      <div>
        <Input
          type="date"
          {...register('deadline')}
          aria-invalid={errors.deadline ? 'true' : 'false'}
        />
      </div>
      <div>
        <select
          {...register('priority')}
          className="p-2 border rounded w-full"
          aria-invalid={errors.priority ? 'true' : 'false'}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
      </div>
      <Button type="submit">{task ? 'Update Task' : 'Create Task'}</Button>
    </form>
  );
}
```

```js
import { useState, useMemo } from 'react';
import { Input } from '../../../components/Input';
import { Task } from '../types';

interface FilterSearchProps {
  tasks: Task[];
  onFilter: (filteredTasks: Task[]) => void;
}

export function FilterSearch({ tasks, onFilter }: FilterSearchProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [priority, setPriority] = useState<string>('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === 'all' || task.status === status;
      const matchesPriority = priority === 'all' || task.priority === priority;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, status, priority]);

  useEffect(() => {
    onFilter(filteredTasks);
  }, [filteredTasks, onFilter]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

```

**Giải Thích**:
- **TaskForm**: Dùng React Hook Form + Zod để validate form, hỗ trợ cả create và update tasks. Tích hợp với `useTasks` hook để gọi mutations.
- **FilterSearch**: Sử dụng `useMemo` để tối ưu filtering, tránh recomputation không cần thiết. Gửi filtered tasks qua callback để update UI.

---

#### 3.4. Task List và Routing

Tạo component hiển thị danh sách tasks và setup routing với TanStack Router.

```js
import { useState } from 'react';
import { Task } from '../types';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../../../components/TaskItem';
import { FilterSearch } from './FilterSearch';
import { TaskForm } from './TaskForm';

export function TaskList() {
  const { tasks, isLoading, error, deleteTask } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <TaskForm />
      <FilterSearch tasks={tasks} onFilter={setFilteredTasks} />
      <div className="grid gap-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask.mutate(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

```

```js
import { Task } from '../features/tasks/types';
import { Button } from './Button';
import { useNavigate } from '@tanstack/react-router';

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

export const TaskItem = React.memo(({ task, onDelete }: TaskItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Status: {task.status}</p>
        {task.deadline && <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => navigate({ to: `/tasks/${task.id}` })}>Edit</Button>
        <Button onClick={onDelete} variant="danger">Delete</Button>
      </div>
    </div>
  );
});

```

```js
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Home } from '../pages/Home';
import { Tasks } from '../pages/Tasks';
import { TaskDetail } from '../pages/TaskDetail';
import { AuthProvider } from '../contexts/AuthContext';

const rootRoute = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks',
  component: Tasks,
});

const taskDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks/$id',
  component: TaskDetail,
});

const routeTree = rootRoute.addChildren([homeRoute, tasksRoute, taskDetailRoute]);

export const router = createRouter({ routeTree });

```

```js

import { TaskList } from '../features/tasks/components/TaskList';
import { MainLayout } from '../layouts/MainLayout';

export function Tasks() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}

```

```js

import { useParams } from '@tanstack/react-router';
import { TaskForm } from '../features/tasks/components/TaskForm';
import { useTasks } from '../features/tasks/hooks/useTasks';
import { MainLayout } from '../layouts/MainLayout';

export function TaskDetail() {
  const { id } = useParams({ from: '/tasks/$id' });
  const { tasks } = useTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <div>Task not found</div>;

  return (
    <MainLayout>
      <TaskForm task={task} onSubmitSuccess={() => router.navigate({ to: '/tasks' })} />
    </MainLayout>
  );
}

```

**Giải Thích**:
- **TaskList**: Hiển thị danh sách tasks, tích hợp filter/search và form. Handle loading/error states từ TanStack Query.
- **TaskItem**: Memoized component để giảm re-renders, hỗ trợ edit/delete.
- **Routing**: TanStack Router để setup routes `/`, `/tasks`, `/tasks/:id`. `AuthProvider` wrap toàn app để cung cấp auth context.

---

### Bước 4: Thêm Shared Components và Layout

Tạo reusable components và layout cho app.

```js

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-semibold';
  const variantStyles =
    variant === 'danger'
      ? 'bg-red-500 text-white hover:bg-red-600'
      : 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
}

```

```js

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`p-2 border rounded w-full ${className}`}
      {...props}
    />
  );
}

```

```js

import { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LoginForm } from '../features/auth/components/LoginForm';
import { Link, Outlet } from '@tanstack/react-router';
import { Button } from '../components/Button';

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { user, logout } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 p-4 shadow">
        <div className="container mx-auto flex justify-between">
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
          </div>
          <Button onClick={logout}>Logout</Button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children || <Outlet />}
      </main>
    </div>
  );
}

```

**Giải Thích**:
- **Button/Input**: Reusable components với Tailwind styles, hỗ trợ variants và accessibility.
- **MainLayout**: Cung cấp navbar và auth guard (hiển thị `LoginForm` nếu chưa login).

---

### Bước 5: Setup MSW và Testing

Cấu hình MSW để mock API trong dev và test.

```js

import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

```

Tạo file khởi chạy MSW trong dev:

```js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/routes';

if (process.env.NODE_ENV === 'development') {
  import('./api/mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

Tạo test cho `TaskList`:

```js

import { render, screen } from '@testing-library/react';
import { TaskList } from '../components/TaskList';
import { AuthProvider } from '../../../contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

describe('TaskList', () => {
  it('renders tasks correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TaskList />
        </AuthProvider>
      </QueryClientProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const task = await screen.findByText('Sample Task');
    expect(task).toBeInTheDocument();
  });
});

```

**Giải Thích**:
- **MSW**: Setup worker để mock API trong dev, tự động chạy khi `NODE_ENV=development`.
- **Test**: Test `TaskList` với mock API, kiểm tra loading state và render tasks.

---

### Bước 6: Document và Benchmark

Tạo file backlog để định nghĩa user stories:

```js

# Product Backlog: Task Management App

## User Stories
- **As a user**, I want to **create a task** with title, description, deadline, and priority, so that I can **organize my work**.
  - **Acceptance Criteria**:
    - Form includes title (required), description (optional), deadline (optional), priority (low/medium/high).
    - Show validation errors inline.
    - Success message on submit.
- **As a user**, I want to **filter tasks** by status or priority, so that I can **focus on specific tasks**.
  - **Acceptance Criteria**:
    - Filter by status (todo/in-progress/done) and priority (low/medium/high).
    - Search by keyword in title.
    - Filter applies instantly, latency <500ms.

## Prioritization (MoSCoW)
- **Must Have**: CRUD tasks, filter/search, basic auth.
- **Should Have**: Responsive UI, dark mode.
- **Could Have**: Drag-and-drop sorting.
- **Won't Have**: Real-time notifications (for now).

```

**Benchmark**:
- Dùng React DevTools để đo re-renders (<3 per interaction).
- Chrome Network tab để đo API latency (<500ms).
- Lighthouse để check accessibility (WCAG basics) và performance (page load <2s).

---

### Bước 7: Tiếp Theo

Bạn đã có setup cơ bản và code cho **User Auth**, **CRUD Tasks**, **Filter/Search**, cùng cấu trúc routing và testing. Để tiếp tục:
1. **Refactor Lần 1**: Thêm memoization (e.g., `useMemo` cho `TaskList` filtering) và type safety đầy đủ (loại bỏ `any`).
2. **Thêm Features**: Dark mode toggle, drag-and-drop (React DnD), lazy loading `/tasks/:id`.
3. **Testing**: Tăng coverage >80% với Jest + React Testing Library, thêm accessibility tests (`jest-axe`).
4. **Deploy**: Deploy lên Vercel (`vercel --prod`).

**Hành Động Ngay**:
- Chạy `npm run dev` và kiểm tra UI tại `http://localhost:5173`.
- Test API với MSW bằng cách gọi `/api/tasks` trong browser console.
- Chạy tests: `npm test`.