# Task Management App

Chào mừng bạn đến với **Task Management App**, một dự án thực hành frontend từ cơ bản đến trung cấp, giúp bạn nắm vững React, TypeScript và các kỹ năng production-ready! Ứng dụng này cho phép quản lý công việc với các tính năng như tạo, đọc, cập nhật, xóa nhiệm vụ (CRUD), lọc/tìm kiếm, và xác thực người dùng cơ bản (đăng nhập/đăng xuất). Dự án tập trung vào hiệu suất, code sạch, và khả năng bảo trì, với ít nhất 2 lần refactor để tích hợp type-safety, testing, và accessibility.

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
  - Tuần 1-2: Thiết lập và xây dựng tính năng chính (CRUD, auth).
  - Tuần 3-4: Refactor với TypeScript, tối ưu hiệu suất, tích hợp Hooks mới.
  - Tuần 5-6: Testing, viết tài liệu, benchmark.
  - Tuần 7-8: Tích hợp góc nhìn BA/QA/Tech Lead.
- **Refactor**: 2 lần:
  - Lần 1: Thêm type-safety, memoization, và các Hooks như `useReducer`, `useRef`.
  - Lần 2: Tích hợp testing, accessibility, và Hooks nâng cao (`useTransition`, `useImperativeHandle`).
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

- **React Cơ Bản & Nâng Cao**:
  - **Lý Thuyết**: Hiểu lifecycle, Hooks, reconciliation algorithm.
  - **Thực Hành**: Xây dựng components (TaskList, TaskForm), dùng useState/useEffect, Context API, useMemo/useCallback, Suspense.
  - **Mẹo Production**: Tối ưu re-renders (<3 lần khi filter), tránh prop drilling, dùng windowing cho danh sách dài.

- **TypeScript**:
  - **Lý Thuyết**: Types, interfaces, generics, type narrowing.
  - **Thực Hành**: Type props/state, dùng Zod cho schema validation, refactor từ `any` sang typed code.
  - **Mẹo Production**: Strict mode, type-safe API responses.

- **Quản Lý Form & Validation**:
  - **Lý Thuyết**: Uncontrolled components, minimal re-renders.
  - **Thực Hành**: TaskForm với React Hook Form, Zod resolver, xử lý multi-step forms.
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
  - **Mẹo Production**: Tích hợp CI (GitHub Actions), đạt >90% coverage.

- **Mock API**:
  - **Lý Thuyết**: Lợi ích của mock API (reliable, offline).
  - **Thực Hành**: Setup MSW handlers cho /tasks.
  - **Mẹo Production**: Switch mock/real API qua env variables.

## 🪝 Hooks Tích Hợp & Refactor

Dự án tích hợp các Hooks sau để tối ưu hiệu suất, scalability và developer experience:

1. **useReducer**:
   - **Lý Thuyết Sâu**: Thay thế `useState` cho state logic phức tạp (ví dụ: reducer với actions như Redux mini). Giúp tách biệt state updates khỏi components, dễ debug với DevTools.
   - **Tích Hợp**: Sử dụng cho quản lý tasks (thay vì chỉ useState), với actions như ADD_TASK, UPDATE_TASK, DELETE_TASK. Refactor từ useState sang useReducer để minh họa sự khác biệt (giảm boilerplate cho state lớn).
   - **Lợi Ích**: Scale tốt cho features phức tạp, dễ test reducer pure function.
   - **Ví Dụ**: TaskList.tsx dùng useReducer thay useState.

2. **useRef**:
   - **Lý Thuyết Sâu**: Lưu mutable values không gây re-render (ví dụ: refs đến DOM, timers, previous values). Không như state, ref thay đổi không trigger render.
   - **Tích Hợp**: Sử dụng để focus input khi tạo task mới, hoặc lưu previous tasks để detect changes (ví dụ: so sánh prev/next để log analytics). Cũng dùng cho imperative animations nếu cần.
   - **Lợi Ích**: Tránh unnecessary re-renders, hữu ích cho performance-critical parts.
   - **Ví Dụ**: TaskForm.tsx focus title input sau submit.

3. **useLayoutEffect**:
   - **Lý Thuyết Sâu**: Giống useEffect nhưng chạy synchronous sau DOM mutations (trước browser paint). Dùng cho measurements hoặc DOM manipulations cần chính xác (tránh flicker).
   - **Tích Hợp**: Sử dụng để đo chiều cao của task list sau render (ví dụ: adjust scroll position khi add task).
   - **Lợi Ích**: Fix layout issues ở responsive UI, đặc biệt với drag-and-drop.
   - **Ví Dụ**: TaskList.tsx scroll xuống task mới sau add.

4. **useImperativeHandle (kết hợp với forwardRef)**:
   - **Lý Thuyết Sâu**: Customize ref exposed từ component con (imperative methods). Dùng khi cần expose functions từ con lên cha mà không qua props.
   - **Tích Hợp**: Trong TaskForm, expose method như resetForm để cha gọi sau submit thành công.
   - **Lợi Ích**: Linh hoạt cho parent-child communication mà không break encapsulation.
   - **Ví Dụ**: Parent gọi resetForm từ TaskForm.

5. **useId (React 18+)**:
   - **Lý Thuyết Sâu**: Generate unique IDs server/client-side safe (tránh hydration mismatch). Tốt cho accessibility (ARIA IDs).
   - **Tích Hợp**: Tạo unique IDs cho form fields và labels, đảm bảo unique trong list tasks.
   - **Lợi Ích**: Production-ready cho SSR nếu migrate sang Next.js sau.
   - **Ví Dụ**: TaskForm.tsx dùng useId cho labels.

6. **useTransition và useDeferredValue (Concurrent Mode, React 18+)**:
   - **Lý Thuyết Sâu**: useTransition cho non-urgent updates (ví dụ: non-block UI). useDeferredValue defer value để ưu tiên urgent renders.
   - **Tích Hợp**: Sử dụng trong filter/search để debounce heavy computations (ví dụ: filter large task list mà không lag UI).
   - **Lợi Ích**: Cải thiện UX ở concurrent mode, benchmark: Giảm perceived latency.
   - **Ví Dụ**: FilterSearch.tsx xử lý danh sách lớn.

7. **useDebugValue (optional, dev-only)**:
   - **Lý Thuyết Sâu**: Label custom hooks trong DevTools cho dễ debug.
   - **Tích Hợp**: Thêm vào custom hooks như useTasks để display state summary.
   - **Lợi Ích**: Cải thiện developer experience, không ảnh hưởng production.
   - **Ví Dụ**: useTasks hiển thị số tasks.

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
2. **Custom Hooks**: `useTasks`, `useTaskForm` tách logic.
3. **Memoization**: `React.memo(TaskItem)`, `useMemo` cho filter.
4. **Context Module**: `AuthContext` quản lý auth state.
5. **Render Props**: Dùng cho async data rendering.
6. **Strategy Pattern**: Chuyển đổi sort/filter logic.
7. **Observer Pattern**: Context dispatch cho task updates.

**Refactor Plan**:
- **Lần 1**: Thay `useState` bằng `useReducer` trong `TaskList`, thêm `useRef` cho focus, `useId` cho form fields.
- **Lần 2**: Tích hợp `useTransition`, `useImperativeHandle`, `useLayoutEffect`, testing, và accessibility.
- **Benchmark**: Dùng React Profiler để đo re-renders (<3 lần mỗi tương tác).

## 🎯 Sau Dự Án Này

- **Thành Thạo**: React Hooks, TypeScript, testing, và production patterns.
- **Sẵn Sàng**: Xây dựng dashboard, collaborative UI.
- **Lãnh Đạo**: Giải thích patterns, hướng dẫn team.

---

**Hành Động Ngay**: Xem [SETUP.md](#setupmd) để bắt đầu!