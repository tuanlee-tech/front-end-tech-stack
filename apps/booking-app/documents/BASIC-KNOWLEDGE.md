**Dự Án 2: Booking App (Trung Cấp đến Nâng Cao)** 

Bộ lý thuyết này tập trung vào các khái niệm cốt lõi, đảm bảo bạn nắm vững nền tảng trước khi bắt tay vào coding. Mỗi phần lý thuyết sẽ ngắn gọn, dễ hiểu, nhấn mạnh vào khía cạnh thực tế và liên quan trực tiếp đến dự án, giúp bạn rà soát kiến thức và tránh các pitfalls phổ biến. Các công nghệ bao gồm: **React 19+ + Next.js 15+, TypeScript 5.6+, Redux Toolkit 2.2+ + Thunk/Saga, TanStack Query 5+, GraphQL (Apollo Client 3.9+), Tailwind CSS 4+ + MUI/shadcn/ui, WebSocket/Socket.io 5+, Jest 30+ + React Testing Library 16+ + Cypress 14+, Docker, Vercel, GitHub Actions**. 

---

## 📚 Bộ Lý Thuyết Must-Have Cho Dự Án 2

### 1. React 19+ + Next.js 15+ (App Router, SSR, Server Components)

**Lý Thuyết Cốt Lõi**:
- **React 19+**: Thư viện UI với **Concurrent Rendering** (ưu tiên render tasks để smooth UX) và **Suspense** (hỗ trợ streaming data, lazy loading). Hỗ trợ Hooks, memoization, và error boundaries.
- **Next.js 15+ (App Router)**:
  - **App Router**: Cấu trúc routing hiện đại, hỗ trợ server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), và server components.
  - **Server Components**: Giảm client-side JavaScript, render trên server để tối ưu performance và SEO.
  - **Middleware**: Xử lý logic trước khi render (e.g., auth, logging).
  - **Data Fetching**: `getServerSideProps` hoặc `fetch` trong server components để prefetch data.
  - **Streaming**: Cho phép render từng phần UI để giảm TTFB (Time to First Byte).
- **Key Concepts**:
  - **SSR**: Render HTML trên server, hydrate trên client (tốt cho SEO).
  - **SSG/ISR**: Generate static pages tại build time hoặc revalidate định kỳ.
  - **Layouts/Nested Routes**: Tạo layout chung (e.g., navbar) và dynamic routes (e.g., `/events/[id]`).
- **Pitfalls**:
  - Quên hydration error handling, gây mismatch giữa server và client.
  - Không tối ưu server components, dẫn đến bundle size lớn.
  - Middleware không hiệu quả, gây latency.

**Áp Dụng Trong Dự Án**:
- Sử dụng App Router để setup routes cho `/events`, `/events/[id]`, `/bookings`.
- Dùng server components cho `EventList` page (fetch data server-side).
- Áp dụng Suspense cho loading states (e.g., `<Suspense fallback={<LoadingSkeleton />}>`).
- Middleware để check auth trước khi render `/bookings`.
- Refactor: Chuyển client-side fetch sang server components, thêm ISR cho `/events`.

**Production Tip**:
- Dùng `next/dynamic` để lazy load client components.
- Benchmark TTFB (<500ms) với Chrome DevTools Network tab.
- Sử dụng error boundaries cho graceful error handling.

---

### 2. TypeScript 5.6+ (Discriminated Unions, Schema Inference)

**Lý Thuyết Cốt Lõi**:
- **TypeScript 5.6+**: Superset của JavaScript, cải tiến với discriminated unions (e.g., `type Action = { type: 'success', data: T } | { type: 'error', error: string }`) và type inference mạnh hơn.
- **Discriminated Unions**: Sử dụng property chung (e.g., `type`) để phân biệt variants, kết hợp type guards.
- **Generics**: Tạo hàm/hook linh hoạt (e.g., `fetchData<T>(url: string): Promise<T>`).
- **Schema Inference**: Tích hợp Zod hoặc GraphQL Codegen để infer types từ schemas (e.g., `type Event = z.infer<typeof eventSchema>`).
- **Strict Mode**: Bật `strict: true` trong `tsconfig.json` để bắt lỗi null/undefined, bất biến types.
- **Pitfalls**:
  - Dùng `any` làm mất type safety.
  - Không tận dụng discriminated unions, dẫn đến type checks phức tạp.
  - Quên sync types với backend schemas.

**Áp Dụng Trong Dự Án**:
- Type props/state cho `Event` và `Booking` (e.g., `interface Event { id: string; title: string; availableTickets: number }`).
- Dùng discriminated unions cho async states (e.g., `type FetchState = { status: 'loading' } | { status: 'success', data: Event[] }`).
- Generics cho API hooks (e.g., `useFetchEvents<T>()`).
- Refactor: Tích hợp GraphQL Codegen để auto-generate types từ schema.
- Zod cho form validation: `eventSchema = z.object({ title: z.string().min(3) })`.

**Production Tip**:
- Bật `noImplicitAny` và `strictNullChecks`.
- Dùng GraphQL Codegen để sync types với backend.
- Test type safety trong CI để bắt lỗi sớm.

---

### 3. Redux Toolkit 2.2+ + Thunk/Saga (State Management)

**Lý Thuyết Cốt Lõi**:
- **Redux Toolkit**: Simplifies Redux với `createSlice`, `createAsyncThunk`, và RTK Query. Đảm bảo predictable state và giảm boilerplate.
- **Key Features**:
  - **Slices**: Gom nhóm state + reducers (e.g., `eventSlice` cho events).
  - **RTK Query**: Data fetching + caching, tích hợp với API (e.g., `createApi`).
  - **Thunk**: Async logic đơn giản (e.g., `createAsyncThunk('events/fetch', fetchEvents)`).
  - **Saga**: Xử lý side effects phức tạp, long-running flows (e.g., `takeLatest('bookTicket', bookTicketSaga)`).
- **State Normalization**: Flatten nested data để tránh duplication (e.g., `{ entities: { events: { byId, ids } } }`).
- **Pitfalls**:
  - Quên normalize state, gây performance issues.
  - Saga/Thunk không cleanup, dẫn đến memory leaks.
  - Dùng Redux cho simple state, làm code phức tạp.

**Áp Dụng Trong Dự Án**:
- Setup `eventSlice` và `bookingSlice` với Redux Toolkit.
- RTK Query cho API calls (e.g., `useGetEventsQuery()`).
- Saga để handle real-time updates (e.g., sync `availableTickets`).
- Refactor: Normalize state cho `events` và `bookings`.
- Dùng Redux DevTools để debug state changes.

**Production Tip**:
- Dùng `createSelector` để memoize computed state.
- Persist state với Redux Persist nếu cần offline support.
- Benchmark state update time (<50ms) với Redux DevTools.

---

### 4. TanStack Query 5+ (Server-Side Data Management)

**Lý Thuyết Cốt Lõi**:
- **TanStack Query**: Quản lý server-state (data fetching, caching, mutations). Tích hợp tốt với Next.js và Redux.
- **Key Features**:
  - **useQuery**: Fetch + cache data (e.g., `useQuery({ queryKey: ['events'], queryFn: fetchEvents })`).
  - **useMutation**: Handle updates (e.g., `useMutation({ mutationFn: bookTicket })`).
  - **Optimistic Updates**: Update UI trước khi API response, rollback nếu fail.
  - **Infinite Queries**: Load more data (e.g., infinite scroll cho event list).
- **Pitfalls**:
  - Quên invalidate cache, dẫn đến stale data.
  - Không handle errors, gây UX kém.
  - Quá phụ thuộc vào client-side fetching, bỏ qua server-side.

**Áp Dụng Trong Dự Án**:
- Dùng `useQuery` để fetch events list, `useMutation` để book tickets.
- Infinite query cho `/events` page (e.g., `useInfiniteQuery()`).
- Optimistic updates cho booking (update UI ngay khi click).
- Refactor: Kết hợp với server components để prefetch data.

**Production Tip**:
- Dùng `staleTime` và `cacheTime` để tối ưu API calls.
- Tích hợp error boundaries để handle fetch failures.
- Benchmark query latency (<100ms) với Apollo DevTools.

---

### 5. GraphQL (Apollo Client 3.9+)

**Lý Thuyết Cốt Lõi**:
- **GraphQL**: API query language, cho phép client chọn dữ liệu cần (e.g., `query { events { id, title } }`).
- **Apollo Client**:
  - **Queries**: Fetch data (e.g., `useQuery(GET_EVENTS)`).
  - **Mutations**: Update data (e.g., `useMutation(BOOK_TICKET)`).
  - **Subscriptions**: Real-time updates qua WebSocket (e.g., `useSubscription(EVENT_UPDATED)`).
  - **Dataloader**: Batch requests để tránh N+1 problem.
- **Key Concepts**:
  - **Schema-First**: Define schema (types, queries, mutations) làm contract.
  - **Fragments**: Reuse query fields (e.g., `fragment EventFields on Event { id, title }`).
  - **Persisted Queries**: Giảm payload size, tăng security.
- **Pitfalls**:
  - N+1 queries do thiếu dataloader, gây latency cao.
  - Quên error handling cho subscriptions, dẫn đến disconnects.
  - Schema không đồng bộ với backend.

**Áp Dụng Trong Dự Án**:
- Setup Apollo Client với schema mock (e.g., `type Event { id: ID!, title: String! }`).
- Queries/mutations cho events/bookings (e.g., `query GetEvents`, `mutation BookTicket`).
- Subscriptions cho real-time `availableTickets`.
- Refactor: Thêm dataloader để batch queries, GraphQL Codegen cho types.

**Production Tip**:
- Dùng persisted queries để giảm network load.
- Monitor subscriptions với Apollo DevTools.
- Test schema changes với mock server.

---

### 6. Tailwind CSS 4+ + MUI 6+ / shadcn/ui (UI & Theming)

**Lý Thuyết Cốt Lõi**:
- **Tailwind CSS 4+**: Utility-first CSS, hỗ trợ responsive (e.g., `sm:`, `md:`), dark mode (`dark:`), và custom themes qua `tailwind.config.js`.
- **MUI 6+ / shadcn/ui**: Component libraries với theming (MUI) hoặc headless components (shadcn/ui). Hỗ trợ accessibility và customization.
- **Key Concepts**:
  - **Headless Components**: Logic tách biệt khỏi styles, dễ customize (e.g., shadcn/ui `Button`).
  - **Theme Provider**: Quản lý themes (e.g., light/dark, custom colors).
  - **Responsive Design**: Mobile-first, breakpoints (e.g., `sm:grid-cols-2`).
- **Pitfalls**:
  - Class bloat làm JSX khó đọc.
  - Theme không đồng bộ giữa Tailwind và MUI/shadcn.
  - Bỏ qua WCAG (e.g., contrast ratio).

**Áp Dụng Trong Dự Án**:
- Style `EventList`, `BookingForm` với Tailwind + shadcn/ui (e.g., `className="p-4 bg-white dark:bg-gray-900"`).
- Theme provider cho light/dark modes (e.g., `ThemeProvider` từ MUI).
- Responsive layouts: `flex flex-col md:flex-row`.
- Refactor: Extract reusable components (e.g., `<CustomButton />`).

**Production Tip**:
- Dùng PurgeCSS để giảm CSS bundle size.
- Test accessibility với Lighthouse (contrast, ARIA).
- Benchmark CLS (Cumulative Layout Shift) = 0.

---

### 7. WebSocket / Socket.io 5+ (Real-Time Communication)

**Lý Thuyết Cốt Lõi**:
- **WebSocket**: Giao thức bidirectional cho real-time data (e.g., updates `availableTickets`).
- **Socket.io**: Thư viện trên WebSocket, hỗ trợ rooms, reconnection, và event-based communication.
- **Key Concepts**:
  - **Rooms/Namespaces**: Group clients (e.g., `io.to('event-123')`).
  - **Reconnection Logic**: Handle disconnects (e.g., `io.on('reconnect')`).
  - **Event-Driven**: Emit/listen events (e.g., `socket.emit('update', data)`).
- **Pitfalls**:
  - Không handle disconnects, gây UX kém.
  - Quá nhiều connections, dẫn đến server overload.
  - Không sync với state, gây inconsistent UI.

**Áp Dụng Trong Dự Án**:
- Setup Socket.io client để join rooms (e.g., `socket.join('event-123')`).
- Listen `ticketUpdated` events để update `availableTickets`.
- Refactor: Tích hợp với Redux (dispatch on event).
- Test reconnection logic với mock server.

**Production Tip**:
- Dùng Socket.io Adapter (Redis) nếu scale lớn.
- Monitor connection stability với logging.
- Debounce events để giảm load.

---

### 8. Jest 30+ + React Testing Library 16+ + Cypress 14+ (Testing)

**Lý Thuyết Cốt Lõi**:
- **Jest**: Framework cho unit/integration tests, hỗ trợ mocks, snapshots.
- **React Testing Library**: Test components theo user interactions (e.g., `fireEvent.click`).
- **Cypress**: E2E testing cho flows (e.g., book ticket end-to-end).
- **Key Concepts**:
  - **Test Pyramid**: Unit (70%), integration (20%), E2E (10%).
  - **Accessibility**: Dùng `jest-axe` để check WCAG 2.1.
  - **Mocking**: Mock API (MSW), WebSocket, và async logic.
- **Pitfalls**:
  - Tests brittle do focus vào implementation.
  - Quên mock async dependencies, gây test chậm.
  - Không cover edge cases (e.g., network errors).

**Áp Dụng Trong Dự Án**:
- Unit test: Test `eventSlice` reducers, RTK Query logic.
- Component test: Test `BookingForm` submit flow.
- E2E test: Cypress cho booking flow (search → book → confirm).
- Accessibility test: `jest-axe` cho `EventList`.
- Refactor: Add tests cho real-time updates, reach 85% coverage.

**Production Tip**:
- Run tests in CI (GitHub Actions).
- Dùng snapshot tests cho UI consistency.
- Mock WebSocket events để test subscriptions.

---

### 9. Docker + Vercel + GitHub Actions (Deployment & CI/CD)

**Lý Thuyết Cốt Lõi**:
- **Docker**: Containerization để consistent environments (dev/staging/prod).
- **Vercel**: Serverless platform cho Next.js, hỗ trợ previews và auto-scaling.
- **GitHub Actions**: CI/CD pipelines cho lint/test/build/deploy.
- **Key Concepts**:
  - **Dockerfile**: Define build steps (e.g., `FROM node:20`, `COPY . .`).
  - **CI/CD Workflow**: Automate checks (e.g., `eslint`, `jest`) và deploy.
  - **Previews**: Vercel tạo preview URLs cho mỗi PR.
- **Pitfalls**:
  - Dockerfile không tối ưu, dẫn đến image size lớn.
  - CI/CD pipeline chậm do thiếu caching.
  - Quên env vars cho staging/prod.

**Áp Dụng Trong Dự Án**:
- Setup `Dockerfile` cho Next.js (multi-stage build).
- GitHub Actions pipeline: `on: push` để run lint/test, deploy to Vercel.
- Vercel previews cho feature branches.
- Refactor: Add env vars cho staging (e.g., `NEXT_PUBLIC_API_URL`).

**Production Tip**:
- Dùng multi-stage builds để giảm image size.
- Cache dependencies trong GitHub Actions.
- Monitor Vercel deploy logs để debug errors.

---

## 📝 Tổng Kết Lý Thuyết Must-Have

| **Công Nghệ** | **Khái Niệm Cốt Lõi** | **Áp Dụng Trong Dự Án** | **Production Tip** |
|---------------|-----------------------|-------------------------|---------------------|
| **React 19+ + Next.js 15+** | Concurrent Rendering, App Router, SSR/SSG/ISR, server components | Server components cho `EventList`, middleware cho auth, ISR cho `/events` | Lazy load, benchmark TTFB, error boundaries |
| **TypeScript 5.6+** | Discriminated unions, generics, schema inference | Type events/bookings, GraphQL Codegen, Zod schemas | Strict mode, sync types với backend |
| **Redux Toolkit 2.2+** | Slices, RTK Query, Thunk/Saga, normalization | `eventSlice`, RTK Query caching, Saga cho real-time | Normalize state, use Redux DevTools |
| **TanStack Query 5+** | useQuery, useMutation, infinite queries, optimistic updates | Fetch events, book tickets, infinite scroll | Cache tuning, error boundaries |
| **GraphQL (Apollo Client)** | Queries, mutations, subscriptions, dataloader | Query events, mutate bookings, real-time subscriptions | Persisted queries, monitor Apollo DevTools |
| **Tailwind + MUI/shadcn** | Utility-first, headless components, theming | Style `EventList`, `BookingForm`, multi-themes | PurgeCSS, test WCAG, benchmark CLS |
| **WebSocket/Socket.io** | Bidirectional, rooms, reconnection | Real-time `availableTickets`, rooms per event | Adapter for scale, debounce events |
| **Jest + RTL + Cypress** | Test pyramid, accessibility, E2E | Unit test reducers, component test forms, E2E booking flow | CI integration, snapshot tests, mock WebSocket |
| **Docker + Vercel + GitHub Actions** | Containerization, serverless deploy, CI/CD | Dockerfile, Vercel previews, pipeline | Multi-stage builds, cache CI, monitor logs |

---

## 🚀 Chuẩn Bị Trước Khi Coding

1. **Rà Soát Kiến Thức**:
   - Đọc docs: [Next.js](https://nextjs.org/docs), [Redux Toolkit](https://redux-toolkit.js.org), [TanStack Query](https://tanstack.com/query), [Apollo Client](https://www.apollographql.com/docs), [Socket.io](https://socket.io), [Cypress](https://www.cypress.io), [Docker](https://www.docker.com), [Vercel](https://vercel.com).
   - Hiểu key concepts: SSR vs SSG, GraphQL vs REST, test pyramid.
   - Làm quen với setup: Tạo project Next.js (`npx create-next-app@latest --ts`).

2. **Checklist Trước Coding**:
   - [ ] Cài đặt ESLint/Prettier/Husky để enforce code style.
   - [ ] Setup TypeScript strict mode và GraphQL Codegen.
   - [ ] Cấu hình Apollo Client và Socket.io client.
   - [ ] Viết sample test với Cypress (e.g., booking flow).
   - [ ] Tạo `docs/backlog.md` với user stories.
   - [ ] Setup Docker và GitHub Actions pipeline.

3. **Tránh Pitfalls**:
   - Không để hydration errors trong Next.js (sync server/client state).
   - Tối ưu GraphQL queries với dataloader để tránh N+1.
   - Handle WebSocket disconnects với reconnection logic.
   - Đảm bảo accessibility (ARIA, WCAG 2.1).

---

