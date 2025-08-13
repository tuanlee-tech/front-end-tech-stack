
## 🚀 Bắt Đầu Coding Dự Án 1: Task Management App

### Bước 1: Setup Project với Vite + TypeScript + Tailwind

Chúng ta sẽ sử dụng **Vite** làm build tool vì nó nhanh, hỗ trợ TypeScript tốt, và phù hợp với React 19+. Sau đó, tích hợp Tailwind CSS, ESLint, Prettier, và các dependencies khác.

#### Code Setup

<xaiArtifact artifact_id="d8462380-04ac-4186-8f7e-f72b7211efe3" artifact_version_id="f7f22452-c568-4a58-92ad-d392fc83a071" title="setup-instructions.md" contentType="text/markdown">

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

```bash
npm install @tanstack/react-router @tanstack/router-devtools react-hook-form zod axios msw @testing-library/react @testing-library/jest-dom jest ts-jest @types/jest @axe-core/react tailwindcss postcss autoprefixer
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react eslint-plugin-react-hooks prettier
```

## 3. Cấu Hình Tailwind CSS
Khởi tạo Tailwind:

```bash
npx tailwindcss init -p
```

Cập nhật `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Thêm Tailwind vào `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Cấu Hình ESLint + Prettier
Tạo `.eslintrc.js`:

```javascript
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
```

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
Tạo `jest.config.js`:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
};
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

</xaiArtifact>

---

### Bước 2: Tạo Cấu Trúc Thư Mục

Dựa trên cấu trúc feature-based đã đề xuất, tạo các thư mục sau:

```
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

<xaiArtifact artifact_id="087628ab-287c-4df5-a1cc-c33ed619fe4c" artifact_version_id="ebec3fb5-e7c3-469b-b228-dd6602805a34" title="src/contexts/AuthContext.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="b8e45577-37cb-4604-9aa7-b57452f6cf3c" artifact_version_id="474bb616-9f19-417f-99ad-379a8905f326" title="src/hooks/useLocalStorage.ts" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="53b9a4a3-9cc8-4d79-891a-5780efb543d6" artifact_version_id="e8a12ba2-4280-49c9-9895-0b9ddd7e95e3" title="src/features/auth/components/LoginForm.tsx" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **AuthContext**: Quản lý user state, cung cấp `login`/`logout` functions.
- **useLocalStorage**: Custom hook để persist user vào local storage, type-safe với generics.
- **LoginForm**: Dùng React Hook Form + Zod để validate form, hiển thị errors inline, đảm bảo accessibility với ARIA.

---

#### 3.2. CRUD Tasks với TanStack Query

Tạo API client và hook để quản lý tasks, tích hợp mock API với MSW.

<xaiArtifact artifact_id="7c760d6d-b77b-4348-b9c8-5d0477bea62e" artifact_version_id="b05afb62-bd6e-4090-97c8-8069ac91ee52" title="src/api/axiosInstance.ts" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="33a2e369-4e1e-46f5-9fc7-257414f1e9ba" artifact_version_id="b7f06969-5a64-4293-a072-4eb185f14c86" title="src/features/tasks/types.ts" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="177ea876-77e5-4326-b8be-370b576e6c41" artifact_version_id="9ffafa0f-5608-429a-a746-426eed6c6421" title="src/features/tasks/hooks/useTasks.ts" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="e9ed3b76-876d-47a0-997d-0394059af850" artifact_version_id="01dbfcdb-5e02-461a-953f-e5fcc7077809" title="src/api/mocks/handlers.ts" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **axiosInstance**: Config Axios với baseURL, sẵn sàng thêm interceptors cho auth.
- **useTasks**: Custom hook dùng TanStack Query để fetch, create, update, delete tasks. Invalidate cache sau mutations để sync UI.
- **MSW Handlers**: Mock API endpoints cho `/tasks`, hỗ trợ CRUD với mock data.

---

#### 3.3. Task Form và Filter/Search

Tạo form để thêm/sửa task và component để filter/search tasks.

<xaiArtifact artifact_id="51705c75-25a6-44a6-8224-317373c115b7" artifact_version_id="2612b72e-4c77-4fc8-b6c3-72faf43742f6" title="src/features/tasks/components/TaskForm.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="54339ecf-08e8-48ed-9bb7-e5f153ae45f3" artifact_version_id="6694b8d4-9361-4689-8be0-7285a3805a32" title="src/features/tasks/components/FilterSearch.tsx" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **TaskForm**: Dùng React Hook Form + Zod để validate form, hỗ trợ cả create và update tasks. Tích hợp với `useTasks` hook để gọi mutations.
- **FilterSearch**: Sử dụng `useMemo` để tối ưu filtering, tránh recomputation không cần thiết. Gửi filtered tasks qua callback để update UI.

---

#### 3.4. Task List và Routing

Tạo component hiển thị danh sách tasks và setup routing với TanStack Router.

<xaiArtifact artifact_id="46dfe4fe-5ffb-4203-93a3-eafa6ddb3ce7" artifact_version_id="6ec9d2b0-5f19-4fae-b0bd-b9a1178ec3c5" title="src/features/tasks/components/TaskList.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="2eab33a7-24b5-4c07-9ff8-aaff220c1acf" artifact_version_id="1aa01a73-dbe7-4978-becc-a7e739bdbe22" title="src/components/TaskItem.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="91b00e79-9bc8-4d0c-aaca-7cc32c39b466" artifact_version_id="55785daf-543a-4fd9-8d91-a17df4a1aab5" title="src/router/routes.ts" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="7109bab4-4a1a-4bfb-8678-0d93b0a039a0" artifact_version_id="94be80ed-cd2d-440b-b136-e0a082c7cac0" title="src/pages/Tasks.tsx" contentType="text/typescript">

import { TaskList } from '../features/tasks/components/TaskList';
import { MainLayout } from '../layouts/MainLayout';

export function Tasks() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}

</xaiArtifact>

<xaiArtifact artifact_id="b27f47e6-6c62-4a87-b885-c60314ca0cc7" artifact_version_id="8fbe4e3e-161a-4971-a501-dcaeb21e4c90" title="src/pages/TaskDetail.tsx" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **TaskList**: Hiển thị danh sách tasks, tích hợp filter/search và form. Handle loading/error states từ TanStack Query.
- **TaskItem**: Memoized component để giảm re-renders, hỗ trợ edit/delete.
- **Routing**: TanStack Router để setup routes `/`, `/tasks`, `/tasks/:id`. `AuthProvider` wrap toàn app để cung cấp auth context.

---

### Bước 4: Thêm Shared Components và Layout

Tạo reusable components và layout cho app.

<xaiArtifact artifact_id="1e385357-4a0e-4192-9d49-7f27f8507401" artifact_version_id="3555c768-497f-4c33-a985-96d75ac1a8e1" title="src/components/Button.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="fbff0af1-09e4-434e-9b99-05ffe9b6a9a7" artifact_version_id="07b9e25b-5f52-4a55-891a-4fd67d3b797e" title="src/components/Input.tsx" contentType="text/typescript">

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

</xaiArtifact>

<xaiArtifact artifact_id="abf38f6d-345a-40a0-bf5a-d33f0f7e9cff" artifact_version_id="40048ea3-0f26-4683-832a-c6bc51c0b3d9" title="src/layouts/MainLayout.tsx" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **Button/Input**: Reusable components với Tailwind styles, hỗ trợ variants và accessibility.
- **MainLayout**: Cung cấp navbar và auth guard (hiển thị `LoginForm` nếu chưa login).

---

### Bước 5: Setup MSW và Testing

Cấu hình MSW để mock API trong dev và test.

<xaiArtifact artifact_id="c5cc25d1-cc8f-43ab-932e-9eb6199d7e0c" artifact_version_id="26d1b3c8-3392-44a6-8c13-09831fbc822a" title="src/api/mocks/browser.ts" contentType="text/typescript">

import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

</xaiArtifact>

Tạo file khởi chạy MSW trong dev:

<xaiArtifact artifact_id="bf2ea6d9-1dca-46a8-ad47-7b885bb69349" artifact_version_id="1116c1b0-fd31-41d1-ab9b-b9375c73663f" title="src/main.tsx" contentType="text/typescript">

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

</xaiArtifact>

Tạo test cho `TaskList`:

<xaiArtifact artifact_id="84eb319a-c040-4664-b6bc-b4293b3b7f76" artifact_version_id="28665af5-23ef-454c-b5a8-d06bb4a33235" title="src/features/tasks/tests/TaskList.test.tsx" contentType="text/typescript">

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

</xaiArtifact>

**Giải Thích**:
- **MSW**: Setup worker để mock API trong dev, tự động chạy khi `NODE_ENV=development`.
- **Test**: Test `TaskList` với mock API, kiểm tra loading state và render tasks.

---

### Bước 6: Document và Benchmark

Tạo file backlog để định nghĩa user stories:

<xaiArtifact artifact_id="2d2b73c4-3f82-4c99-8ac2-b410f40c295f" artifact_version_id="a2aaee6c-5dd2-45fd-bdbc-ec3d1ba9f6c1" title="docs/backlog.md" contentType="text/markdown">

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

</xaiArtifact>

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