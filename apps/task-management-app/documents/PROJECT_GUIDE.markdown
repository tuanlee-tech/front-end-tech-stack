# Hướng Dẫn Dự Án Task Management App

Chào mừng bạn đến với **Task Management App**, một dự án thực hành frontend từ cơ bản đến trung cấp, giúp bạn nắm vững React, TypeScript và các kỹ năng production-ready! Ứng dụng này cho phép quản lý công việc với các tính năng như tạo, đọc, cập nhật, xóa nhiệm vụ (CRUD), lọc/tìm kiếm, và xác thực người dùng cơ bản (đăng nhập/đăng xuất). Phiên bản đầu tiên sử dụng **useState** để quản lý state, với các lần refactor sau tích hợp các Hooks nâng cao để học cách tối ưu.

## 🚀 Tổng Quan Dự Án

Task Management App là một ứng dụng web giúp người dùng quản lý công việc hàng ngày một cách hiệu quả. Đây là dự án lý tưởng để học cách xây dựng ứng dụng frontend với các tính năng:

- **Siêu Nhanh**: Tối ưu hiệu suất với thời gian load trang <2s, số lần re-render <5 mỗi tương tác.
- **Dễ Bảo Trì**: Code modular, reusable, tuân thủ ESLint/Prettier, đạt >80% code coverage.
- **Thân Thiện Với Người Dùng**: Giao diện responsive, hỗ trợ dark mode, drag-and-drop (tùy chọn).

### Tính Năng Chính

- **CRUD Tasks**: Tạo, hiển thị, chỉnh sửa, xóa nhiệm vụ với tiêu đề, mô tả, deadline, độ ưu tiên (low/medium/high).
- **Lọc & Tìm Kiếm**: Lọc theo trạng thái (todo/in-progress/done), ưu tiên, hoặc tìm kiếm bằng từ khóa.
- **Xác Thực Người Dùng**: Đăng nhập/đăng xuất với local storage (có thể mở rộng sang JWT).
- **Giao Diện**: Responsive (mobile-first), dark mode toggle, drag-and-drop sắp xếp (React DnD nếu mở rộng).
- **Xử Lý Dữ Liệu**: Mock API với MSW, mô phỏng API thật với Axios/Fetch.

### Đối Tượng Mục Tiêu

- **Người Mới Học Frontend**: Nắm vững React, TypeScript, và các công cụ hiện đại.
- **Lập Trình Viên Trung Cấp**: Rèn luyện kỹ năng refactor, testing, và tối ưu hiệu suất.
- **Người Muốn Thực Hành**: Áp dụng lý thuyết vào dự án production-ready.

### Thời Gian Ước Tính

- **Tổng Thời Gian**: 6-8 tuần, chia thành các giai đoạn:
  - Tuần 1-2: Thiết lập và xây dựng tính năng chính (CRUD, auth) với `useState`.
  - Tuần 3-4: Refactor lần 1 (chuyển sang `useReducer`, `useRef`, `useId`).
  - Tuần 5-6: Refactor lần 2 (tích hợp `useTransition`, `useImperativeHandle`, `useLayoutEffect`, testing, accessibility).
  - Tuần 7-8: Tích hợp góc nhìn BA/QA/Tech Lead, deploy.
- **Refactor**: 2 lần:
  - Lần 1: Thay `useState` bằng `useReducer`, thêm `useRef` cho focus, `useId` cho form fields.
  - Lần 2: Tích hợp `useTransition`, `useImperativeHandle`, `useLayoutEffect`, testing, accessibility.
- **Kết Quả**: Deploy lên Vercel hoặc Netlify để demo.

## 🛠️ Tech Stack (Cập Nhật 2025)

Dựa trên các phiên bản mới nhất (tính đến 14/08/2025):

- **React 19.0+**: Hooks, concurrent mode cho UI mượt mà.
- **TypeScript 5.5+**: Strict mode, type-safe props/state.
- **React Router v6.2+ hoặc TanStack Router v1.5+**: Routing type-safe.
- **React Hook Form v7.5+ + Zod v3.2+**: Xử lý form với validation.
- **Tailwind CSS v3.4+**: Styling nhanh, responsive.
- **Axios v1.7+ hoặc Fetch API**: Gọi API với error handling.
- **MSW v2.3+**: Mock API cho dev/test.
- **Jest v29.7+ + React Testing Library v15.0+**: Unit và component testing.

## 📚 Những Gì Bạn Sẽ Học Được

Dự án này giúp bạn chuyển từ lý thuyết sang thực hành với các kỹ năng chính:

- **React Cơ Bản**:
  - **Lý Thuyết**: Hiểu lifecycle, Hooks (`useState`, `useEffect`), reconciliation algorithm.
  - **Thực Hành**: Xây dựng components (TaskList, TaskForm) với `useState`, Context API, `useMemo`/`useCallback`.
  - **Mẹo Production**: Tối ưu re-renders (<5 lần khi filter), tránh prop drilling.

- **TypeScript**:
  - **Lý Thuyết**: Types, interfaces, generics, type narrowing.
  - **Thực Hành**: Type props/state, dùng Zod cho schema validation, loại bỏ `any`.
  - **Mẹo Production**: Strict mode, type-safe API responses.

- **Quản Lý Form & Validation**:
  - **Lý Thuyết**: Uncontrolled components, minimal re-renders.
  - **Thực Hành**: TaskForm với React Hook Form, Zod resolver.
  - **Mẹo Production**: Debounce inputs, thêm ARIA labels cho accessibility.

- **Routing Client-Side**:
  - **Lý Thuyết**: Client-side vs server-side routing, type-safe routes.
  - **Thực Hành**: Setup routes với TanStack Router, protected routes.
  - **Mẹo Production**: Lazy loading routes để giảm bundle size.

- **Quản Lý Async Data**:
  - **Lý Thuyết**: Caching, error boundaries.
  - **Thực Hành**: TanStack Query cho fetch/mutations, Axios interceptors.
  - **Mẹo Production**: Retry logic, stale-while-revalidate.

- **UI Responsive**:
  - **Lý Thuyết**: Mobile-first, media queries.
  - **Thực Hành**: Tailwind classes, dark mode với prefers-color-scheme.
  - **Mẹo Production**: Test trên nhiều thiết bị với Chrome DevTools.

- **Testing**:
  - **Lý Thuyết**: Test pyramid, WCAG basics.
  - **Thực Hành**: Unit tests (Jest), interaction tests (React Testing Library), a11y tests (jest-axe).
  - **Mẹo Production**: Tích hợp CI (GitHub Actions), đạt >80% coverage.

- **Mock API**:
  - **Lý Thuyết**: Lợi ích của mock API (reliable, offline).
  - **Thực Hành**: Setup MSW handlers cho /tasks.
  - **Mẹo Production**: Switch mock/real API qua env variables.

## 🪝 Hooks trong Phiên Bản Đầu Tiên

Phiên bản đầu tiên sử dụng **useState** và **useEffect** để quản lý state, tập trung vào sự đơn giản và dễ hiểu. Các Hooks nâng cao sẽ được thêm vào trong các lần refactor:

- **useState**: Quản lý tasks, filters, và form state.
- **useEffect**: Sync filtered tasks và gọi API.
- **useMemo**: Tối ưu filtering để tránh recomputation không cần thiết.

**Kế Hoạch Refactor**:

- **Lần 1**: Thay `useState` bằng `useReducer` trong `TaskList` để quản lý state phức tạp, thêm `useRef` để focus input, `useId` cho form fields (accessibility).
- **Lần 2**: Tích hợp `useTransition` và `useDeferredValue` cho filter/search nặng, `useImperativeHandle` để expose form methods, `useLayoutEffect` cho scroll adjustments, `useDebugValue` để debug hooks.
- **Mục Tiêu**: Học cách chuyển từ `useState` sang các Hooks nâng cao, đo hiệu suất sau mỗi lần refactor.

## 🗂️ Cấu Trúc Thư Mục

Cấu trúc feature-based giúp code dễ mở rộng và maintain:

```
task-management-app/
├── public/                  # Tài nguyên tĩnh
├── src/                     # Source code
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
│   │   └── TaskDetail.tsx
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
│   ├── patterns.md
│   └── test-plan.md
├── tests/
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

**Lý Do Cấu Trúc Scalable**:

- Feature folders đảm bảo tính độc lập, dễ thêm/xóa tính năng.
- Tests và docs co-located, dễ tìm và maintain.
- Rõ ràng cho junior devs nhờ tổ chức logic.

## 📐 Design Patterns

1. **Compound Components**: Dùng Context trong `TaskList` để share state với `TaskItem`.
2. **Custom Hooks**: `useTasks`, `useAuth` tách logic.
3. **Memoization**: `React.memo(TaskItem)`, `useMemo` cho filter.
4. **Context Module**: `AuthContext` quản lý auth state.
5. **Render Props**: Dùng cho async data rendering.
6. **Strategy Pattern**: Chuyển đổi sort/filter logic.

## 🛠️ Thiết Lập Dự Án

### Bước 1: Tạo Project với Vite + TypeScript

```bash
npm create vite@latest task-management-app -- --template react-ts
cd task-management-app
npm install
```

### Bước 2: Cài Đặt Dependencies

#### ✅ Dependencies (Production)

```bash
npm install @tanstack/react-query @tanstack/react-router @tanstack/react-router-devtools react-hook-form zod @hookform/resolvers axios tailwindcss @tailwindcss/vite
```

#### 🛠️ DevDependencies (Development & Testing)

```bash
npm install --save-dev @types/react @types/react-dom @tanstack/router-plugin msw @axe-core/react @testing-library/react @testing-library/jest-dom @testing-library/user-event prettier vitest jsdom
```

### Bước 3: Cấu Hình Tailwind CSS

Cập nhật `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Thêm Tailwind vào `src/index.css`:

```css
@import 'tailwindcss';
```

### Bước 4: Cấu Hình ESLint & Prettier

Tạo `.eslintrc.js`:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
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

### Bước 5: Cấu Hình TypeScript

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

### Bước 6: Cấu Hình Jest

Cập nhật `vite.config.ts` để hỗ trợ testing với Vitest (thay vì Jest, vì Vite tích hợp tốt hơn với Vitest):

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    globals: true,
  },
});
```

Tạo `src/tests/setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
configure({ testIdAttribute: 'data-testid' });
```

### Bước 7: Setup MSW cho Mock API

Tạo file `mockServiceWorker.js`:
Chạy lệnh khởi tạo MSW

```
npx msw init public
```

MSW sẽ tạo file `mockServiceWorker.js` trong thư mục public của dự án.

#### MSW version 1:

Tạo `src/api/mocks/handlers.ts`:

```typescript
import { rest } from 'msw';
import { Task } from '../../features/tasks/types';

let mockTasks: Task[] = [
  { id: '1', title: 'Sample Task', priority: 'medium', status: 'todo' },
];

export const handlers = [
  rest.get('/api/tasks', (req, res, ctx) => {
    return res(ctx.json(mockTasks));
  }),
  rest.post('/api/tasks', async (req, res, ctx) => {
    const task = await req.json();
    const newTask = {
      id: String(mockTasks.length + 1),
      ...task,
      status: 'todo',
    };
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

Tạo `src/api/mocks/browser.ts`:

```typescript
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

#### MSW version 2:

Tạo `src/api/mocks/handlers.ts`:

```typescript
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
```

Tạo `src/api/mocks/browser.ts`:

```typescript
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

/**
 * Khởi tạo MSW worker cho browser
 */
export const worker = setupWorker(...handlers);
```

Tạo `src/api/mocks/setup.ts`:

```typescript
let isMSWInitialized = false;

export async function setupMSW() {
  if (isMSWInitialized || process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./browser');
  await worker.start();
  isMSWInitialized = true;
}

// Khởi động ngay khi module được tải
setupMSW();
```

Cập nhật `src/App.tsx`:

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router/routes";

/*
* Set defaultOptions cho queryClient.
* Có thể overwrite thông số lại trong các useQuery nếu cần
*/
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Giảm thời gian lưu cache nếu không cần thiết
      staleTime: 1000 * 60 * 5, // 5 phút
      gcTime: 1000 * 60 * 10, // cacheTime ~ gcTime  10 phút
      // Tắt retry cho các query không quan trọng
      retry: false,
      // Tắt refetch khi window focus để giảm tải API
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App

```

Cập nhật `src/main.tsx`:

```typescript
// File: src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './api/mocks/setup'; // Import để khởi động MSW

ReactDOM.createRoot(document.getElementById('root')!).render(
  process.env.NODE_ENV === 'development' ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
```

### Bước 8: Code Mẫu (Phiên Bản Đầu Tiên với useState)

Dưới đây là các file code chính, sử dụng **useState** và **useEffect** như trong code mẫu bạn cung cấp, đảm bảo type-safe và clean code.

#### 8.1. src/features/tasks/types.ts

```typescript
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
```

**Code Review (Tech Lead)**:

- Types rõ ràng, type-safe, hỗ trợ cả Task và TaskInput.
- Cải thiện: Thêm metadata (ví dụ: `createdAt`, `updatedAt`) trong lần refactor.

#### 8.2. src/contexts/AuthContext.tsx

```typescript
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

/** Context để quản lý trạng thái xác thực */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const login = (email: string, password: string) => {
    // Mock login logic (thay bằng API thật sau)
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

/** Hook để sử dụng AuthContext */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
```

**Code Review (Tech Lead)**:

- Sử dụng `useState` (thông qua `useLocalStorage`) để quản lý user state, đơn giản và dễ hiểu.
- Cải thiện: Trong lần refactor, thêm error handling cho login và tích hợp JWT.

#### 8.3. src/hooks/useLocalStorage.ts

```typescript
import { useState } from 'react';

/** Custom hook để lưu trữ và đồng bộ dữ liệu với localStorage */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
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

**Code Review (Tech Lead)**:

- Hook type-safe với generics, phù hợp cho cả user và các dữ liệu khác.
- Cải thiện: Thêm type checking nghiêm ngặt hơn và error boundary trong lần refactor.

#### 8.4. src/features/auth/components/LoginForm.tsx

```typescript
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

type LoginFormData = z.infer<typeof loginSchema>;

/** Component form đăng nhập */
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
          placeholder="Mật khẩu"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <Button type="submit">Đăng nhập</Button>
    </form>
  );
}
```

**Code Review (Tech Lead)**:

- Form sử dụng React Hook Form + Zod, đảm bảo validation và accessibility.
- Cải thiện: Thêm `useRef` để focus input trong lần refactor, tích hợp `useId` cho ARIA labels.

#### 8.5. src/api/axiosInstance.ts

```typescript
import axios from 'axios';

/** Axios instance với cấu hình cơ bản */
const axiosInstance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  /*
   * Thêm auth headers sau này
   * const token = localStorage.getItem("token");
   * if(token) config.headers.Authorization = `Bearer ${token}`;
   *
   */
  return config;
});

export default axiosInstance;
```

**Code Review (Tech Lead)**:

- Cấu hình Axios đơn giản, sẵn sàng mở rộng với interceptors.
- Cải thiện: Thêm error handling và retry logic trong lần refactor.

#### 8.6. src/features/tasks/hooks/useTasks.ts

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../api/axiosInstance';
import { Task, TaskInput } from '../types';

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
    mutationFn: async ({
      id,
      task,
    }: {
      id: string;
      task: Partial<TaskInput>;
    }) => {
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

## Cải thiện hook `useTasks` với Optimistic Updates

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../api/axiosInstance';
import { Task, TaskInput } from '../types';

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
```

---

### Phân tích những thay đổi

1.  **`createTask`**:
    - Thay vì gọi `invalidateQueries`, chúng ta sử dụng **`onSuccess`** để gọi **`queryClient.setQueryData`**.
    - `setQueryData` cho phép chúng ta trực tiếp thêm task mới vào mảng `tasks` hiện có trong cache, giúp UI cập nhật ngay lập tức mà không cần re-fetch.

2.  **`updateTask` và `deleteTask`**:
    - **`onMutate`**: Đây là bước quan trọng nhất của optimistic updates. Nó chạy ngay trước khi mutation được gửi đi.
      - **`cancelQueries`**: Ngăn chặn bất kỳ refetch nào đang diễn ra, tránh việc dữ liệu bị "nhảy" không mong muốn.
      - **`getQueryData`**: Lấy và lưu lại dữ liệu cũ. Đây là "điểm an toàn" để hoàn tác nếu có lỗi.
      - **`setQueryData`**: Cập nhật cache ngay lập tức với dữ liệu mới (đã xóa hoặc cập nhật).
    - **`onError`**: Nếu mutation thất bại (ví dụ: mất kết nối, lỗi server), chúng ta sẽ sử dụng dữ liệu đã lưu ở `onMutate` để **hoàn tác** lại giao diện.
    - **`onSettled`**: Cuối cùng, dù mutation thành công hay thất bại, chúng ta vẫn gọi `invalidateQueries`. Điều này đảm bảo rằng TanStack Query sẽ refetch dữ liệu trong nền để đồng bộ hóa với server. Điều này cực kỳ hữu ích nếu có những thay đổi khác xảy ra trên server trong lúc mutation của bạn đang chạy.

**Code Review (Tech Lead)**:

- TanStack Query quản lý async data hiệu quả, tích hợp tốt với MSW.
- Cải thiện: Thêm `useDebugValue` trong lần refactor để debug số tasks.

#### 8.7. src/features/tasks/components/TaskForm.tsx

```typescript
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { TaskInput } from '../types';
import { useTasks } from '../hooks/useTasks';

const taskSchema = z.object({
  title: z.string().min(3, 'Tiêu đề phải có ít nhất 3 ký tự'),
  description: z.string().optional(),
  deadline: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  task?: TaskInput;
  onSubmitSuccess?: () => void;
}

/** Component form để tạo/cập nhật task */
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
          placeholder="Tiêu đề task"
          {...register('title')}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <span className="text-red-500">{errors.title.message}</span>}
      </div>
      <div>
        <Input
          placeholder="Mô tả"
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
          <option value="low">Thấp</option>
          <option value="medium">Trung bình</option>
          <option value="high">Cao</option>
        </select>
        {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
      </div>
      <Button type="submit">{task ? 'Cập nhật Task' : 'Tạo Task'}</Button>
    </form>
  );
}
```

**Code Review (Tech Lead)**:

- Form đơn giản, sử dụng React Hook Form + Zod, hỗ trợ create/update.
- Cải thiện: Thêm `useRef` để focus input, `useImperativeHandle` để expose resetForm trong lần refactor.

#### 8.8. src/features/tasks/components/FilterSearch.tsx

```typescript
import { useState, useMemo, useEffect } from 'react';
import { Input } from '../../../components/Input';
import { Task } from '../types';

interface FilterSearchProps {
  tasks: Task[];
  onFilter: (filteredTasks: Task[]) => void;
}

/** Component để lọc và tìm kiếm tasks */
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
        placeholder="Tìm kiếm tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="todo">Chưa làm</option>
        <option value="in-progress">Đang làm</option>
        <option value="done">Hoàn thành</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">Tất cả độ ưu tiên</option>
        <option value="low">Thấp</option>
        <option value="medium">Trung bình</option>
        <option value="high">Cao</option>
      </select>
    </div>
  );
}
```

**Code Review (Tech Lead)**:

- Sử dụng `useState` và `useMemo` để filter tasks, hiệu quả và đơn giản.
- Cải thiện: Thêm `useTransition` và `useDeferredValue` trong lần refactor để xử lý danh sách lớn.

#### 8.9. src/features/tasks/components/TaskList.tsx

```typescript
import { useState } from 'react';
import { Task } from '../types';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../../../components/TaskItem';
import { FilterSearch } from './FilterSearch';
import { TaskForm } from './TaskForm';

/** Component hiển thị danh sách tasks */
export function TaskList() {
  const { tasks, isLoading, error, deleteTask } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

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

**Code Review (Tech Lead)**:

- `useState` quản lý filtered tasks, phù hợp cho phiên bản đầu tiên.
- Cải thiện: Thay bằng `useReducer` trong lần refactor để quản lý state phức tạp.

#### 8.10. src/components/TaskItem.tsx

```typescript
import React from 'react';
import { Task } from '../features/tasks/types';
import { Button } from './Button';
import { useNavigate } from '@tanstack/react-router';

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

/** Component hiển thị thông tin một task */
export const TaskItem = React.memo(({ task, onDelete }: TaskItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p>Ưu tiên: {task.priority}</p>
        <p>Trạng thái: {task.status}</p>
        {task.deadline && <p>Hạn chót: {new Date(task.deadline).toLocaleDateString()}</p>}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => navigate({ to: `/tasks/${task.id}` })}>Sửa</Button>
        <Button onClick={onDelete} variant="danger">Xóa</Button>
      </div>
    </div>
  );
});
```

**Code Review (Tech Lead)**:

- Sử dụng `React.memo` để tối ưu re-renders.
- Cải thiện: Thêm animations với Framer Motion trong lần refactor.

#### 8.11. src/router/routes.ts

```typescript
import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { AuthProvider } from '../contexts/AuthContext';

// Sử dụng lazy() để tải các component một cách bất đồng bộ
const Home = lazy(() => import("../pages/Home"));
const Tasks = lazy(() => import("../pages/Tasks"));
const TaskDetail = lazy(() => import("../pages/TaskDetail"));

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

**Code Review (Tech Lead)**:

- TanStack Router cung cấp type-safe routing, dễ mở rộng.
- Cải thiện: Thêm lazy loading routes trong lần refactor.

#### 8.12. src/pages/Tasks.tsx

```typescript
import { TaskList } from '../features/tasks/components/TaskList';
import { MainLayout } from '../layouts/MainLayout';

/** Trang hiển thị danh sách tasks */
export function Tasks() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}
```

**Code Review (Tech Lead)**:

- Trang đơn giản, tích hợp tốt với layout và TaskList.
- Cải thiện: Thêm loading skeleton trong lần refactor.

#### 8.13. src/pages/TaskDetail.tsx

```typescript
import { useParams } from '@tanstack/react-router';
import { TaskForm } from '../features/tasks/components/TaskForm';
import { useTasks } from '../features/tasks/hooks/useTasks';
import { MainLayout } from '../layouts/MainLayout';

/** Trang chi tiết và chỉnh sửa task */
export function TaskDetail() {
  const { id } = useParams({ from: '/tasks/$id' });
  const { tasks } = useTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <div>Không tìm thấy task</div>;

  return (
    <MainLayout>
      <TaskForm task={task} onSubmitSuccess={() => router.navigate({ to: '/tasks' })} />
    </MainLayout>
  );
}
```

**Code Review (Tech Lead)**:

- Trang chi tiết đơn giản, tích hợp tốt với TaskForm.
- Cải thiện: Thêm error boundary và loading state trong lần refactor.

#### 8.14. src/components/Button.tsx

```typescript
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger' | 'default';
}
export function Button({ children, variant = 'default', ...props }: ButtonProps) {
    const variantStyles =
        variant === 'default'
            ? 'bg-gray-200 text-black hover:bg-gray-300'
            : variant === 'danger'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600';
    return (
        <button className={`px-4 py-2 rounded font-semibold ${variantStyles}`} {...props}>
            {children}
        </button>
    )
}
```

**Code Review (Tech Lead)**:

- Button tái sử dụng, hỗ trợ variants.
- Cải thiện: Thêm ARIA roles và loading state trong lần refactor.

#### 8.15. src/components/Input.tsx

```typescript
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

/** Component input tái sử dụng */
export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`p-2 border rounded w-full ${className}`}
      {...props}
    />
  );
}
```

**Code Review (Tech Lead)**:

- Input tái sử dụng, tích hợp tốt với Tailwind.
- Cải thiện: Thêm `useRef` và `useId` cho accessibility trong lần refactor.

#### 8.16. src/layouts/MainLayout.tsx

```typescript
import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../features/auth/components/LoginForm";

interface MainLayoutProps {
    children?: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
    const { user, logout } = useAuth();
    if (!user) return <LoginForm />
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 p-4 shadow">
                <div className="container mx-auto flex justify-between">
                    <div className="space-x-4">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/tasks">Tasks</Link>
                    </div>
                    <Button onClick={logout}>Đăng xuất</Button>
                </div>
            </nav>
            <main className="container mx-auto p-4">
                {children || <Outlet />}
            </main>
        </div>
    );
}
```

**Code Review (Tech Lead)**:

- Layout cung cấp auth guard và navbar.
- Cải thiện: Thêm dark mode toggle và responsive navbar trong lần refactor.

### Bước 9: Document & Benchmark

Tạo `docs/backlog.md`:

```markdown
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

- **Re-renders**: Dùng React Profiler, mục tiêu <5 lần mỗi tương tác.
- **Latency**: Đo API calls với Chrome Network tab (<500ms).
- **Accessibility**: Chạy Lighthouse, đạt WCAG 2.1 Level AA.
- **Performance**: Page load <2s.

### Bước 10: Kế Hoạch Refactor

#### Refactor Lần 1: Tích hợp useReducer, useRef, useId

- **Mục Tiêu**: Chuyển từ `useState` sang `useReducer` để quản lý state phức tạp, thêm `useRef` để focus input, và `useId` cho accessibility.
- **Thay Đổi**:
  - Trong `TaskList.tsx`, thay `useState` bằng `useReducer` với actions (`SET_TASKS`, `ADD_TASK`, `UPDATE_TASK`, `DELETE_TASK`).
  - Trong `TaskForm.tsx`, thêm `useRef` để focus input sau submit, `useId` cho ARIA labels.
  - Thêm type-safe action creators cho `useReducer`.
- **Code Mẫu (TaskList.tsx)**:

```typescript
import { useReducer, useRef, useEffect } from 'react';
import { Task, TaskAction } from '../types';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../../../components/TaskItem';
import { FilterSearch } from './FilterSearch';
import { TaskForm } from './TaskForm';

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map((task) => (task.id === action.payload.id ? action.payload : task));
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

/** TaskList component quản lý danh sách tasks */
export function TaskList() {
  const { tasks, isLoading, error, deleteTask } = useTasks();
  const [filteredTasks, dispatch] = useReducer(taskReducer, tasks);

  useEffect(() => {
    dispatch({ type: 'SET_TASKS', payload: tasks });
  }, [tasks]);

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

  return (
    <div className="p-4">
      <TaskForm onSubmitSuccess={(task) => dispatch({ type: 'ADD_TASK', payload: task })} />
      <FilterSearch tasks={tasks} onFilter={(filtered) => dispatch({ type: 'SET_TASKS', payload: filtered })} />
      <div className="grid gap-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => {
              deleteTask.mutate(task.id);
              dispatch({ type: 'DELETE_TASK', id: task.id });
            }}
          />
        ))}
      </div>
    </div>
  );
}
```

- **Code Mẫu (TaskForm.tsx)**:

```typescript
import { forwardRef, useRef, useId, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { TaskInput } from '../types';
import { useTasks } from '../hooks/useTasks';

const taskSchema = z.object({
  title: z.string().min(3, 'Tiêu đề phải có ít nhất 3 ký tự'),
  description: z.string().optional(),
  deadline: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  task?: TaskInput;
  onSubmitSuccess?: (task: TaskInput) => void;
}

/** TaskForm component cho tạo/cập nhật task */
const TaskForm = forwardRef(({ task, onSubmitSuccess }: TaskFormProps, ref) => {
  const { createTask, updateTask } = useTasks();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: task || { title: '', description: '', priority: 'medium' },
  });
  const titleRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useImperativeHandle(ref, () => ({
    resetForm: () => reset(),
    focusTitle: () => titleRef.current?.focus(),
  }));

  const onSubmit = (data: TaskFormData) => {
    if (task?.id) {
      updateTask.mutate({ id: task.id, task: data }, { onSuccess: () => onSubmitSuccess?.(data) });
    } else {
      createTask.mutate(data, { onSuccess: () => {
        onSubmitSuccess?.(data);
        reset();
        titleRef.current?.focus();
      }});
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div>
        <label htmlFor={titleId} className="block mb-1">Tiêu đề</label>
        <Input
          id={titleId}
          placeholder="Tiêu đề task"
          {...register('title')}
          ref={titleRef}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <span className="text-red-500">{errors.title.message}</span>}
      </div>
      <div>
        <Input
          placeholder="Mô tả"
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
          <option value="low">Thấp</option>
          <option value="medium">Trung bình</option>
          <option value="high">Cao</option>
        </select>
        {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
      </div>
      <Button type="submit">{task ? 'Cập nhật Task' : 'Tạo Task'}</Button>
    </form>
  );
});

export default TaskForm;
```

#### Refactor Lần 2: Tích hợp useTransition, useDeferredValue, useLayoutEffect, useDebugValue

- **Mục Tiêu**: Tối ưu hiệu suất với concurrent rendering, cải thiện UX và developer experience.
- **Thay Đổi**:
  - Trong `FilterSearch.tsx`, thêm `useTransition` và `useDeferredValue` để xử lý filter/search nặng.
  - Trong `TaskList.tsx`, thêm `useLayoutEffect` để điều chỉnh scroll position.
  - Trong `useTasks.ts`, thêm `useDebugValue` để debug số tasks.
- **Code Mẫu (FilterSearch.tsx)**:

```typescript
import { useState, useMemo, useTransition, useDeferredValue, useEffect } from 'react';
import { Input } from '../../../components/Input';
import { Task } from '../types';

interface FilterSearchProps {
  tasks: Task[];
  onFilter: (filteredTasks: Task[]) => void;
}

/** Component để lọc và tìm kiếm tasks */
export function FilterSearch({ tasks, onFilter }: FilterSearchProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [priority, setPriority] = useState<string>('all');
  const [isPending, startTransition] = useTransition();
  const deferredSearch = useDeferredValue(search);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(deferredSearch.toLowerCase());
      const matchesStatus = status === 'all' || task.status === status;
      const matchesPriority = priority === 'all' || task.priority === priority;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, deferredSearch, status, priority]);

  useEffect(() => {
    startTransition(() => {
      onFilter(filteredTasks);
    });
  }, [filteredTasks, onFilter]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input
        placeholder="Tìm kiếm tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={isPending}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="todo">Chưa làm</option>
        <option value="in-progress">Đang làm</option>
        <option value="done">Hoàn thành</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">Tất cả độ ưu tiên</option>
        <option value="low">Thấp</option>
        <option value="medium">Trung bình</option>
        <option value="high">Cao</option>
      </select>
      {isPending && <div>Đang lọc...</div>}
    </div>
  );
}
```

- **Code Mẫu (useTasks.ts)**:

```typescript
import {
  useQuery,
  useMutation,
  useQueryClient,
  useDebugValue,
} from '@tanstack/react-query';
import axiosInstance from '../../../api/axiosInstance';
import { Task, TaskInput } from '../types';

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
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  useDebugValue(tasks.length ? `Tasks: ${tasks.length}` : 'No tasks');

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
    mutationFn: async ({
      id,
      task,
    }: {
      id: string;
      task: Partial<TaskInput>;
    }) => {
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

### Bước 11: Kiến Thức Còn Thiếu & Gợi Ý Học Thêm

Dự án này bao quát ~90% React core (hooks, patterns, production). Tuy nhiên, với phạm vi client-side, một số chủ đề nâng cao chưa được chạm tới:

1. **Server-Side Rendering (SSR)/Static Generation**:
   - **Mô Tả**: Chưa hỗ trợ SSR hay static generation.
   - **Gợi Ý Học**: Migrate sang **Next.js 15+**. Học `getServerSideProps` và `getStaticProps`.
   - **Đề Tài Code**: Xây blog app với SSR cho chi tiết bài viết, SSG cho danh sách bài viết.
   - **Tài Liệu**: [Next.js Docs](https://nextjs.org/docs).

2. **Advanced State Management (Redux/Recoil/Zustand)**:
   - **Mô Tả**: Context API đủ cho app nhỏ, nhưng không tối ưu cho large-scale.
   - **Gợi Ý Học**: Tích hợp **Redux Toolkit** hoặc **Zustand**.
   - **Đề Tài Code**: Thêm collaborative editing (real-time tasks) với WebSockets.
   - **Tài Liệu**: [Redux Toolkit Docs](https://redux-toolkit.js.org).

3. **Animations/Transitions**:
   - **Mô Tả**: Chưa có animations mượt mà.
   - **Gợi Ý Học**: Dùng **Framer Motion** hoặc **React Spring**.
   - **Đề Tài Code**: Thêm animation cho task addition/deletion.
   - **Tài Liệu**: [Framer Motion Docs](https://www.framer.com/motion).

4. **Error Boundaries & Suspense for Data**:
   - **Mô Tả**: Error handling cơ bản, chưa dùng Suspense hay Error Boundaries sâu.
   - **Gợi Ý Học**: Tạo custom **ErrorBoundary** và dùng SuspenseList.
   - **Đề Tài Code**: App với streaming data.
   - **Tài Liệu**: [React Suspense Docs](https://react.dev/reference/react/Suspense).

5. **Web Vitals & Performance Deep Dive**:
   - **Mô Tả**: Hiệu suất cơ bản tốt, nhưng chưa tối ưu CLS, LCP, FID.
   - **Gợi Ý Học**: Dùng **Lighthouse** để audit.
   - **Đề Tài Code**: Tối ưu image loading với lazy loading.
   - **Tài Liệu**: [Web Vitals Guide](https://web.dev/vitals).

6. **Internationalization (i18n)**:
   - **Mô Tả**: Chưa hỗ trợ đa ngôn ngữ.
   - **Gợi Ý Học**: Tích hợp **react-i18next**.
   - **Đề Tài Code**: Thêm multi-language (tiếng Anh, tiếng Việt).
   - **Tài Liệu**: [react-i18next Docs](https://react.i18next.com).

**Thực Hành Đề Xuất**:

- Thêm tính năng (dark mode, animations) vào dự án.
- Refactor 2 lần, mỗi lần tích hợp 2-3 Hooks/main nâng cao.
- Benchmark hiệu suất sau mỗi lần refactor (re-renders <3, page load <2s).

### Bước 12: Tiếp Theo

1. **Chạy Project**: `npm run dev`, kiểm tra UI tại `http://localhost:5173`.
2. **Test API**: Gọi `/api/tasks` trong console để kiểm tra MSW.
3. **Chạy Tests**: `npm test`, mục tiêu >80% coverage.
4. **Refactor**: Thực hiện 2 lần refactor như mô tả ở trên.
5. **Deploy**: Triển khai lên Vercel (`vercel --prod`).

## 🎯 Sau Dự Án Này

- **Thành Thạo**: React Hooks, TypeScript, testing, và production patterns.
- **Sẵn Sàng**: Xây dựng dashboard, collaborative UI.
- **Lãnh Đạo**: Giải thích patterns, hướng dẫn team.
