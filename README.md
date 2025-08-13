# 🌐 Frontend Tech Stack 2025

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,typescript,redux,tailwind,materialui,graphql,docker,vercel,wasm,electron" />
</p>

<p align="center">
  <a href="https://react.dev" target="_blank">
    <img src="https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white" alt="React" />
  </a>
  <a href="https://nextjs.org" target="_blank">
    <img src="https://img.shields.io/badge/Next.js-14+-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  </a>
  <a href="https://redux-toolkit.js.org/" target="_blank">
    <img src="https://img.shields.io/badge/Redux%20Toolkit-%20purple?style=flat&logo=redux&logoColor=white" alt="Redux Toolkit" />
  </a>
  <a href="https://tanstack.com/query" target="_blank">
    <img src="https://img.shields.io/badge/TanStack%20Query-v9+-FF4154?style=flat&logo=reactquery&logoColor=white" alt="TanStack Query" />
  </a>
  <a href="https://vercel.com" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-black?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
  <a href="https://webassembly.org/" target="_blank">
    <img src="https://img.shields.io/badge/WebAssembly-WASM-654FF0?style=flat&logo=webassembly&logoColor=white" alt="WebAssembly" />
  </a>
</p>

---

## 📑 Mục lục
- [Giới thiệu](#giới-thiệu)
- [Badges & Quick Links](#badges--quick-links)
- [🚀 Framework & Nền tảng](#-framework--nền-tảng)
- [📦 Quản lý trạng thái](#-quản-lý-trạng-thái)
- [🎨 UI & Hiệu suất](#-ui--hiệu-suất)
- [🛡️ Form & Bảo mật](#️-form--bảo-mật)
- [🔗 Routing & Real-time](#-routing--real-time)
- [🛠️ Utilities & Data Fetching](#️-utilities--data-fetching)
- [📐 Design Patterns](#-design-patterns)
- [🧪 Testing & Mocking](#-testing--mocking)
- [☁️ Deployment, Release & Observability](#-deployment-release--observability)
- [🏗️ Kiến trúc & Monorepo](#️-kiến-trúc--monorepo)
- [📊 Performance Monitoring & Web Vitals](#-performance-monitoring--web-vitals)
- [🧠 API Design & GraphQL Best Practices](#-api-design--graphql-best-practices)
- [♿ Accessibility & i18n](#♿-accessibility--i18n)
- [🔒 Security & Dependency Management](#-security--dependency-management)
- [🧩 Design System & Component Library](#-design-system--component-library)
- [📈 DSA cho Frontend](#-dsa-cho-frontend)
- [🧑‍🏫 Leadership & Team Processes](#-leadership--team-processes)
- [🌍 Cross-Platform Integration](#-cross-platform-integration)
- [📝 Documentation & Onboarding](#-documentation--onboarding)
- [💡 Gợi ý mở rộng](#-gợi-ý-mở-rộng)
- [Tài nguyên tham khảo](#tài-nguyên-tham-khảo)

---

## Giới thiệu
Tài liệu này là bản tổng hợp hoàn hảo về **tech stack frontend** cho năm 2025, nhằm xây dựng ứng dụng web hiệu suất cao, dễ mở rộng, an toàn, và phù hợp với tiêu chuẩn thực tế của các công ty lớn (Meta, Netflix, Amazon, Uber, Shopify). README tập trung vào **công nghệ, công cụ, pattern, và best practices**, được thiết kế hiện đại, ngắn gọn, và nhấn mạnh tính ứng dụng thực tế. Từ TypeScript type-safe cho API calls, tối ưu bundle size với Next.js App Router, đến các kỹ năng lãnh đạo như code review và mentoring, đây là công cụ lý tưởng để hệ thống hóa kiến thức và dẫn dắt đội nhóm frontend.

---

## Badges & Quick Links
[React](https://react.dev) · [Next.js](https://nextjs.org) · [TypeScript](https://www.typescriptlang.org) · [Tailwind](https://tailwindcss.com) · [Redux Toolkit](https://redux-toolkit.js.org) · [TanStack Query](https://tanstack.com/query) · [Vercel](https://vercel.com) · [GraphQL](https://graphql.org) · [Docker](https://www.docker.com) · [Storybook](https://storybook.js.org) · [Sentry](https://sentry.io) · [WebAssembly](https://webassembly.org) · [React Native](https://reactnative.dev) · [OpenTelemetry](https://opentelemetry.io)

---

## 🚀 Framework & Nền tảng
| Công nghệ | Công dụng |
|---:|---|
| **React 18+** | Xây dựng giao diện người dùng với components, hỗ trợ Hooks, Concurrent Rendering, và Suspense cho hiệu suất cao. |
| **Next.js 14+ (App Router)** | Framework React hỗ trợ SSR/SSG/ISR, server components, middleware, streaming và edge rendering để tối ưu SEO và performance. |
| **TypeScript 5+** | Cung cấp static typing, utility types, và strict mode để tăng tính maintainable ở ứng dụng scale lớn. |
| **Node.js** | Runtime cho scripts, build tools và backend-for-frontend (BFF), hỗ trợ tích hợp với Next.js API Routes. |
| **WebAssembly (WASM)** | Chạy code hiệu suất cao trong browser, dùng cho tác vụ nặng như rendering, AI, hoặc game. |

---

## 📦 Quản lý trạng thái
| Công nghệ | Công dụng |
|---:|---|
| **Redux Toolkit** | Quản lý state phức tạp với RTK Query để caching, giảm boilerplate và hỗ trợ offline sync. |
| **Zustand** | Quản lý state local hoặc global nhẹ, tối ưu performance với middleware và immutable updates. |
| **TanStack Query (React Query)** | Quản lý server-state với caching, background refetch, và optimistic updates cho giao diện real-time. |
| **Redux Saga / Thunk** | Xử lý side-effects phức tạp (Saga cho long-running flows) hoặc async cơ bản (Thunk) với logging và orchestration. |

---

## 🎨 UI & Hiệu suất
| Công nghệ | Công dụng |
|---:|---|
| **Tailwind CSS** | Utility-first CSS, giúp phát triển UI nhanh, dễ token hóa và hỗ trợ dark mode. |
| **Ant Design / MUI / shadcn/ui** | Thư viện component production-ready, hỗ trợ theme customization và headless components. |
| **TanStack Table / Virtual** | Virtualization cho bảng/lists lớn, chỉ render visible items để tối ưu hiệu suất. |
| **Web Worker / Off-main-thread** | Xử lý tác vụ nặng (parsing, transforms) ở luồng riêng, tránh block UI. |
| **PWA / Service Worker** | Hỗ trợ offline, caching tài nguyên, background sync và push notifications. |
| **Image/Font Optimization** | Sử dụng AVIF/WebP, responsive images, font-display, preload/prefetch để tối ưu tốc độ load. |
| **Framer Motion / Three.js** | Tạo animations phức tạp hoặc 3D UI cho trải nghiệm người dùng hiện đại. |
| **AI-Driven UI (Figma AI)** | Tự động hóa prototyping, design-to-code, hoặc dynamic UI với AI. |

---

## 🛡️ Form & Bảo mật
| Công nghệ | Công dụng |
|---:|---|
| **React Hook Form** | Xử lý form hiệu suất cao, giảm re-render, tích hợp resolver cho validation. |
| **Zod** | Validation schema với TypeScript inference, đảm bảo dữ liệu đầu vào hợp lệ. |
| **NextAuth v5** | Quản lý authentication với OAuth providers, JWT sessions và edge middleware. |
| **Best practices** | Ngăn chặn XSS, input sanitization, CSP headers, secure cookies và same-site policies. |

---

## 🔗 Routing & Real-time
| Công nghệ | Công dụng |
|---:|---|
| **TanStack Router** | Định tuyến type-safe, hỗ trợ nested routes và data loaders cho prefetching. |
| **Socket.io / WebSocket** | Giao tiếp real-time với reconnection logic, rooms/namespace và subscriptions. |
| **SSE / WebRTC** | Cung cấp live updates (SSE) hoặc media/peer-to-peer communication (WebRTC). |
| **gRPC** | Giao tiếp hiệu suất cao với backend, hỗ trợ streaming và type-safe với Protobuf. |

---

## 🛠️ Utilities & Data Fetching
| Công nghệ | Công dụng |
|---:|---|
| **Axios / Fetch** | HTTP client với interceptors cho auth và token refresh tự động. |
| **RxJS** | Xử lý streams, debouncing/throttling cho event handling phức tạp. |
| **Apollo Client / GraphQL** | Quản lý data fetching với normalized cache, fragments và subscriptions real-time. |
| **MSW (Mock Service Worker)** | Mock API đáng tin cậy cho môi trường dev và testing. |

---

## 📐 Design Patterns (Frontend)
- **Component Composition / Presentational vs Container**: Kết hợp components hoặc tách logic/UI để tái sử dụng.
- **Custom Hooks pattern**: Tái sử dụng logic stateful với hooks như useDebounce.
- **Compound Components**: Nhóm components chia sẻ state ngầm, như forms hoặc Select/Options.
- **Render Props / HOC**: Chia sẻ code qua render functions hoặc higher-order components cho auth/data wrappers.
- **Singleton & Provider**: Quản lý global instances (auth, theme) qua Context hoặc singleton classes.
- **Facade / Proxy / Adapter**: Đơn giản hóa API layers hoặc lazy loading với proxy.
- **Observer / Event Bus**: Xử lý pub-sub cho events như WebSocket subscriptions.
- **Strategy**: Hoán đổi thuật toán linh hoạt (ví dụ: payment methods).
- **State Normalization**: Tránh duplication state với entities cho complex data.

---

## 🧪 Testing & Mocking
| Loại | Công cụ | Công dụng |
|---:|---|---|
| Unit | Jest / Vitest | Test logic components, reducers, actions với snapshots. |
| Component | React Testing Library | Test user interactions và accessibility của components. |
| E2E | Cypress / Playwright | Test flows người dùng toàn diện, cross-browser. |
| Contract Testing | Pact | Đảm bảo contract giữa frontend và backend. |
| Mocks | MSW (API mocking) | Mock API đáng tin cậy cho dev và testing. |
| Accessibility Tests | axe-core, jest-axe | Kiểm tra WCAG 2.1 và ARIA compliance tự động. |

**Best practice**: Áp dụng test pyramid — nhiều unit tests, ít integration tests, E2E tối thiểu nhưng đáng tin cậy. Tích hợp tests vào CI với repeatable seeds.

---

## ☁️ Deployment, Release & Observability
### Triển khai & CI/CD
- **Vercel / Netlify**: Deploy static/SSR với previews tự động.
- **Docker**: Container hóa ứng dụng cho staging và CI consistency.
- **GitHub Actions / GitLab CI**: Pipeline lint → test → build → deploy.
- **Turborepo / Nx caching**: Tăng tốc build monorepo với caching.

### Release strategies
- **Feature flags (LaunchDarkly, Unleash, Flagsmith)**: Rollout theo segment người dùng.
- **Canary Releases / Phased rollout**: Monitor nhỏ trước khi full deploy.
- **Blue-Green / Rolling Deploy**: Zero-downtime deployments cho high-availability.

### Observability & Monitoring
- **Sentry**: Error tracking và performance traces.
- **RUM / Web Vitals**: Đo lường LCP, CLS, INP, FID với Real User Monitoring (New Relic, Datadog).
- **Lighthouse CI**: Auto-audit perf/SEO/accessibility trong CI.
- **OpenTelemetry**: Tracing và monitoring client/server, phân tích bottlenecks trong distributed systems.
- **Logging & Tracing**: Client logs (LogRocket, FullStory, honeycomb) cho session replay và debugging.

---

## 🏗️ Kiến trúc & Monorepo
| Chủ đề | Công dụng |
|---:|---|
| **Monorepo** | Quản lý multi-apps với Nx/Turborepo, hỗ trợ workspaces, caching và shared libs. |
| **Micro Frontends** | Chia ứng dụng thành modules độc lập, hỗ trợ shared dependencies và independent deploys. |
| **Module Federation (Webpack / Federation Plugins)** | Runtime module sharing, load remote components với versioning strategies. |
| **BFF / Edge** | Backend-for-frontend patterns và edge functions (Vercel Edge, Cloudflare Workers) để tối ưu API calls. |

---

## 📊 Performance Monitoring & Web Vitals
| Công nghệ | Công dụng |
|---:|---|
| **KPI** | Đặt mục tiêu LCP <2.5s, CLS=0, INP <200ms, TTFB <200ms, Time to Interactive <5s. |
| **Tools** | Lighthouse, PageSpeed, Web Vitals JS, Lighthouse CI cho đo lường hiệu suất. |
| **Tactics** | Preconnect/prefetch, HTTP/2/3, image lazy-loading, critical CSS, font loading strategies. |
| **Bundle analysis** | webpack-bundle-analyzer, source-map-explorer, esbuild/swc profiling để tối ưu bundle size. |
| **Performance Budgets** | Đặt giới hạn bundle size (<1MB), LCP (<2s), CLS (=0) để đảm bảo hiệu suất team-wide. |

---

## 🧠 API Design & GraphQL Best Practices
| Công nghệ | Công dụng |
|---:|---|
| **REST best practices** | Resource naming, pagination, filtering, HATEOAS khi phù hợp. |
| **GraphQL** | Schema-first design, tránh N+1 (dataloader), fragments, persisted queries, subscriptions real-time (sparingly). |
| **Serverless (AWS Lambda, Vercel Functions)** | Xử lý logic backend nhẹ, tích hợp với Next.js API Routes hoặc edge functions. |
| **API Gateway** | Tổng hợp API calls, cung cấp single entry point cho frontend-backend communication. |
| **Contract Design** | Dùng OpenAPI/GraphQL schema làm source of truth. |
| **Versioning & Deprecation** | Lên kế hoạch deprecation để tránh breaking changes. |

---

## ♿ Accessibility & i18n
| Chủ đề | Công dụng |
|---:|---|
| **A11y** | WCAG 2.1 AA, ARIA roles, focus management, skip links. |
| **Tools** | axe-core, react-aria, jest-axe, Lighthouse accessibility audits. |
| **i18n** | i18next, next-intl, hỗ trợ locale routing, pluralization, RTL. |
| **Content pipeline** | Quản lý translation keys, CI checks cho missing translations. |

---

## 🔒 Security & Dependency Management
| Chủ đề | Công dụng |
|---:|---|
| **Frontend security** | Ngăn chặn XSS, CSP headers, secure cookies, input validation. |
| **Scanning** | Dependabot, Snyk, npm audit trong CI. |
| **Secrets management** | Environment variables trong Vercel/GitHub Actions, không commit secrets. |
| **Secure headers** | CSP, HSTS, Referrer-Policy, Feature-Policy. |

---

## 🧩 Design System & Component Library
| Chủ đề | Công dụng |
|---:|---|
| **Storybook** | Document components, visual tests, accessibility add-ons. |
| **Design tokens** | Centralized colors, spacing, typography, sync với Figma. |
| **Publishing** | Buildable component packages trong monorepo, semantic versioning. |
| **Visual regression** | Chromatic, Percy cho kiểm tra UI consistency. |

---

## 📈 DSA cho Frontend
| Chủ đề | Công dụng |
|---:|---|
| **Array / String** | Sorting, sliding window, two pointers cho UI filtering. |
| **HashMap / Set** | Caching, deduplication dữ liệu. |
| **Stack / Queue** | Undo/redo, BFS/DFS cơ bản. |
| **Tree / Graph** | Menu/route trees, dependency graphs. |
| **Heap / Priority Queue** | Scheduling tasks trong UI. |
| **Big-O** | Đánh giá time/space complexity cho thuật toán UI. |

---

## 🧑‍🏫 Leadership & Team Processes
| Chủ đề | Công dụng |
|---:|---|
| **Code Review** | Đảm bảo code quality với ESLint, Prettier, và checklist (consistency, readability, performance). |
| **Technical Debt Management** | Xác định và refactor technical debt (ví dụ: migrate legacy code, tối ưu bundle size). |
| **Mentoring** | Hướng dẫn junior developers qua pair programming, tech talks, và wiki nội bộ. |
| **Agile/Scrum** | Hỗ trợ sprint planning, story points, và backlog grooming để align với team PM/BA. |

---

## 🌍 Cross-Platform Integration
| Công nghệ | Công dụng |
|---:|---|
| **React Native** | Xây dựng mobile apps từ codebase React, tái sử dụng logic với web. |
| **Electron** | Phát triển desktop apps với web technologies (HTML, CSS, JS). |
| **Code Sharing** | Dùng Monorepo để share logic giữa web, mobile, và desktop. |

---

## 📝 Documentation & Onboarding
| Chủ đề | Công dụng |
|---:|---|
| **API Docs (OpenAPI)** | Tài liệu hóa API endpoints với OpenAPI/Swagger cho team integration. |
| **Component Docs (Storybook)** | Document components với use cases, accessibility, và visual tests. |
| **Onboarding Guides** | Hướng dẫn setup môi trường, coding conventions, và quy trình CI/CD. |

---

## 💡 Gợi ý mở rộng
- **AI/ML Integration**: TensorFlow.js, ml5.js cho predictive analytics hoặc chatbot trong browser.
- **Playwright**: Cross-browser E2E testing.
- **Pact**: Contract testing giữa frontend và backend.
- **Feature flagging**: LaunchDarkly, Unleash cho rollout linh hoạt.
- **Edge caching & CDN**: CloudFront, Fastly, Cloudflare để tối ưu tốc độ.
- **Observability stack**: Sentry, Datadog, Lighthouse CI.
- **Accessibility training**: Đào tạo team về WCAG và ARIA.
- **WebGPU**: Đồ họa hiệu suất cao trong browser cho 3D rendering hoặc game.
- **Low-Code Platforms (Retool, Appsmith)**: Xây dựng internal tools nhanh cho team.

---

## Tài nguyên tham khảo
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TanStack Query](https://tanstack.com/query)
- [Web Vitals](https://web.dev/vitals)
- [OWASP Frontend Security](https://owasp.org)
- [Storybook Docs](https://storybook.js.org)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [WebAssembly](https://webassembly.org)
- [React Native](https://reactnative.dev)
- [OpenTelemetry](https://opentelemetry.io)
- [gRPC](https://grpc.io)
- [Roadmap.sh](https://roadmap.sh/frontend)
