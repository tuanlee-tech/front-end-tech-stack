### Dự Án 2: Booking App (Trung Cấp đến Nâng Cao) - Tài Liệu Hoàn Chỉnh

Dự án này nâng cấp từ cơ bản sang trung cấp/nâng cao, tập trung vào async data handling, real-time updates, và scalability. Bạn sẽ xây dựng một ứng dụng đặt vé (Booking App) hỗ trợ tìm kiếm sự kiện, đặt vé, và cập nhật trạng thái real-time (e.g., vé còn lại). Bắt đầu từ React với Next.js cho SSR, tích hợp Redux cho state phức tạp, GraphQL cho data fetching, và CI/CD cơ bản. Mục tiêu là app performant, secure, và deployable, với trọng tâm vào optimization và testing toàn diện.

Thời gian ước tính: 8-10 tuần (bao gồm mở rộng), chia thành các giai đoạn: Tuần 1-3 (setup và build core features với Next.js), Tuần 4-6 (refactor với Redux/GraphQL/real-time), Tuần 7-8 (testing, deployment, benchmark), Tuần 9-10 (tích hợp góc nhìn BA/QA/Tech Lead nếu cần sâu hơn). Refactor ít nhất 2 lần: lần 1 để thêm GraphQL + real-time, lần 2 để optimize performance và add E2E tests. Cuối dự án, deploy lên Vercel với previews, và setup CI/CD.

#### Mô Tả Chi Tiết Ứng Dụng
- **Chức Năng Chính**:
  - **Search Events**: Tìm kiếm sự kiện theo từ khóa, ngày, vị trí; hiển thị list với infinite scrolling.
  - **Book Tickets**: Chọn vé, form đặt chỗ (số lượng, info cá nhân), optimistic updates cho booking.
  - **Real-Time Status Updates**: Theo dõi vé còn lại, notifications khi sold out (qua WebSocket).
  - **User Features**: Auth với session (NextAuth nếu mở rộng), dashboard lịch sử bookings.
  - **Admin Basics**: Mock admin panel để manage events (CRUD).
  - **UI/UX**: Responsive design, custom themes, loading skeletons cho SSR.

- **Yêu Cầu Production-Ready**: Code modular, với server-side data fetching; tuân thủ ESLint/Prettier/Husky; code coverage >85%; benchmark latency <100ms cho queries, bundle size <500KB sau optimization.

#### Tech Stack Chính (Cập Nhật 2025)
Dựa trên trends frontend 2025 (từ các nguồn như State of Frontend 2025 và roadmaps), tập trung vào stability và performance. Phiên bản cập nhật: React 19+ với improved concurrent rendering, Next.js 15+ với enhanced App Router và edge runtime, TypeScript 5.6+ cho better generics.

- **React 19+ + Next.js 15+**: App Router cho SSR/ISR, server components.
- **TypeScript 5.6+**: Nâng cao với discriminated unions và schema inference.
- **Redux Toolkit 2.2+ + Redux Thunk/Saga**: State management với RTK Query.
- **TanStack Query 5+**: Data fetching, phối hợp với RTK Query.
- **GraphQL (Apollo Client 3.9+)**: Queries/mutations/subscriptions.
- **Tailwind CSS 4+ + MUI 6+ hoặc shadcn/ui latest**: UI library cho themes.
- **WebSocket / Socket.io 5+**: Real-time updates.
- **Jest 30+ , React Testing Library 16+ , Cypress 14+**: Unit + E2E testing.
- **Docker latest**: Containerization cho staging.
- **Vercel latest**: Deployment với previews.
- **CI/CD (GitHub Actions latest)**: Pipelines cho lint/test/deploy.

#### Kiến Thức Sẽ Học Được (Từ Lý Thuyết Đến Thực Hành)
Học qua build, refactor (ít nhất 2 lần), document (OpenAPI cho APIs), benchmark (Lighthouse cho performance). Focus production: Handle concurrent users, error logging, và scalability tactics.

- **React & Next.js Nâng Cao**:
  - **Lý Thuyết**: Concurrent Rendering để smooth UX, server components giảm client bundle.
  - **Thực Hành**: Sử dụng Suspense cho streaming data, App Router với layouts/nested routes/middleware (e.g., auth middleware). SSR/SSG/ISR cho pages (e.g., SSG cho event list). Rendering patterns: CSR cho interactive parts, SSR cho SEO. Refactor: Chuyển client-side fetches sang server components. Benchmark: Đo TTFB <500ms với Chrome Network tab.
  - **Production Tip**: Sử dụng error boundaries, streaming cho long-loading pages.

- **TypeScript Nâng Cao**:
  - **Lý Thuyết**: Discriminated unions cho state variants, inference từ schemas.
  - **Thực Hành**: Generics cho reusable hooks (e.g., <T> in fetchEvent<T>()), union types cho API responses. Integrate Zod/GraphQL Codegen cho type-safe queries. Refactor: Thêm type guards cho async data.
  - **Production Tip**: Strict null checks, auto-generate types từ GraphQL schemas.

- **Quản Lý State Quy Mô Lớn**:
  - **Lý Thuyết**: Redux cho predictable state, Saga/Thunk cho complex async.
  - **Thực Hành**: Redux Toolkit slices cho events/bookings, RTK Query caching. Saga cho side effects (e.g., logging errors). Refactor: Normalize state để tránh duplication (e.g., entities reducer).
  - **Production Tip**: DevTools cho debugging, persist state với Redux Persist nếu cần offline.

- **Server-Side Rendering & Data Fetching Tối Ưu**:
  - **Lý Thuyết**: Next.js API routes như BFF, prefetch để giảm waterfall.
  - **Thực Hành**: API routes cho proxy GraphQL, middleware cho auth. TanStack Query với infinite query (e.g., load more events), optimistic updates cho bookings. Refactor: Thêm prefetch cho related data.
  - **Production Tip**: Handle revalidation cho ISR, error handling với global catch.

- **GraphQL**:
  - **Lý Thuyết**: Schema-first để define contracts, dataloader tránh N+1.
  - **Thực Hành**: Apollo Client cho queries/mutations (e.g., mutate({ mutation: BOOK_TICKET })), subscriptions cho real-time. Setup schema với mock server. Refactor: Thêm batching/dataloader.
  - **Production Tip**: Persisted queries cho security, error masking.

- **Thiết Kế UI Phức Tạp**:
  - **Lý Thuyết**: Headless components cho flexibility.
  - **Thực Hành**: Tailwind + shadcn/ui cho custom buttons/modals, responsive themes. Dark mode với CSS vars. Refactor: Theme provider cho multi-themes.
  - **Production Tip**: A11y checks, motion với Framer Motion nếu mở rộng.

- **Real-Time Communication**:
  - **Lý Thuyết**: WebSocket cho bidirectional, reconnection logic.
  - **Thực Hành**: Socket.io rooms cho event-specific updates (e.g., join room 'event-123'). Handle disconnects. Refactor: Integrate với Redux (dispatch on message).
  - **Production Tip**: Scale với Socket.io Adapter (Redis nếu cần).

- **Tích Hợp Testing Toàn Diện**:
  - **Lý Thuyết**: Test pyramid: unit > integration > E2E.
  - **Thực Hành**: Jest cho unit (reducers), React Testing Library cho components, Cypress cho E2E (e.g., book ticket flow). Mock GraphQL/WebSocket. Refactor: Add test for real-time scenarios.
  - **Production Tip**: CI integration, snapshot tests cho UI.

- **Container Hóa Ứng Dụng & Triển Khai**:
  - **Lý Thậc**: Docker cho consistent env, Vercel cho serverless.
  - **Thực Hành**: Dockerfile cho Next.js build, GitHub Actions pipeline (lint/test/build/deploy). Vercel previews cho PRs. Refactor: Add env vars cho staging/prod.
  - **Production Tip**: Multi-stage Docker builds, auto-deploy on merge.

- **Thực Hành Sâu**:
  - Refactor 2 lần: Lần 1 (thêm GraphQL + real-time), Lần 2 (optimize + E2E).
  - Document: OpenAPI cho API routes, Markdown cho components.
  - Benchmark: Latency <100ms với Apollo DevTools, CLS=0 với Lighthouse.

#### Góc Nhìn Từ Các Vai Trò (BA, QA, Tech Lead)
Simulate roles để align business, quality, và technical leadership. Giúp app scale (e.g., từ 1k đến 10k users), dễ truyền tải cho team.

- **Góc Nhìn Từ Business Analyst (BA)**:
  - **Vai Trò Chính**: Define requirements để maximize user engagement (e.g., seamless booking giảm drop-off).
  - **Áp Dụng**: User stories: "As an event goer, I want real-time updates so that I don't miss tickets." Prioritize với MoSCoW (Must: Search/Book; Should: Real-time). Metrics: Conversion rate >20%, measured qua mock GA. Backlog.md cho juniors.
  - **Thực Hành**: BA phase (1-2 ngày): Personas (e.g., casual user vs organizer), wireframes. Refactor dựa feedback.

- **Góc Nhìn Từ Quality Assurance (QA)**:
  - **Vai Trò Chính**: Ensure reliability dưới load, no bugs in async flows.
  - **Áp Dụng**: Test pyramid với Cypress cho E2E (e.g., concurrent bookings). Edge cases: Network failures, concurrent updates. Performance: Load testing với Artillery. Test-plan.md với checklists.
  - **Thực Hành**: Run tests in CI, snapshot cho UI, root cause cho bugs.

- **Góc Nhìn Từ Tech Lead**:
  - **Vai Trò Chính**: Lead architecture cho scale, mentor processes.
  - **Áp Dụng**: Decisions: Next.js cho hybrid rendering. Code reviews: Check for race conditions in real-time. Git workflow với feature branches. Guidelines.md cho conventions.
  - **Thực Hành**: Self-review, benchmark scalability (simulate load), "tech talks" notes.

#### Cấu Trúc Thư Mục (Folder Structure)
Sử dụng App Router của Next.js cho organization, feature-based để encapsulation. Scalable cho monorepo sau.

```
booking-app/
├── app/                     # App Router (pages, layouts)
│   ├── api/                 # API routes
│   │   └── graphql.ts       # GraphQL proxy
│   ├── events/              # Feature: Events search
│   │   ├── page.tsx         # Server page
│   │   ├── loading.tsx      # Suspense loading
│   │   └── [id]/page.tsx    # Dynamic route
│   ├── bookings/            # Feature: Bookings
│   │   ├── components/      # Feature components
│   │   │   └── BookingForm.tsx
│   │   ├── hooks/           # Hooks (e.g., useBooking.ts)
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout
│   ├── middleware.ts        # Auth/logging
│   └── globals.css          # Tailwind
├── components/              # Shared UI (e.g., Button.tsx)
├── lib/                     # Utilities
│   ├── apollo.ts            # Apollo Client config
│   ├── redux/               # Store, slices
│   │   └── store.ts
│   └── socket.ts            # Socket.io client
├── public/                  # Static assets
├── tests/                   # Tests (e.g., events.test.tsx)
│   └── e2e/                 # Cypress specs
├── docs/                    # Docs (backlog.md, test-plan.md)
├── .github/workflows/       # CI/CD (deploy.yml)
├── Dockerfile               # Docker config
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript
├── tailwind.config.js       # Tailwind
└── package.json             # Dependencies
```

**Lý Do Scalable**: App Router hỗ trợ parallel routes, features isolated. Dễ add micro-services.

#### Design Patterns Áp Dụng
Áp dụng patterns nâng cao cho complexity. Học qua implement/refactor, document trong docs/patterns.md.

- **Facade Pattern**:
  - **Lý Thuyết**: Simplify complex subsystems (e.g., wrap Redux + Query).
  - **Thực Hành**: Facade hook cho booking: useBookingFacade() handles dispatch + mutation.
  - **Benefit**: Dễ maintain large state.

- **Observer Pattern**:
  - **Lý Thuyết**: Pub/sub cho changes.
  - **Thực Hành**: Socket.io events as observers (e.g., on('update', updateState)).
  - **Benefit**: Real-time sync.

- **Strategy Pattern**:
  - **Lý Thuyết**: Interchangeable algorithms.
  - **Thực Hành**: Fetch strategies: REST vs GraphQL switchable.
  - **Benefit**: Flexible data sources.

- **Singleton Pattern**:
  - **Lý Thuyết**: Single instance (e.g., store).
  - **Thực Hành**: Redux store as singleton.
  - **Benefit**: Global access without props.

- **Normalization Pattern**:
  - **Lý Thuyết**: Flatten nested data.
  - **Thực Hành**: RTK entities cho events (byId, ids).
  - **Benefit**: Efficient updates.

- **Render Props/HOC**:
  - **Lý Thuyết**: Compose behavior.
  - **Thực Hành**: HOC for auth: withAuth(Component).
  - **Benefit**: Reusable protection.

- **Proxy Pattern**:
  - **Lý Thuyết**: Control access.
  - **Thực Hành**: Middleware as proxy for requests.
  - **Benefit**: Logging/security.

**Thực Hành Sâu**: Apply 4-5 patterns in refactor, benchmark (e.g., state update time giảm 40%).

Sau dự án này, bạn sẽ master async/full-stack frontend.