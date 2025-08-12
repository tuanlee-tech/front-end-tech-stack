# Hệ Thống CRM Học Tập (Uber-Like Platform)

![Banner](https://via.placeholder.com/1280x200?text=CRM+System+with+Micro+Frontends) <!-- Thay bằng hình ảnh thực nếu có -->

## Giới Thiệu

Dự án này là đỉnh cao của chuỗi 5 dự án học tập nhằm hệ thống hóa kiến thức frontend developer, tập trung vào React/Next.js ecosystem. Nó mô phỏng một hệ thống CRM (Customer Relationship Management) giống như nền tảng đặt xe của Uber, nơi quản lý chuyến đi, nhiệm vụ, dữ liệu lớn, chat real-time, và blog giới thiệu. Các module từ 4 dự án trước được hợp nhất thành Micro Frontends trong một Monorepo, giúp học sâu về kiến trúc scale lớn, tối ưu hiệu suất, và các design patterns thực tế.

Dự án được hoàn thành vào ngày 12/08/2025, dựa trên lộ trình học 2025 (từ roadmap.sh và các nguồn tương tự). Mục tiêu: Không chỉ code mà còn rèn tư duy Senior/Tech Lead, như quản lý technical debt và mentoring.

### Mục Tiêu Học Tập Đạt Được
- **Kiến Thức Cốt Lõi**: Master React thuần, Next.js (App Router, SSR/SSG/ISR), TypeScript.
- **Quản Lý Trạng Thái**: Redux Toolkit, Zustand, TanStack Query, Redux Saga/Thunk.
- **Hiệu Suất & UI**: TanStack Table/Virtual, Web Worker, PWA, Tailwind, Ant Design/MUI.
- **Bảo Mật & Form**: Next-Auth v5, React Hook Form, Zod.
- **Real-time & Routing**: WebSocket (Socket.io), TanStack Router.
- **Kiến Trúc**: Monorepo (Nx/Turborepo), Micro Frontends, Module Federation.
- **Utilities & Patterns**: Axios, RxJS, GraphQL (Apollo), Design Patterns (Composition, Observer, Facade, v.v.).
- **Testing & Deployment**: Jest/RTL/Cypress, Vercel/Netlify, Lighthouse/Sentry.
- **Nâng Cao**: Accessibility (ARIA), i18n, DevOps (CI/CD), tư duy phản biện.

Dự án chứng minh bạn đã đạt ~75% lộ trình frontend (từ Beginner đến Advanced), hướng tới Senior với kỹ năng mềm.

## Tech Stack

Dựa trên sổ tay tech stack cập nhật (10/10), các công nghệ được chọn sát với thực tiễn big tech (Meta, Netflix, Amazon, Uber, Shopify):

- **Framework & Nền Tảng**: React 18+, Next.js 14+ (App Router), TypeScript 5+.
- **Quản Lý Trạng Thái**: Redux Toolkit, Zustand, TanStack Query v9, Redux Saga/Thunk.
- **UI & Hiệu Suất**: Tailwind CSS, Ant Design/MUI, TanStack Table/Virtual, Web Worker, PWA (Service Worker).
- **Form & Bảo Mật**: React Hook Form, Zod, Next-Auth v5.
- **Routing & Real-time**: TanStack Router, WebSocket (Socket.io).
- **Utilities**: Axios, RxJS, GraphQL (Apollo Client), Next.js Middleware.
- **Design Patterns**: Component Composition, Custom Hooks, Container/Presenter, Singleton/Provider, Facade/Proxy, Strategy, Observer, Compound Components, Render Props, HOC.
- **Testing**: Jest/Vitest, React Testing Library, Cypress.
- **Deployment & Monitoring**: Vercel/Netlify, Docker (cho CI/CD), Lighthouse, Sentry.
- **Kiến Trúc**: Monorepo (Nx), Micro Frontends, Module Federation (Webpack).
- **Khác**: Accessibility (react-aria, i18next), GraphQL cho data fetching.

Usecase thực tế: Giống Uber dashboard (dữ liệu chuyến đi), Netflix chat (real-time), Amazon seller panel (Micro FE).

## Cài Đặt

Yêu cầu: Node.js 18+, npm/yarn/pnpm.

1. Clone repository:
   ```
   git clone https://github.com/your-username/crm-learning-system.git
   cd crm-learning-system
   ```

2. Cài đặt dependencies (sử dụng Monorepo với Nx):
   ```
   npm install
   # Hoặc yarn install / pnpm install
   ```

3. Cấu hình environment (tạo `.env.local` từ `.env.example`):
   - Thêm API keys cho Next-Auth, WebSocket server, v.v.
   - Ví dụ: `NEXTAUTH_SECRET=your-secret`, `DATABASE_URL=your-db-url`.

4. Chạy dev server:
   ```
   npm run dev
   # Hoặc nx serve (nếu dùng Nx)
   ```
   Truy cập tại `http://localhost:3000`.

5. Build và deploy:
   ```
   npm run build
   npm run start
   ```
   Deploy lên Vercel: Kết nối GitHub repo và auto-deploy.

## Sử Dụng

- **Module Blog/Portfolio**: Truy cập `/blog` – Hiển thị nội dung giới thiệu (từ Dự án 1).
- **Module Quản Lý Nhiệm Vụ**: `/tasks` – Tạo/xóa tasks liên quan chuyến đi (Dự án 2).
- **Module Dữ Liệu Lớn**: `/dashboard` – Xem bảng dữ liệu lớn với virtualization (Dự án 3).
- **Module Chat Real-time**: `/chat` – Giao tiếp giữa user/driver (Dự án 4).
- **CRM Toàn Bộ**: Trang chính `/` – Hợp nhất tất cả qua Micro FE, với auth và routing nested.

Ví dụ sử dụng: Đăng nhập qua Next-Auth, tạo task, xem data lớn, chat real-time – tất cả liên kết (ví dụ: task trigger notification chat).

### Demo
- Deployed tại: [Vercel Demo Link](https://crm-learning-system.vercel.app) (thay bằng link thực).
- Video walkthrough: [YouTube Demo](https://youtube.com/your-video) (tùy chọn).

## Kiến Trúc Dự Án

- **Monorepo Structure** (sử dụng Nx/Turborepo):
  ```
  ├── apps/
  │   ├── crm-host/       # App chính (Next.js), load remotes
  │   ├── blog-remote/    # Dự án 1: Module Blog
  │   ├── tasks-remote/   # Dự án 2: Quản Lý Nhiệm Vụ
  │   ├── data-remote/    # Dự án 3: Dữ Liệu Lớn
  │   └── chat-remote/    # Dự án 4: Chat Real-time
  ├── packages/
  │   └── shared-ui/      # Shared components/patterns (Singleton, Facade)
  ├── nx.json             # Config Monorepo
  └── package.json
  ```

- **Micro Frontends**: Sử dụng Module Federation – host load remotes dynamically tại runtime, giảm bundle size và cho phép deploy riêng (giống Amazon).
- **Data Flow**: GraphQL/RTK Query cho server state, WebSocket cho real-time updates.
- **Performance**: Virtualization cho data lớn, ISR cho static pages, Web Vitals đo lường (LCP <2s, CLS=0).
- **Security**: Next-Auth với JWT, Zod validation, Middleware cho rate limiting.

Technical Debt: Đã refactor để tránh duplication, nhưng có thể cải thiện bằng AI integration (TensorFlow.js) trong tương lai.

## Đóng Góp

- Fork repo và tạo PR.
- Issue: Báo bug hoặc gợi ý cải thiện (ví dụ: Thêm AI cho predictive analytics).
- Code style: ESLint + Prettier.

## License

MIT License. Xem [LICENSE](LICENSE) để biết chi tiết.

## Tác Giả & Liên Hệ

- Tác giả: [Your Name] – Frontend Learner hướng tới Senior.
- Email: your.email@example.com
- GitHub: [your-username](https://github.com/your-username)