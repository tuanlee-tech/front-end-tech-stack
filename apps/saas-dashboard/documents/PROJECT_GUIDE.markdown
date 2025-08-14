# Hướng Dẫn Dự Án SaaS Dashboard

Chào mừng bạn đến với **SaaS Dashboard**, một dự án thực hành frontend nâng cao đến master, giúp bạn thành thạo kiến trúc phức tạp, Micro Frontends (MFE), cross-platform, và các kỹ năng enterprise-grade! Ứng dụng này là một dashboard đa tenant với phân quyền (RBAC), analytics real-time, và tùy chỉnh giao diện. Dự án tập trung vào **scalability**, **security**, và **observability**, với mục tiêu xây dựng một ứng dụng **production-ready** đạt latency <100ms, bundle size <1MB, và code coverage >90%.

Phiên bản đầu tiên sử dụng **useState** và client-side rendering (CSR) để đơn giản, dễ học. Hai lần refactor sau sẽ tích hợp **useReducer**, **Redux/Zustand**, **GraphQL**, **WebAssembly (WASM)**, **server components**, và **cross-platform** (React Native/Electron) để lấp đầy kiến thức và chuẩn bị bạn cho vai trò Tech Lead.

## 🚀 Tổng Quan Dự Án

SaaS Dashboard là một ứng dụng đa nền tảng (web, mobile, desktop) cho phép nhiều tenant (ví dụ: công ty A, B) quản lý dữ liệu cách ly, phân quyền người dùng, và tùy chỉnh dashboard. Đây là dự án lý tưởng để học cách xây dựng ứng dụng **enterprise-grade** với:

- **Hiệu Suất Cao**: Latency <100ms, LCP <1s, CLS=0, bundle size <1MB.
- **Code Sạch**: Modular, type-safe, tuân thủ ESLint/Prettier/Husky, coverage >90%.
- **Thân Thiện Với Người Dùng**: Responsive, dark/light themes, WCAG 2.1 AA, i18n (RTL).

### Tính Năng Chính
- **Multi-Tenant Dashboard**: Hỗ trợ dữ liệu cách ly cho từng tenant.
- **Role-Based Access Control (RBAC)**: Phân quyền (admin, editor, viewer), dynamic permissions.
- **Analytics & Visualization**: Biểu đồ real-time (user activity, revenue), export reports (CSV/JSON).
- **Customization**: Drag-and-drop widgets, theme switching.
- **Cross-Platform**: Web (Next.js), mobile (React Native), desktop (Electron) với code sharing.
- **Admin Features**: Quản lý users, roles, audit logs.
- **UI/UX**: Responsive, dark/light themes, a11y, i18n.

### Mục Tiêu Học Tập
- **Kiến Trúc Phức Tạp**: Monorepo, Micro Frontends, server components.
- **State Management**: Redux Toolkit, Zustand, RTK Query, offline sync.
- **Data Fetching**: GraphQL (subscriptions, dataloader), REST, WASM.
- **Cross-Platform**: Code sharing giữa web, mobile, desktop.
- **Testing**: Test pyramid (unit, integration, E2E) với Jest, Vitest, Playwright.
- **Observability**: Sentry, OpenTelemetry, Web Vitals.
- **Security**: CSP, XSS mitigation, secure headers.
- **Leadership**: Code review, technical debt, mentoring.

### Tech Stack (Cập Nhật 14/08/2025)
- **Next.js 15.0.0**: App Router, edge runtime, server components.
- **TypeScript 5.6.2**: Advanced generics, discriminated unions.
- **Redux Toolkit 2.2.7**, **Zustand 5.0.0-rc.2**: State management.
- **TanStack Query 5.51.1**: Data fetching, caching.
- **GraphQL (Apollo Client 3.11.0)**: Queries, mutations, subscriptions.
- **WebAssembly (WASM)**: Rust module cho analytics.
- **Module Federation (Webpack 5)**: Micro Frontends.
- **React Native 0.75.2**, **Electron 31.3.1**: Cross-platform.
- **Testing**: Jest 30.0.0-alpha.4, Vitest 2.0.5, Playwright 1.46.1.
- **Observability**: Sentry 8.28.0, OpenTelemetry 1.26.0.
- **Design System**: Storybook 8.2.9, Chromatic 11.7.1.
- **CI/CD**: Nx 19.8.0, GitHub Actions.

### Kế Hoạch Thực Hiện
- **Thời Gian**: 10-12 tuần:
  - **Tuần 1-4**: Setup monorepo, xây dựng core features (dashboard, RBAC, analytics) với useState, CSR.
  - **Tuần 5-8**: Refactor lần 1 (Redux/Zustand, GraphQL, SSR, WASM).
  - **Tuần 9-10**: Refactor lần 2 (cross-platform, a11y, optimization).
  - **Tuần 11-12**: Deploy, observability, leadership practices.
- **Refactor**: 2 lần:
  - **Lần 1**: Chuyển sang Redux/Zustand, GraphQL subscriptions, SSR, WASM.
  - **Lần 2**: Tối ưu performance, cross-platform, a11y, E2E testing.
- **Kết Quả**: Deploy lên Vercel, latency <100ms, coverage >90%, CLS=0.

---

## 🛠 Setup Dự Án

Hướng dẫn setup monorepo với Nx, đảm bảo khắc phục lỗi treo.

### Bước 1: Tạo Monorepo với Nx
```bash
# Cài Node.js 20.17.0
nvm install 20.17.0
nvm use 20.17.0

# Cài yarn
npm install -g yarn@1.22.22

# Xóa cache
rm -rf ~/.npm node_modules yarn.lock
yarn cache clean

# Tạo workspace
export NX_DAEMON=false
yarn create nx-workspace@19.8.0 saas-dashboard \
  --preset=react \
  --appName=web \
  --style=css \
  --nxCloud=false \
  --packageManager=yarn

cd saas-dashboard
```

### Bước 2: Cài Đặt Dependencies
```bash
yarn add @tanstack/react-query@5.51.1 @apollo/client@3.11.0 graphql@16.9.0 zustand@5.0.0-rc.2 @reduxjs/toolkit@2.2.7 react-redux@9.1.2 @radix-ui/react-slot@1.1.0 @radix-ui/react-select@2.1.1 @storybook/react@8.2.9 @storybook/addon-essentials@8.2.9 chromatic@11.7.1 @opentelemetry/api@1.9.0 @opentelemetry/sdk-trace-web@1.26.0 @sentry/nextjs@8.28.0 react-native@0.75.2 electron@31.3.1 @playwright/test@1.46.1 jest@30.0.0-alpha.4 vitest@2.0.5 ts-jest@30.0.0-alpha.1 @testing-library/react@16.0.0 @testing-library/jest-dom@6.4.8 @axe-core/react@4.9.1 pact@13.0.0
yarn add -D @nx/next@19.8.0 @nx/react-native@19.8.0 @nx/electron@19.8.0 @typescript-eslint/eslint-plugin@8.1.0 @typescript-eslint/parser@8.1.0 eslint-plugin-react@7.35.0 eslint-plugin-react-hooks@4.6.2 prettier@3.3.3 husky@9.1.4 tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
```

### Bước 3: Cấu Hình Tailwind CSS
Chạy:
```bash
yarn nx g @nx/react:setup-tailwind --project=web
```

Cập nhật `apps/web/tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
      },
    },
  },
  plugins: [],
};
export default config;
```

Cập nhật `apps/web/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground: #000;
  --background: #fff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --foreground: #fff;
    --background: #1a1a1a;
  }
}
body {
  color: var(--foreground);
  background: var(--background);
}
```

### Bước 4: Cấu Hình ESLint + Prettier
Tạo `.eslintrc.json`:
```json
{
  "env": { "browser": true, "es2020": true, "node": true },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/exhaustive-deps": "warn"
  }
}
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

Cấu hình Husky:
```bash
yarn dlx husky-init
echo "yarn nx affected --target=lint && yarn nx affected --target=test" > .husky/pre-commit
```

### Bước 5: Cấu Hình TypeScript
Cập nhật `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@ui/*": ["packages/ui/src/*"],
      "@types/*": ["packages/types/src/*"],
      "@utils/*": ["packages/utils/src/*"]
    }
  },
  "include": ["apps/**/*", "packages/**/*"],
  "exclude": ["node_modules"]
}
```

### Bước 6: Cấu Hình Storybook
```bash
yarn nx g @nx/react:storybook-configuration ui
```

### Bước 7: Cấu Hình GitHub Actions
Tạo `.github/workflows/ci.yml`:
```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'yarn'
      - run: yarn install
      - run: yarn nx affected --target=lint
      - run: yarn nx affected --target=test
      - run: yarn nx affected --target=build
```

### Bước 8: Khởi Chạy Project
```bash
yarn nx serve web
```
Mở `http://localhost:4200` để kiểm tra.

---

## 📂 Cấu Trúc Thư Mục

Cấu trúc monorepo hỗ trợ MFE và cross-platform:

```
saas-dashboard/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [tenantId]/page.tsx
│   │   │   │   └── widgets/
│   │   │   │       └── page.tsx
│   │   │   ├── analytics/
│   │   │   │   ├── page.tsx
│   │   │   │   └── charts/
│   │   │   │       └── page.tsx
│   │   │   ├── users/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── middleware.ts
│   │   ├── lib/
│   │   │   ├── apollo.ts
│   │   │   ├── zustand.ts
│   │   │   └── wasm.ts
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   └── Chart.tsx
│   │   ├── tests/
│   │   │   └── e2e/
│   │   │       └── dashboard.spec.ts
│   ├── mobile/
│   │   └── App.tsx
│   ├── desktop/
│   │   └── main.js
├── packages/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   └── stories/
│   │   │       └── Button.stories.tsx
│   │   └── tokens.json
│   ├── types/
│   │   └── src/
│   │       └── index.ts
│   ├── utils/
│   │   └── src/
│   │       └── analytics.ts
├── docs/
│   ├── backlog.md
│   ├── guidelines.md
│   ├── test-plan.md
│   └── patterns.md
├── .github/workflows/
│   └── ci.yml
├── Dockerfile
├── nx.json
├── tsconfig.json
└── package.json
```

**Lý Do Scalable**: Monorepo với Nx hỗ trợ caching, MFE cho independent deploys, code sharing giữa web/mobile/desktop.

---

## 💻 Code Mẫu (Phiên Bản Đầu Tiên)

Phiên bản đầu tiên sử dụng **useState**, **CSR**, và **fetch API** để đơn giản, dễ học. Code tập trung vào **Multi-Tenant Dashboard**, **RBAC**, và **Analytics**.

### 1. Types
Tạo `packages/types/src/index.ts`:
```typescript
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  tenantId: string;
}

export interface Tenant {
  id: string;
  name: string;
}

export interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
}

export interface Widget {
  id: string;
  content: string;
}
```

**Tech Lead Review**:
- **Tốt**: Types rõ ràng, hỗ trợ RBAC và multi-tenant.
- **Cải Thiện**: Thêm discriminated unions cho `AnalyticsData` (e.g., `type: 'revenue' | 'activity'`) trong refactor.

### 2. Mock API với MSW
Tạo `apps/web/mocks/handlers.ts`:
```typescript
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/tenants/:tenantId/analytics', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: '1', metric: 'Users', value: 100 },
        { id: '2', metric: 'Revenue', value: 5000 },
      ])
    );
  }),
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 'u1', email: 'admin@tenant1.com', role: 'admin', tenantId: 't1' },
      ])
    );
  }),
];
```

Tạo `apps/web/mocks/browser.ts`:
```typescript
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

Khởi động MSW trong `apps/web/app/layout.tsx`:
```typescript
'use client';

import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../mocks/browser').then(({ worker }) => worker.start());
    }
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**Tech Lead Review**:
- **Tốt**: MSW mô phỏng API thực tế, dễ chuyển sang backend.
- **Cải Thiện**: Thêm mock GraphQL subscriptions trong refactor.

### 3. Multi-Tenant Dashboard với useState
Tạo `apps/web/app/dashboard/[tenantId]/page.tsx`:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { AnalyticsData } from '@types/index';

/**
 * Dashboard page cho tenant cụ thể
 */
export default function TenantDashboard() {
  const { tenantId } = useParams();
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/tenants/${tenantId}/analytics`);
        const data = await res.json();
        setAnalytics(data);
      } catch (err) {
        setError('Failed to fetch analytics');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, [tenantId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard for Tenant {tenantId}</h1>
      <div className="grid gap-4">
        {analytics.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <h3>{item.metric}</h3>
            <p>Value: {item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Tech Lead Review**:
- **Tốt**: Đơn giản, sử dụng `useState` và dynamic route cho multi-tenant.
- **Cải Thiện**: Chuyển sang server component, thêm TanStack Query trong refactor.

### 4. RBAC với useState
Tạo `apps/web/lib/auth.ts`:
```typescript
import { useState } from 'react';
import { User } from '@types/index';

/**
 * Hook để quản lý auth state
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/users');
      const users = await res.json();
      const foundUser = users.find((u: User) => u.email === email);
      if (foundUser) setUser(foundUser);
      else throw new Error('User not found');
    } catch (err) {
      setError('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => setUser(null);

  return { user, login, logout, isLoading, error };
}
```

Tạo `apps/web/app/users/page.tsx`:
```typescript
'use client';

import { useAuth } from '@/lib/auth';
import { Button } from '@ui/Button';

/**
 * User management page (admin only)
 */
export default function UsersPage() {
  const { user, login, logout } = useAuth();

  if (!user) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <Button
          onClick={() => login('admin@tenant1.com')}
          aria-label="Login as admin"
        >
          Login as Admin
        </Button>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return <div className="p-4">Access Denied</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <p>Welcome, {user.email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
```

**Tech Lead Review**:
- **Tốt**: RBAC đơn giản với `useState`, dễ hiểu.
- **Cải Thiện**: Chuyển sang Zustand/Redux, thêm middleware RBAC trong refactor.

### 5. Shared UI Components
Tạo `packages/ui/src/Button.tsx`:
```typescript
/**
 * Component Button tái sử dụng
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-primary text-white rounded hover:bg-secondary disabled:opacity-50 ${props.className}`}
    />
  );
}
```

Tạo `packages/ui/src/stories/Button.stories.tsx`:
```typescript
import { Button } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click Me',
  },
};
```

**Tech Lead Review**:
- **Tốt**: Button tái sử dụng, tích hợp Storybook.
- **Cải Thiện**: Thêm a11y attributes, theme provider trong refactor.

---

## 🔄 Kế Hoạch Refactor

### Refactor Lần 1: Redux/Zustand, GraphQL, SSR, WASM
- **Mục Tiêu**: Chuyển từ useState sang Redux/Zustand, tích hợp GraphQL, SSR, và WASM.
- **Chi Tiết**:
  - **useReducer/Zustand**: Quản lý auth và analytics state.
  - **Redux Toolkit**: Setup store, RTK Query cho API caching.
  - **GraphQL**: Apollo Client với subscriptions cho real-time analytics.
  - **SSR**: Chuyển TenantDashboard sang server component.
  - **WASM**: Tích hợp Rust module cho analytics processing.
  - **Testing**: Thêm unit tests cho reducers, integration tests cho GraphQL.

**Ví Dụ Zustand**:
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@types/index';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: 'auth-storage' }
  )
);
```

### Refactor Lần 2: Cross-Platform, A11y, Optimization
- **Mục Tiêu**: Tích hợp React Native/Electron, a11y, và tối ưu performance.
- **Chi Tiết**:
  - **useRef, useLayoutEffect**: Xử lý DOM interactions (e.g., focus management).
  - **useTransition, useDeferredValue**: Tối ưu analytics rendering.
  - **Cross-Platform**: Shared components cho mobile/desktop.
  - **A11y**: WCAG 2.1 AA, axe-core tests.
  - **Performance**: Bundle size <1MB, lazy loading MFE.
  - **E2E Testing**: Playwright tests cho dashboard flow.

**Ví Dụ useTransition**:
```typescript
import { useState, useTransition } from 'react';
import { AnalyticsData } from '@types/index';

/**
 * Component analytics với useTransition
 */
export function AnalyticsChart({ data }: { data: AnalyticsData[] }) {
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleFilter = (value: string) => {
    startTransition(() => {
      setFilter(value);
    });
  };

  const filteredData = data.filter((item) =>
    item.metric.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
        placeholder="Filter metrics..."
        className="p-2 border rounded"
      />
      {isPending && <div>Filtering...</div>}
      <div>{filteredData.map((item) => <div key={item.id}>{item.metric}</div>)}</div>
    </div>
  );
}
```

---

## 📚 Kiến Thức Bổ Sung

1. **Micro Frontends**:
   - **Học**: Module Federation, runtime sharing.
   - **Thực Hành**: Tách analytics thành MFE, lazy load.
   - **Đề Tài**: Xây dựng MFE marketplace.

2. **WebAssembly**:
   - **Học**: Rust, wasm-bindgen.
   - **Thực Hành**: WASM module cho sorting analytics.
   - **Đề Tài**: WASM-based image processing.

3. **Cross-Platform**:
   - **Học**: React Native, Electron code sharing.
   - **Thực Hành**: Shared Chart component.
   - **Đề Tài**: Mobile app với offline sync.

4. **A11y & i18n**:
   - **Học**: WCAG, i18next.
   - **Thực Hành**: ARIA roles, RTL support.
   - **Đề Tài**: A11y-compliant form.

5. **Observability**:
   - **Học**: Sentry, OpenTelemetry.
   - **Thực Hành**: Error tracking, performance tracing.
   - **Đề Tài**: Real-time error dashboard.

---

## 📈 Benchmark & Metrics
- **Lighthouse**: LCP <1s, CLS=0, INP <100ms.
- **Apollo DevTools**: Query latency <100ms.
- **Chrome DevTools**: WASM processing <50ms cho 10k records.
- **Code Coverage**: >90% (Jest/Vitest).
- **Bundle Size**: <1MB (Webpack Analyzer).

---

## 🧑‍💼 Góc Nhìn Từ Các Vai Trò

### Business Analyst (BA)
- **User Stories**:
  - **As an admin**, I want to **manage users/roles** to control access.
  - **As a user**, I want to **customize dashboard** to prioritize widgets.
- **MoSCoW**:
  - **Must Have**: Multi-tenant, RBAC, analytics, customization.
  - **Should Have**: Cross-platform, i18n.
  - **Could Have**: Export reports.
  - **Won’t Have**: AI analytics.
- **Thực Hành**: Tạo `docs/backlog.md`, wireframes (Figma).

### Quality Assurance (QA)
- **Test Pyramid**: 60% unit, 25% integration, 15% E2E.
- **Edge Cases**: Role conflicts, offline scenarios.
- **Thực Hành**: Playwright tests, k6 load testing, `docs/test-plan.md`.

### Tech Lead
- **Architecture**: Monorepo, MFE, server components.
- **Code Review**: Check race conditions, type safety.
- **Thực Hành**: `docs/guidelines.md`, PR templates, sprint planning.

---

## 🚀 Hành Động Tiếp Theo
1. **Chạy Project**:
   ```bash
   yarn nx serve web
   ```
2. **Chạy Tests**:
   ```bash
   yarn nx test web
   yarn nx e2e web-e2e
   ```
3. **Refactor**:
   - Lần 1: Redux/Zustand, GraphQL, SSR, WASM.
   - Lần 2: Cross-platform, a11y, optimization.
4. **Deploy**:
   ```bash
   yarn nx deploy web
   ```