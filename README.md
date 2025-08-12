# 🌐 Frontend Tech Stack 2025

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,typescript,redux,tailwind,materialui,graphql,docker,vercel" />
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
</p>

---

## 📑 Mục lục
- [Giới thiệu](#giới-thiệu)
- [Badges & Quick links](#badges--quick-links)
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
- [📈 DSA cho Frontend (tóm tắt)](#-dsa-cho-frontend-tóm-tắt)
- [💡 Gợi ý mở rộng](#-gợi-ý-mở-rộng)
- [Tài nguyên tham khảo](#tài-nguyên-tham-khảo)

---

## Giới thiệu
Tài liệu này liệt kê **tech stack frontend** được cập nhật cho 2025, mục tiêu: xây dựng ứng dụng web hiệu suất cao, dễ mở rộng, an toàn, phù hợp tiêu chuẩn thực tế của các công ty lớn (Meta, Netflix, Amazon, Uber, Shopify). README tập trung vào **công nghệ, công cụ, pattern, và best practice** — để đưa trực tiếp vào repo team.

---

## Badges & Quick links
[React](https://react.dev) · [Next.js](https://nextjs.org) · [TypeScript](https://www.typescriptlang.org) · [Tailwind](https://tailwindcss.com) · [Redux Toolkit](https://redux-toolkit.js.org) · [TanStack Query](https://tanstack.com/query) · [Vercel](https://vercel.com)

---

## 🚀 Framework & Nền tảng
| Công nghệ | Mô tả ngắn |
|---:|---|
| **React 18+** | Component-based UI library; Hooks, Concurrent rendering, Suspense. |
| **Next.js 14+ (App Router)** | SSR/SSG/ISR, server components, middleware, streaming & edge rendering. |
| **TypeScript 5+** | Static typing, utility types, strict mode → maintainability ở scale lớn. |
| **Node.js** | Runtime cho scripts, build tools và backend-for-frontend (BFF) khi cần. |

---

## 📦 Quản lý trạng thái
| Công nghệ | Khi dùng / Lợi ích |
|---:|---|
| **Redux Toolkit** | Dự án có state phức tạp, nhiều team; RTK Query cho caching. |
| **Zustand** | State local or lightweight global state, tối ưu cho performance. |
| **TanStack Query (React Query)** | Server-state: cache, background refetch, optimistic updates. |
| **Redux Saga / Thunk** | Side-effects phức tạp, orchestration (saga cho long running flows). |

---

## 🎨 UI & Hiệu suất
| Công nghệ | Mô tả ngắn |
|---:|---|
| **Tailwind CSS** | Utility-first; nhanh để phát triển UI, dễ token hoá. |
| **Ant Design / MUI / shadcn/ui** | Component library production-ready. |
| **TanStack Table / Virtual** | Virtualization cho bảng/lists lớn (100k+ rows). |
| **Web Worker / Off-main-thread** | Xử lý heavy tasks (parsing, transforms) không block UI. |
| **PWA / Service Worker** | Offline support, caching strategies, background sync. |
| **Image/Font Optimization** | AVIF/WebP, responsive images, font-display, preload/prefetch. |

---

## 🛡️ Form & Bảo mật
| Công nghệ | Mô tả |
|---:|---|
| **React Hook Form** | High-performance form handling, minimal re-render. |
| **Zod** | Schema validation + TypeScript inference. |
| **NextAuth v5** | Auth providers, session management (SSR/CSR). |
| **Best practices** | XSS prevention, input sanitization, CSP, secure cookies, same-site. |

---

## 🔗 Routing & Real-time
| Công nghệ | Mô tả |
|---:|---|
| **TanStack Router** | Type-safe, nested routes, data loaders. |
| **Socket.io / WebSocket** | Real-time channels, reconnection, rooms/namespace. |
| **SSE / WebRTC** | Use cases: live updates (SSE) | media/peer-to-peer (WebRTC). |

---

## 🛠️ Utilities & Data Fetching
| Công nghệ | Mô tả |
|---:|---|
| **Axios / Fetch** | HTTP client; use interceptors for auth/token refresh. |
| **RxJS** | Streams, debouncing/throttling advanced patterns. |
| **Apollo Client / GraphQL** | Normalized cache, fragments, subscriptions. |
| **MSW (Mock Service Worker)** | Mock API in tests & dev reliably. |

---

## 📐 Design Patterns (Frontend)
- Component Composition / Presentational vs Container
- Custom Hooks pattern
- Compound Components
- Render Props / HOC (where applicable)
- Singleton & Provider (global instances)
- Facade / Proxy / Adapter for API layers
- Observer / Event Bus (pub-sub)
- Strategy (pluggable behavior)
- State Normalization (entities)

---

## 🧪 Testing & Mocking
| Loại | Công cụ |
|---:|---|
| Unit | Jest / Vitest |
| Component | React Testing Library |
| E2E | Cypress / Playwright |
| Contract Testing | Pact (frontend↔backend contract) |
| Mocks | MSW (API mocking) |
| Accessibility Tests | axe-core, jest-axe |

**Best practice:** Test pyramid — many unit tests, fewer integration tests, minimal but reliable E2E. Tích hợp tests vào CI với repeatable seeds.

---

## ☁️ Deployment, Release & Observability
### Triển khai & CI/CD
- **Vercel / Netlify** — static/SSR deployments, previews.
- **Docker** — container image cho staging/CI.
- **GitHub Actions / GitLab CI** — pipeline lint → test → build → deploy.
- **Turborepo / Nx caching** cho monorepo builds.

### Release strategies
- **Feature flags** (LaunchDarkly, Unleash, Flagsmith) — rollout theo user segment.
- **Canary Releases / Phased rollout** — monitor small % trước khi full release.
- **Blue-Green / Rolling Deploy** — zero-downtime deployments.

### Observability & Monitoring
- **Sentry** — error tracking + performance traces.
- **RUM / Web Vitals** — measure LCP, CLS, INP, FID (Web Vitals), Real User Monitoring (New Relic Browser, Datadog RUM).
- **Lighthouse CI** — auto-audit perf/SEO/accessibility in CI.
- **Logging & Tracing** — client logs (LogRocket / FullStory / honeycomb) for session replay & debugging.

---

## 🏗️ Kiến trúc & Monorepo
| Chủ đề | Chi tiết |
|---:|---|
| **Monorepo** | Nx / Turborepo: workspaces, caching, task running, shared libs. |
| **Micro Frontends** | Module boundaries, shared dependencies, contract testing, independent deploys. |
| **Module Federation (Webpack / Federation Plugins)** | Runtime module sharing, remote components, versioning strategies. |
| **BFF / Edge** | Backend-for-frontend patterns, edge functions (Vercel Edge, Cloudflare Workers). |

---

## 📊 Performance Monitoring & Web Vitals
- Thiết lập KPI: LCP, CLS, INP, TTFB, Time to Interactive.
- Tools: **Lighthouse**, **PageSpeed**, **Web Vitals JS**, **Lighthouse CI**.
- Tactics: preconnect/prefetch, HTTP/2/3, image lazy-loading, critical CSS, font loading strategies.
- Bundle analysis: `webpack-bundle-analyzer`, `source-map-explorer`, `esbuild`/`swc` profiling.

---

## 🧠 API Design & GraphQL Best Practices
- **REST best practices**: resource naming, pagination, filtering, HATEOAS where suitable.
- **GraphQL**:
  - Schema-first design, avoid N+1 (use dataloader), use fragments, persisted queries.
  - Client-side cache policies (cache-first / network-first) depending on UX.
  - Subscriptions for realtime (use sparingly).
- **Contract Design**: keep clear API contracts; use OpenAPI / GraphQL schema as source of truth.
- **Versioning & Deprecation**: plan deprecation strategy to avoid breaking hosts.

---

## ♿ Accessibility & i18n
- **A11y**: WCAG 2.1 AA baseline, ARIA roles, focus management, skip links.
- **Tools**: `axe-core`, `react-aria`, `jest-axe`, Lighthouse accessibility audits.
- **i18n**: `i18next`, `next-intl`, locale routing, pluralization, RTL support.
- **Content pipeline**: translation keys, CI checks for missing translations.

---

## 🔒 Security & Dependency Management
- **Frontend security**: XSS mitigation, CSP headers, secure cookies, input validation.
- **Scanning**: Dependabot, Snyk, npm audit in CI.
- **Secrets management**: use environment variables in Vercel/GitHub Actions; never commit secrets.
- **Secure headers**: CSP, HSTS, Referrer-Policy, Feature-Policy.

---

## 🧩 Design System & Component Library
- **Storybook** — document components, visual tests, accessibility add-ons.
- **Design tokens**: centralized tokens (colors, spacing, typography) synchronized with Figma.
- **Publishing**: buildable component packages in monorepo, semantic versioning.
- **Visual regression**: Chromatic / Percy.

---

## 📈 DSA cho Frontend (tóm tắt)
- **Array / String**: sorting, sliding window, two pointers.
- **HashMap / Set**: caching, dedupe.
- **Stack / Queue**: undo/redo, BFS/DFS basics.
- **Tree / Graph**: menu / route trees, dependency graphs.
- **Heap / PQ**: scheduling tasks.
- **Big-O**: time/space complexity decisions for UI algorithms.

---

## 💡 Gợi ý mở rộng (quick list)
- **Playwright** cho cross-browser E2E.
- **MSW (Mock Service Worker)** cho dev & test.
- **Pact** cho contract testing giữa FE & BE.
- **Feature flagging** (LaunchDarkly / Unleash).
- **Edge caching & CDN** (CloudFront, Fastly, Cloudflare).
- **Observability stack**: Sentry + Datadog + Lighthouse CI.
- **Accessibility audits & training** cho team.

---

## Tài nguyên tham khảo
- Next.js docs — https://nextjs.org/docs  
- React docs — https://react.dev  
- TypeScript Handbook — https://www.typescriptlang.org/docs/  
- Redux Toolkit — https://redux-toolkit.js.org/  
- TanStack Query — https://tanstack.com/query  
- Web Vitals — https://web.dev/vitals/  
- OWASP Frontend Security — https://owasp.org/

---