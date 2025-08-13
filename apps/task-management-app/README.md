### Dự Án 1: Task Management App (Cơ Bản đến Trung Cấp) - Tài Liệu Hoàn Chỉnh

Dự án này là bước khởi đầu lý tưởng để xây dựng nền tảng vững chắc cho lập trình frontend, tập trung vào việc chuyển từ lý thuyết sang thực hành production-ready. Bạn sẽ xây dựng một ứng dụng quản lý công việc (Task Management App) đơn giản, hỗ trợ các chức năng cơ bản như tạo, đọc, cập nhật, xóa nhiệm vụ (CRUD), lọc và tìm kiếm nhiệm vụ, cùng với xác thực người dùng cơ bản (login/logout). Ứng dụng sẽ bắt đầu từ React thuần túy, sau đó tích hợp TypeScript để đảm bảo type-safety, thêm routing cho navigation, và mở rộng với form validation, testing. Mục tiêu là tạo ra một app responsive, dễ maintain, với trọng tâm vào performance và code chất lượng cao.

Thời gian ước tính: 6-8 tuần (bao gồm mở rộng), chia thành các giai đoạn: 
- Tuần 1-2 (setup và build core features)
- Tuần 3-4 (refactor với TypeScript và optimization)
- Tuần 5-6 (testing, documentation, benchmark)
- Tuần 7-8 (tích hợp góc nhìn BA/QA/Tech Lead nếu cần sâu hơn). Bạn sẽ refactor code ít nhất 2 lần: 
  - Lần 1 để thêm type-safety và memoization
  - Lần 2 để tích hợp testing và accessibility. 
  
Cuối dự án, app sẽ được deploy lên Vercel hoặc Netlify miễn phí để demo.

#### Mô Tả Chi Tiết Ứng Dụng
- **Chức Năng Chính**:
  - **CRUD Tasks**: Tạo task mới (với tiêu đề, mô tả, deadline, priority), hiển thị danh sách tasks, chỉnh sửa/xóa task.
  - **Filter & Search**: Lọc theo trạng thái (todo/in-progress/done), priority (low/medium/high), hoặc tìm kiếm bằng keyword.
  - **User Auth Cơ Bản**: Login/logout với local storage (sau này có thể mở rộng sang JWT), chỉ người dùng đăng nhập mới tạo/edit tasks.
  - **UI Features**: Responsive layout (mobile-first), dark mode toggle, drag-and-drop để sắp xếp tasks (sử dụng React DnD nếu mở rộng).
  - **Data Handling**: Sử dụng mock API ban đầu, sau đó simulate real API calls với Axios/Fetch.

- **Yêu Cầu Production-Ready**: Code phải clean, modular (components nhỏ, reusable), tuân thủ ESLint/Prettier, và đạt ít nhất 80% code coverage trong testing. Benchmark: Giới hạn re-renders dưới 5 lần per interaction, thời gian load trang < 2s.

#### Tech Stack Chính (Cập Nhật 2025)
Dựa trên README, tôi đã kiểm tra các phiên bản mới nhất (tính đến August 2025: React 19.0 với các cải tiến về concurrent mode, TypeScript 5.5 với better inference, v.v.). Stack tập trung vào các công cụ cơ bản nhưng mạnh mẽ:

- **React 19+**: Sử dụng Hooks cho state management, component composition để xây dựng UI reusable.
- **TypeScript 5.5+**: Strict mode enabled, typesafe props/state để tránh runtime errors.
- **React Router v6.2+ hoặc TanStack Router v1.5+**: Routing cơ bản với type-safety.
- **React Hook Form v7.5+ + Zod v3.2+**: Form handling với validation schema.
- **Tailwind CSS v3.4+**: Utility-first styling cho rapid development.
- **Axios v1.7+ hoặc Fetch API (native)**: Data fetching với error handling.
- **MSW v2.3+**: Mock Service Worker cho API mocking.
- **Jest v29.7+ + React Testing Library v15.0+**: Unit và component testing.

#### Kiến Thức Sẽ Học Được (Từ Lý Thuyết Đến Thực Hành)
Mỗi phần kiến thức sẽ được học qua build thực tế, refactor (ít nhất 2 lần), document (Markdown files cho mỗi component), và benchmark (sử dụng React DevTools/Chrome Profiler). Focus trên production patterns: viết code scalable, tránh common pitfalls như infinite loops hoặc unnecessary re-renders.

- **React Cơ Bản & Nâng Cao**:
  - **Lý Thuyết**: Hiểu lifecycle của components (mount/update/unmount), cách Hooks thay thế class components. Học về reconciliation algorithm của React để tối ưu rendering.
  - **Thực Hành**: Xây dựng components như TaskList, TaskForm. Sử dụng useState cho local state (e.g., toggle dark mode), useEffect cho side effects (e.g., fetch tasks on mount). Tránh prop drilling bằng Context API (e.g., UserContext cho auth). Áp dụng useMemo/useCallback để memoize expensive computations (e.g., filtered tasks list). Custom hooks như useLocalStorage để persist data. Refactor: Thêm Suspense cho lazy loading components (e.g., lazy(() => import('./TaskDetail'))). Benchmark: Sử dụng React Profiler để đo re-renders, đảm bảo <3 re-renders khi filter tasks.
  - **Production Tip**: Sử dụng performance patterns như windowing (nếu list dài, integrate TanStack Virtual sau), tránh useEffect dependencies hell bằng cleanup functions.

- **TypeScript Cơ Bản & Nâng Cao**:
  - **Lý Thuyết**: Types vs Interfaces, utility types (e.g., Pick<Task, 'id' | 'title'> để reuse types), generics (e.g., function fetchData<T>(url: string): Promise<T>), type narrowing với guards (e.g., if (isTask(obj)) ...).
  - **Thực Hành**: Type props/state (e.g., interface Task { id: string; title: string; }), strict mode để bắt errors sớm. Integrate Zod cho schema validation (e.g., const taskSchema = z.object({ title: z.string().min(3) })), inference types từ Zod cho API calls (e.g., type TaskInput = z.infer<typeof taskSchema>). Refactor: Chuyển từ any sang typed code, thêm unions (e.g., type Priority = 'low' | 'medium' | 'high'). Benchmark: Không có runtime type errors sau refactor.
  - **Production Tip**: Sử dụng tsconfig strict: true, type-safe API responses với Zod.parse().

- **Quản Lý Form & Validation**:
  - **Lý Thuyết**: Tại sao React Hook Form tốt hơn native forms (minimal re-renders, uncontrolled components).
  - **Thực Hành**: Xây dựng TaskForm với useForm(), register fields, handleSubmit. Zod resolver cho validation (e.g., error messages cho required fields). Xử lý multi-step forms (e.g., step 1: title, step 2: details). Error handling với formState.errors. Refactor: Thêm custom validation (e.g., deadline > current date).
  - **Production Tip**: debounce inputs để giảm API calls, integrate with accessibility (ARIA labels for errors).

- **Routing Client-Side**:
  - **Lý Thuyết**: Client-side vs server-side routing, lợi ích type-safe routes.
  - **Thực Hành**: Setup routes với TanStack Router (e.g., createRouter({ routeTree: rootRoute.addChildren([homeRoute, tasksRoute]) })), nested routing (e.g., /tasks/:id). Data loaders cơ bản (e.g., loader: () => fetchTasks()). Refactor: Thêm protected routes (redirect nếu chưa login).
  - **Production Tip**: Lazy loading routes để giảm bundle size.

- **Quản Lý Async Data Cơ Bản**:
  - **Lý Thuyết**: Caching để tránh duplicate fetches, error boundaries.
  - **Thực Hành**: Sử dụng TanStack Query (useQuery({ queryKey: ['tasks'], queryFn: fetchTasks })), Axios với interceptors (e.g., add auth headers). Handle loading/error states. Refactor: Thêm mutations cho CRUD (useMutation()).
  - **Production Tip**: Retry logic cho failed fetches, stale-while-revalidate.

- **UI Responsive**:
  - **Lý Thuyết**: Mobile-first design, CSS media queries.
  - **Thực Hành**: Tailwind classes (e.g., className="flex flex-col md:flex-row"), dark mode với prefers-color-scheme. Responsive components (e.g., grid-cols-1 sm:grid-cols-2).
  - **Production Tip**: Test trên multiple devices với Chrome DevTools.

- **Unit & Integration Testing Frontend**:
  - **Lý Thuyết**: Test pyramid (unit > integration), WCAG basics (e.g., contrast ratio).
  - **Thực Hành**: Jest cho unit tests (e.g., test reducer logic), React Testing Library cho interactions (e.g., fireEvent.click(button)). MSW để mock API responses. Accessibility tests với jest-axe (e.g., expect(toHaveNoViolations(results))). Refactor: Đạt 90% coverage.
  - **Production Tip**: Integrate with CI (GitHub Actions) để run tests on push.

- **Mock API Cho Dev & Test**:
  - **Lý Thuyết**: Tại sao mock tốt hơn real API trong dev (reliable, offline).
  - **Thực Hành**: Setup MSW handlers (e.g., rest.get('/tasks', (req, res, ctx) => res(ctx.json(mockTasks)))). Sử dụng trong tests và dev server.
  - **Production Tip**: Switch giữa mock/real via env variables.

- **Thực Hành Sâu**:
  - Refactor 2 lần: Lần 1 (thêm memoization: React.memo(TaskItem)), Lần 2 (type-safe + testing).
  - Document: Markdown files (e.g., docs/components/TaskList.md với usage examples).
  - Benchmark: Sử dụng React DevTools để đo re-renders, mục tiêu: 0 unnecessary re-renders. Nếu vượt, optimize với useMemo.

#### Góc Nhìn Từ Các Vai Trò (BA, QA, Tech Lead)
Để sản phẩm tốt hơn, scale dễ dàng, và dễ truyền tải (e.g., onboarding junior devs), chúng ta áp dụng góc nhìn cross-functional. Mỗi vai trò sẽ được simulate trong dự án: BA định nghĩa requirements, QA đảm bảo quality, Tech Lead lãnh đạo technical decisions và mentoring.

- **Góc Nhìn Từ Business Analyst (BA)**:
  - **Vai Trò Chính**: BA tập trung vào user needs, business value, và requirements gathering để đảm bảo app giải quyết vấn đề thực tế (e.g., giúp người dùng quản lý tasks hiệu quả mà không phức tạp).
  - **Áp Dụng Trong Dự Án**:
    - **User Stories & Acceptance Criteria**: Viết theo format "As a [user], I want [feature] so that [benefit]". Ví dụ: "As a busy professional, I want to filter tasks by priority so that I can focus on high-impact items first." Acceptance criteria: Must support low/medium/high, UI responsive, search latency <500ms.
    - **Prioritization**: Sử dụng MoSCoW method (Must-have: CRUD; Should-have: Filter/Search; Could-have: Dark mode; Won't-have: Notifications ở giai đoạn này). Điều này giúp scale bằng cách focus core features trước, dễ mở rộng sau.
    - **Business Metrics**: Định nghĩa KPIs như user retention (e.g., 80% users return daily), measured qua mock analytics (console logs). Trong refactor, thêm tracking events để simulate A/B testing.
    - **Transmission Cho Cấp Dưới**: Tạo Product Backlog (Markdown file: docs/backlog.md) để junior devs hiểu "why" đằng sau features, giúp họ align với business goals.
  - **Thực Hành Sâu**: Bắt đầu dự án bằng BA phase (1 ngày): Brainstorm user personas (e.g., student vs manager), vẽ wireframes đơn giản (Figma free). Refactor: Cập nhật stories dựa trên feedback giả định.

- **Góc Nhìn Từ Quality Assurance (QA)**:
  - **Vai Trò Chính**: QA đảm bảo app reliable, bug-free, và meet standards, tập trung testing early để tránh technical debt.
  - **Áp Dụng Trong Dự Án**:
    - **Test Strategy**: Áp dụng test pyramid: 70% unit tests (e.g., task validation logic), 20% integration (e.g., form submit with API mock), 10% E2E (manual với browser). Bao gồm edge cases: Empty list, invalid inputs, network errors.
    - **Accessibility & Usability**: Test WCAG basics (e.g., keyboard navigation, screen reader compatibility với ARIA labels). Sử dụng jest-axe để auto-check.
    - **Performance & Security Basics**: Benchmark: Page load <2s, no memory leaks. Check basic security (e.g., no plain text passwords in local storage).
    - **Transmission Cho Cấp Dưới**: Tạo Test Plan document (docs/test-plan.md) với checklists (e.g., "Test on Chrome/Firefox/mobile"). Khuyến khích pair testing để mentoring juniors.
  - **Thực Hành Sâu**: Integrate QA vào workflow: Run tests trước mỗi commit. Refactor: Thêm snapshot testing cho UI consistency. Nếu bug xuất hiện, root cause analysis (5 Whys) để học lesson.

- **Góc Nhìn Từ Tech Lead**:
  - **Vai Trò Chính**: Tech Lead lãnh đạo architecture, code quality, và team processes để app scale (e.g., từ 100 đến 10k users), dễ maintain, và mentor devs.
  - **Áp Dụng Trong Dự Án**:
    - **Architecture Decisions**: Chọn stack modular (e.g., feature-based folders) để dễ add features mới. Enforce coding standards (ESLint rules for React best practices).
    - **Scalability**: Design cho future growth (e.g., Context API thay vì global state lớn, sẵn sàng migrate sang Redux nếu cần). Optimize cho low-end devices (e.g., code splitting).
    - **Mentoring & Processes**: Simulate code reviews (self-review với checklists: "Is code readable? Typesafe? Tested?"). Set up Git workflow (branches: feature/task-crud, PRs với descriptions).
    - **Transmission Cho Cấp Dưới**: Tạo Coding Guidelines (docs/guidelines.md: Naming conventions, commit messages). Tổ chức "tech talks" giả định (ghi note về decisions, e.g., "Why TanStack Query over native fetch?").
  - **Thực Hành Sâu**: Refactor với Tech Lead hat: Review code for smells (e.g., god components), refactor thành smaller ones. Benchmark scalability (simulate 1000 tasks với virtual list nếu cần).

Bằng cách integrate các góc nhìn này, app không chỉ functional mà còn robust, user-centric, và dễ handover (e.g., juniors có docs đầy đủ để tự build).

#### Cấu Trúc Thư Mục (Folder Structure)
Để code organized, scalable, và dễ navigate (đặc biệt khi team lớn), sử dụng cấu trúc feature-based thay vì type-based (e.g., không group tất cả components vào một folder). Điều này giúp encapsulation: Mỗi feature tự chứa logic riêng, dễ delete/add. Dựa trên best practices React 2025 (với Vite hoặc CRA làm boilerplate).

```
task-management-app/
├── public/                  # Static assets (favicon, index.html)
├── src/                     # Source code
│   ├── api/                 # API utilities
│   │   ├── axiosInstance.ts # Configured Axios with interceptors
│   │   └── mocks/           # MSW handlers
│   │       └── handlers.ts
│   ├── components/          # Reusable UI components (shared across features)
│   │   ├── Button.tsx       # Generic Button with Tailwind
│   │   ├── Input.tsx        # Form input with validation
│   │   └── TaskItem.tsx     # Single task display
│   ├── contexts/            # Context API providers
│   │   └── AuthContext.tsx  # User auth state
│   ├── features/            # Feature-based folders (core business logic)
│   │   ├── auth/            # Auth feature
│   │   │   ├── components/  # Feature-specific components
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── hooks/       # Custom hooks
│   │   │   │   └── useAuth.ts
│   │   │   └── types.ts     # Feature types (e.g., User)
│   │   ├── tasks/           # Tasks management feature
│   │   │   ├── components/
│   │   │   │   ├── TaskList.tsx
│   │   │   │   ├── TaskForm.tsx
│   │   │   │   └── FilterSearch.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTasks.ts  # TanStack Query hooks
│   │   │   │   └── useTaskForm.ts # React Hook Form logic
│   │   │   ├── types.ts         # Task interfaces
│   │   │   └── tests/           # Feature tests
│   │   │       └── TaskList.test.tsx
│   ├── hooks/               # Global custom hooks (e.g., useLocalStorage.ts)
│   ├── layouts/             # Layout components (e.g., MainLayout.tsx with navbar)
│   ├── pages/               # Routed pages (if using React Router)
│   │   ├── Home.tsx
│   │   └── Tasks.tsx
│   ├── router/              # Routing config (routes.ts with TanStack Router)
│   ├── styles/              # Global styles (tailwind.config.js, globals.css)
│   ├── utils/               # Utilities (e.g., dateFormatter.ts)
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── types/               # Global types (e.g., index.d.ts for extensions)
├── docs/                    # Documentation (Markdown)
│   ├── backlog.md           # BA user stories
│   ├── guidelines.md        # Tech Lead coding standards
│   ├── test-plan.md         # QA test plans
│   └── components/          # Component docs (e.g., TaskList.md)
├── tests/                   # Global tests setup (setup.ts for Jest)
├── .eslintrc.js             # ESLint config
├── .prettierrc              # Prettier config
├── tsconfig.json            # TypeScript config (strict: true)
├── vite.config.ts           # Build config (assuming Vite)
├── package.json             # Dependencies
└── README.md                # Project overview, setup instructions
```

**Lý Do Cấu Trúc Này Scalable**: Feature folders giữ independence (dễ micro-frontend sau), tests co-located để dễ find. Khi scale, thêm features mới (e.g., users/) mà không ảnh hưởng existing code. Transmission: Juniors dễ hiểu nhờ co-location (tất cả về tasks ở một chỗ).

#### Design Patterns Áp Dụng
Design patterns giúp code reusable, maintainable, và solve common problems. Trong dự án, áp dụng 5-7 patterns chính từ README (focus React patterns), học qua lý thuyết rồi implement/refactor. Mỗi pattern kèm ví dụ cụ thể, và benchmark improvement (e.g., giảm re-renders).


---

# 📦 React Patterns Applied

## 1. **Compound Components Pattern**

* **Lý thuyết**:
  Cho phép các components con truy cập shared state mà không cần prop drilling. Ví dụ: `<Select>` với các `<Option>` con.

* **Thực hành**:
  Áp dụng cho `TaskList`:

  ```jsx
  <TaskList>
    <TaskItem />
    <TaskItem />
  </TaskList>
  ```

  Dùng `Context` để share state (ví dụ: `selectedTask`).
  Refactor từ prop drilling → compound để dễ mở rộng (ví dụ: thêm `TaskFooter`).

* **Benefit**:

  * Dễ compose UI phức tạp.
  * Scale tốt cho nested components.

---

## 2. **Hooks Pattern (Custom Hooks)**

* **Lý thuyết**:
  Tách logic thành phần có thể tái sử dụng — gồm `state` và `effects`.

* **Thực hành**:

  * `useTasks()` để fetch & cache dữ liệu (dùng **TanStack Query**).
  * `useTaskForm()` để xử lý logic của **React Hook Form**.
    Refactor từ component sang hook để dùng lại ở nhiều nơi.

* **Benefit**:

  * Giảm duplication.
  * Dễ test hơn (có thể unit test hook riêng).

---

## 3. **Memoization Pattern**

* **Lý thuyết**:
  Tránh re-render không cần thiết bằng `React.memo`, `useMemo`.

* **Thực hành**:

  * `React.memo(TaskItem)` để chỉ re-render khi props thay đổi.
  * `useMemo(() => filterTasks(tasks, filter), [tasks, filter])` cho computed values.

  📊 **Benchmark**: Từ **10 re-renders → 2** khi filter.

* **Benefit**:

  * Cải thiện hiệu năng, đặc biệt với danh sách lớn.

---

## 4. **Context Module Pattern**

* **Lý thuyết**:
  Gom nhóm state + logic liên quan vào một module riêng biệt (gồm Context + Provider).

* **Thực hành**:

  * `AuthContext` chứa trạng thái đăng nhập và actions (`login`, `logout`).
  * Inject vào các features cần auth.

* **Benefit**:

  * Tránh global state bloat.
  * Dễ scale qua cách tách reducer theo domain.

---

## 5. **Render Props Pattern** (nếu cần advanced)

* **Lý thuyết**:
  Truyền function làm prop để tùy biến UI rendering.

* **Thực hành**:

  ```jsx
  <DataFetcher render={(data) => <TaskList data={data} />} />
  ```

  * Tái sử dụng logic loading/error cho async data.

* **Benefit**:

  * Linh hoạt hơn HOC.
  * Tốt cho custom async behaviors.

---

## 6. **Strategy Pattern (Cho behaviors)**

* **Lý thuyết**:
  Chuyển đổi giữa các thuật toán (e.g., sort/filter) một cách linh hoạt.

* **Thực hành**:

  ```ts
  const strategies = {
    priority: sortByPriority,
    date: sortByDate,
  };
  const strategy = useStrategy(filterType); // apply strategy
  ```

* **Benefit**:

  * Dễ mở rộng.
  * Không cần sửa code cũ khi thêm chiến lược mới.

---

## 7. **Observer Pattern** (với Context hoặc EventEmitter)

* **Lý thuyết**:
  Cho phép components lắng nghe và phản ứng khi state thay đổi.

* **Thực hành**:

  * Dùng `Context` và `dispatch` để thông báo khi task update (e.g., sau mutation).
  * Cảm giác real-time mà không cần polling.

* **Benefit**:

  * Realtime UX mà không tốn nhiều tài nguyên.
  * Tách biệt giữa publisher và subscriber.

---

## ✅ **Thực Hành Sâu: Refactor lần 2**

* Kết hợp **3–4 patterns**:
  Ví dụ: **Compound Components** + **Hooks** + **Memoization**.

* **Documentation**:
  Ghi chú rõ usage trong `docs/patterns.md`.

* **Benchmark**:
  So sánh trước/sau với **React DevTools**:
  Ví dụ: Render time giảm **30%** sau refactor.

---

## 🎯 Sau Dự Án Này

* Thành thạo các pattern nền tảng trong **React + TypeScript**.
* Sẵn sàng bước vào các dự án phức tạp hơn (e.g., dashboard, collaborative UI).
* Có thể **giải thích pattern cho team**, chuẩn bị cho **leadership role**.

---

👉 **P/s:  code demo, snippets (e.g., custom hook, strategy pattern)

---
