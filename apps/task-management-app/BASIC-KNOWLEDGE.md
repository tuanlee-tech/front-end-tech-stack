**Dự Án 1: Task Management App (Cơ Bản đến Trung Cấp)**

 Bộ lý thuyết này tập trung vào các khái niệm cốt lõi, đảm bảo bạn nắm vững nền tảng trước khi bắt tay vào coding. Mỗi phần lý thuyết sẽ ngắn gọn, dễ hiểu, nhấn mạnh vào khía cạnh thực tế và liên quan trực tiếp đến dự án, giúp bạn rà soát kiến thức và tránh các pitfalls phổ biến. Các công nghệ bao gồm: **React 19+, TypeScript 5.5+, React Router/TanStack Router, React Hook Form + Zod, Tailwind CSS, Axios/Fetch, MSW, Jest + React Testing Library**. 

---

## 📚 Bộ Lý Thuyết Must-Have Cho Dự Án 1

### 1. React 19+ (Hooks, Component Composition, Suspense)

**Lý Thuyết Cốt Lõi**:
- **React là gì?**: Thư viện JavaScript để xây dựng giao diện người dùng (UI) theo cách declarative, component-based. React 19+ cải tiến với **Concurrent Rendering** (cho phép ưu tiên render tasks) và **Suspense** (hỗ trợ data fetching và lazy loading).
- **Components**: Các khối UI độc lập, reusable, có thể là functional (dùng Hooks) hoặc class (ít dùng hơn). Trong dự án, dùng functional components với Hooks.
- **Hooks**:
  - **useState**: Quản lý state cục bộ (e.g., toggle dark mode: `const [isDark, setIsDark] = useState(false)`).
  - **useEffect**: Xử lý side effects (e.g., fetch tasks khi component mount: `useEffect(() => fetchTasks(), [])`).
  - **useMemo/useCallback**: Memoize giá trị/hàm để tránh recomputation không cần thiết (e.g., `useMemo(() => filterTasks(tasks), [tasks])`).
  - **Custom Hooks**: Tách logic reusable (e.g., `useLocalStorage` để lưu tasks vào local storage).
- **Component Composition**: Kết hợp components để tạo UI phức tạp (e.g., `<TaskList><TaskItem /></TaskList>`), sử dụng **Context API** để tránh prop drilling.
- **Suspense**: Hỗ trợ lazy loading components (e.g., `const TaskDetail = lazy(() => import('./TaskDetail'))`) và data fetching (kết hợp với TanStack Query).
- **Reconciliation Algorithm**: React so sánh virtual DOM với DOM thực để tối ưu update, tránh re-renders thừa bằng memoization.
- **Pitfalls**:
  - Quên cleanup trong `useEffect` (gây memory leaks).
  - Dùng `useState` không tối ưu, gây re-renders thừa.
  - Prop drilling làm code khó maintain.

**Áp Dụng Trong Dự Án**:
- Xây dựng components như `TaskList`, `TaskForm`, `TaskItem`.
- Dùng `useState` cho local state (e.g., form inputs), `useEffect` cho API calls, `useMemo` cho filtering tasks.
- Áp dụng Suspense để lazy load `TaskDetail` page.
- Dùng Context cho auth state (e.g., `AuthContext`).

**Production Tip**:
- Tránh infinite loops trong `useEffect` bằng cách kiểm tra dependencies.
- Sử dụng React DevTools để debug re-renders.

---

### 2. TypeScript 5.5+ (Strict Mode, Types/Interfaces, Zod Integration)

**Lý Thuyết Cốt Lõi**:
- **TypeScript là gì?**: Superset của JavaScript, thêm static typing để bắt lỗi tại compile-time. TypeScript 5.5+ cải tiến type inference và discriminated unions.
- **Types vs Interfaces**:
  - **Types**: Linh hoạt, dùng cho unions, intersections (e.g., `type Priority = 'low' | 'medium' | 'high'`).
  - **Interfaces**: Tốt cho objects, hỗ trợ extends (e.g., `interface Task { id: string; title: string }`).
- **Utility Types**: `Pick`, `Omit`, `Partial` để tái sử dụng types (e.g., `Pick<Task, 'id' | 'title'>`).
- **Generics**: Tạo hàm linh hoạt với types (e.g., `function fetchData<T>(url: string): Promise<T>`).
- **Type Narrowing**: Sử dụng type guards (e.g., `if (isTask(obj))` để check object shape).
- **Strict Mode**: Bật `strict: true` trong `tsconfig.json` để bắt lỗi null/undefined, tăng type safety.
- **Zod Integration**: Thư viện schema validation, hỗ trợ type inference (e.g., `type TaskInput = z.infer<typeof taskSchema>`).
- **Pitfalls**:
  - Dùng `any` làm mất lợi ích type safety.
  - Không tận dụng type inference từ Zod, dẫn đến duplicate types.
  - Quên strict null checks, gây runtime errors.

**Áp Dụng Trong Dự Án**:
- Type props/state (e.g., `interface Task { id: string; title: string; priority: Priority }`).
- Dùng Zod cho form validation (e.g., `taskSchema = z.object({ title: z.string().min(3) })`).
- Generics cho API calls (e.g., `fetchTasks<T>()`).
- Refactor từ JavaScript sang TypeScript, loại bỏ `any`.

**Production Tip**:
- Bật `noImplicitAny` và `strictNullChecks` trong `tsconfig.json`.
- Dùng Zod để generate types từ API responses.

---

### 3. React Router v6.2+ / TanStack Router v1.5+ (Client-Side Routing)

**Lý Thuyết Cốt Lõi**:
- **Routing là gì?**: Điều hướng giữa các "pages" trong single-page apps (SPAs) mà không reload trình duyệt.
- **React Router**: Thư viện phổ biến, hỗ trợ declarative routing (e.g., `<Route path="/tasks" element={<Tasks />} />`).
- **TanStack Router**: Type-safe, hỗ trợ data loaders (e.g., `loader: () => fetchTasks()`), giảm boilerplate so với React Router.
- **Key Concepts**:
  - **Nested Routes**: Xếp chồng routes (e.g., `/tasks/:id` bên trong `/tasks`).
  - **Protected Routes**: Kiểm tra auth trước khi render (e.g., redirect nếu chưa login).
  - **Data Loaders**: Fetch data trước khi render route, giảm waterfall requests.
- **Pitfalls**:
  - Quên lazy loading routes, làm tăng bundle size.
  - Không handle 404 routes, gây UX kém.

**Áp Dụng Trong Dự Án**:
- Setup routes cho `/home`, `/tasks`, `/tasks/:id`.
- Dùng TanStack Router cho type-safe routes (e.g., `createRouter({ routeTree })`).
- Thêm protected routes cho `/tasks` (check auth).
- Refactor: Lazy load `/tasks/:id` để giảm initial load time.

**Production Tip**:
- Dùng `loader` để prefetch data, giảm latency.
- Test routes với browser history API để đảm bảo navigation mượt.

---

### 4. React Hook Form v7.5+ + Zod v3.2+ (Form Handling & Validation)

**Lý Thuyết Cốt Lõi**:
- **React Hook Form**: Thư viện form tối ưu, sử dụng uncontrolled components để giảm re-renders. Key features: `useForm`, `register`, `handleSubmit`, `formState`.
- **Zod**: Thư viện schema validation, hỗ trợ type inference và validation mạnh mẽ (e.g., `z.string().min(3)`).
- **Key Concepts**:
  - **Uncontrolled Components**: Inputs được quản lý bởi DOM, không bởi React state, giảm re-renders.
  - **Validation**: Zod resolver tích hợp với React Hook Form để validate forms (e.g., `useForm({ resolver: zodResolver(taskSchema) })`).
  - **Error Handling**: Hiển thị errors từ `formState.errors` (e.g., `errors.title?.message`).
- **Pitfalls**:
  - Quên reset form sau submit, gây UX kém.
  - Không tối ưu validation, dẫn đến performance issues.
  - Bỏ qua accessibility (e.g., thiếu ARIA labels cho errors).

**Áp Dụng Trong Dự Án**:
- Xây dựng `TaskForm` với `useForm`, `register` cho inputs (title, description, deadline).
- Dùng Zod schema: `taskSchema = z.object({ title: z.string().min(3), deadline: z.date() })`.
- Hiển thị error messages inline (e.g., `<span>{errors.title?.message}</span>`).
- Refactor: Thêm custom validation (e.g., deadline > current date).

**Production Tip**:
- Debounce input changes để giảm API calls.
- Dùng ARIA attributes (e.g., `aria-invalid`) cho accessibility.

---

### 5. Tailwind CSS v3.4+ (Utility-First Styling)

**Lý Thuyết Cốt Lõi**:
- **Tailwind CSS**: Framework utility-first, sử dụng classes để style trực tiếp trong JSX (e.g., `className="flex flex-col md:flex-row"`).
- **Key Features**:
  - **Responsive Design**: Dùng prefixes như `sm:`, `md:` (e.g., `sm:grid-cols-2`).
  - **Dark Mode**: Hỗ trợ `dark:` prefix (e.g., `dark:bg-gray-800`).
  - **Customization**: Config trong `tailwind.config.js` (e.g., custom colors, spacing).
- **Pitfalls**:
  - Class bloat (quá nhiều classes làm JSX khó đọc).
  - Không tận dụng config, dẫn đến duplicate styles.
  - Bỏ qua accessibility (e.g., contrast ratio không đạt WCAG).

**Áp Dụng Trong Dự Án**:
- Style `TaskList`, `TaskForm` với Tailwind (e.g., `className="p-4 bg-white dark:bg-gray-900"`).
- Responsive layout: Mobile-first (e.g., `flex flex-col sm:flex-row`).
- Dark mode toggle với `prefers-color-scheme` hoặc state-based.
- Refactor: Extract reusable classes vào components (e.g., `<Button className="btn-primary" />`).

**Production Tip**:
- Dùng PurgeCSS để giảm bundle size.
- Test contrast ratio với Lighthouse Accessibility.

---

### 6. Axios v1.7+ / Fetch API (Data Fetching)

**Lý Thuyết Cốt Lõi**:
- **Axios**: HTTP client với interceptors, hỗ trợ retry, cancel requests, và error handling.
- **Fetch API**: Native browser API, nhẹ nhưng thiếu features như interceptors.
- **Key Concepts**:
  - **Interceptors**: Xử lý request/response globally (e.g., add auth token).
  - **Error Handling**: Catch HTTP errors (e.g., 400, 500) và hiển thị user-friendly messages.
  - **TanStack Query Integration**: Kết hợp với `useQuery` để caching và retry.
- **Pitfalls**:
  - Quên cancel requests khi component unmount, gây memory leaks.
  - Không handle errors, dẫn đến UX kém.
  - Duplicate API calls do thiếu caching.

**Áp Dụng Trong Dự Án**:
- Dùng Axios để fetch tasks (e.g., `axios.get('/tasks')`).
- Setup interceptor để add auth headers (e.g., `axiosInstance.interceptors.request.use(...)`).
- Kết hợp với TanStack Query: `useQuery({ queryKey: ['tasks'], queryFn: () => axios.get('/tasks') })`.
- Refactor: Thêm retry logic và error boundaries.

**Production Tip**:
- Dùng `AbortController` trong Fetch để cancel requests.
- Cache responses với TanStack Query để giảm API calls.

---

### 7. MSW v2.3+ (Mock Service Worker)

**Lý Thuyết Cốt Lõi**:
- **MSW là gì?**: Thư viện mock API, chặn HTTP requests và trả về responses giả lập, dùng cho dev và testing.
- **Key Features**:
  - **Handlers**: Define mock endpoints (e.g., `rest.get('/tasks', (req, res, ctx) => res(ctx.json(mockTasks)))`).
  - **Environments**: Dùng trong browser (dev) và Node.js (testing).
  - **Realistic Testing**: Mock responses với status codes, delays, errors.
- **Pitfalls**:
  - Quên bật/tắt MSW trong production, gây sai dữ liệu.
  - Mock không sát thực, dẫn đến test không đáng tin.

**Áp Dụng Trong Dự Án**:
- Setup MSW handlers cho `/tasks` (GET, POST, PUT, DELETE).
- Dùng trong dev để simulate API trước khi có backend.
- Tích hợp với Jest để test API flows (e.g., mock 404 error).
- Refactor: Thêm mock errors để test edge cases.

**Production Tip**:
- Dùng env variable để toggle MSW (`process.env.NODE_ENV !== 'production'`).
- Mock realistic delays (e.g., `ctx.delay(1000)`).

---

### 8. Jest v29.7+ + React Testing Library v15.0+ (Unit & Component Testing)

**Lý Thuyết Cốt Lõi**:
- **Jest**: Testing framework cho unit và integration tests, hỗ trợ assertions, mocks, snapshots.
- **React Testing Library**: Test components theo cách giống user interaction (e.g., `fireEvent.click(button)`).
- **Key Concepts**:
  - **Unit Tests**: Test logic độc lập (e.g., reducer functions, utility functions).
  - **Component Tests**: Test UI rendering và interactions (e.g., `render(<TaskList />)`).
  - **Accessibility Tests**: Kết hợp `jest-axe` để check WCAG (e.g., ARIA compliance).
- **Pitfalls**:
  - Test quá chi tiết implementation, dễ bị brittle khi refactor.
  - Quên mock dependencies (e.g., API calls), gây test chậm.
  - Bỏ qua accessibility, dẫn đến UX kém cho screen readers.

**Áp Dụng Trong Dự Án**:
- Unit test: Test reducer logic (e.g., `expect(addTask(tasks, newTask)).toEqual(...)`).
- Component test: Test `TaskForm` submit (e.g., `fireEvent.change(input, { target: { value: 'New Task' } })`).
- Accessibility test: Dùng `jest-axe` để check `TaskList` (e.g., `expect(toHaveNoViolations(results))`).
- Refactor: Đạt 90% code coverage, thêm snapshot tests cho UI.

**Production Tip**:
- Dùng `test.only` khi debug, nhưng xóa trước khi commit.
- Tích hợp Jest với CI (GitHub Actions) để auto-run tests.

---

## 📝 Tổng Kết Lý Thuyết Must-Have

| **Công Nghệ** | **Khái Niệm Cốt Lõi** | **Áp Dụng Trong Dự Án** | **Production Tip** |
|---------------|-----------------------|-------------------------|---------------------|
| **React 19+** | Hooks, component composition, Suspense, reconciliation | `TaskList`, `TaskForm`, Context, lazy loading | Tránh infinite loops, debug re-renders với DevTools |
| **TypeScript 5.5+** | Types/interfaces, generics, strict mode, Zod | Type props/state, Zod schema validation | Bật `strict: true`, dùng Zod inference |
| **React Router/TanStack Router** | Client-side routing, nested/protected routes, data loaders | Routes cho `/home`, `/tasks`, lazy load `/tasks/:id` | Lazy load routes, prefetch data |
| **React Hook Form + Zod** | Uncontrolled forms, schema validation, error handling | `TaskForm` với validation, error messages | Debounce inputs, ARIA for errors |
| **Tailwind CSS** | Utility-first, responsive, dark mode | Responsive `TaskList`, dark mode toggle | PurgeCSS, test contrast ratio |
| **Axios/Fetch** | HTTP client, interceptors, error handling | Fetch tasks, auth headers, TanStack Query | Cancel requests, cache responses |
| **MSW** | Mock API, handlers, realistic testing | Mock `/tasks` endpoints, test edge cases | Toggle MSW via env, mock delays |
| **Jest + React Testing Library** | Unit/component tests, accessibility, coverage | Test logic, UI interactions, WCAG | CI integration, avoid brittle tests |

---

## 🚀 Chuẩn Bị Trước Khi Coding

1. **Rà Soát Kiến Thức**:
   - Đọc qua docs chính thức: [React](https://react.dev), [TypeScript](https://www.typescriptlang.org/docs), [TanStack Router](https://tanstack.com/router), [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev), [Tailwind](https://tailwindcss.com), [Axios](https://axios-http.com), [MSW](https://mswjs.io), [Jest](https://jestjs.io), [React Testing Library](https://testing-library.com).
   - Xem các khái niệm cốt lõi trên, đặc biệt là Hooks, TypeScript strict mode, và test pyramid.
   - Làm quen với setup: Tạo project với Vite (`npm create vite@latest -- --template react-ts`).

2. **Checklist Trước Coding**:
   - [ ] Cài đặt ESLint/Prettier để enforce code style.
   - [ ] Bật TypeScript strict mode trong `tsconfig.json`.
   - [ ] Setup Tailwind CSS và kiểm tra responsive trên Chrome DevTools.
   - [ ] Cấu hình MSW để mock API ngay từ đầu.
   - [ ] Viết 1-2 unit tests mẫu để làm quen với Jest + React Testing Library.
   - [ ] Tạo `docs/backlog.md` với user stories để align với BA mindset.

3. **Tránh Pitfalls**:
   - Không dùng `any` trong TypeScript.
   - Tránh re-renders thừa bằng `useMemo`/`useCallback`.
   - Đảm bảo accessibility (ARIA labels, keyboard navigation).
   - Mock API sát thực để test edge cases.

---

#### 💡 Sau khi nắm vững lý thuyết này, bạn đã sẵn sàng để bắt tay vào coding **Task Management App**.