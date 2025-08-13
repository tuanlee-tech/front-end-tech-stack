Chúng ta sẽ setup project với **monorepo (Nx)**, triển khai các feature chính (multi-tenant dashboard, RBAC, analytics, customization), đảm bảo code modular, type-safe, và enterprise-grade. Tôi sẽ cung cấp code snippets cụ thể và giải thích từng bước.

---

## 🚀 Bắt Đầu Coding Dự Án 3: SaaS Dashboard

### Bước 1: Setup Project với Nx Monorepo + Next.js + TypeScript

Sử dụng **Nx** để quản lý monorepo, hỗ trợ **Next.js (web)**, **React Native (mobile)**, và **Electron (desktop)**. Tích hợp Tailwind CSS, Storybook, và CI/CD với GitHub Actions.

#### Code Setup

<xaiArtifact artifact_id="1cb2e8b1-245c-46c9-91f2-fe0524bf08e7" artifact_version_id="eb2d3798-fcc9-4ad9-b064-e639e8caceb4" title="setup-instructions.md" contentType="text/markdown">

# Hướng Dẫn Setup Dự Án SaaS Dashboard

## 1. Tạo Monorepo với Nx
Chạy lệnh để tạo Nx workspace:

```bash
npx create-nx-workspace@latest saas-dashboard --preset=react --appName=web --style=css
cd saas-dashboard
```

Chọn **TypeScript**, **React (Next.js)**, và **CSS** khi được hỏi.

## 2. Cài Đặt Dependencies
Cài các thư viện cần thiết:

```bash
npm install @tanstack/react-query @apollo/client graphql zustand @reduxjs/toolkit react-redux @radix-ui/react-slot @radix-ui/react-select @storybook/react @storybook/addon-essentials chromatic @opentelemetry/api @opentelemetry/sdk-trace-web sentry/nextjs react-native electron @playwright/test jest vitest ts-jest @testing-library/react @testing-library/jest-dom @axe-core/react pact
npm install -D @nx/next @nx/react-native @nx/electron @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks prettier husky tailwindcss postcss autoprefixer
```

## 3. Cấu Hình Tailwind CSS
Khởi tạo Tailwind trong `apps/web`:

```bash
npx tailwindcss init -p
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
    extend: {},
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
```

## 4. Cấu Hình ESLint + Prettier
Tạo `.eslintrc.json` tại root:

```json
{
  "env": { "browser": true, "es2020": true },
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
    "@typescript-eslint/explicit-module-boundary-types": "off"
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

## 5. Cấu Hình TypeScript
Cập nhật `tsconfig.json` tại root:

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
      "@types/*": ["packages/types/src/*"]
    }
  },
  "include": ["apps/**/*", "packages/**/*"],
  "exclude": ["node_modules"]
}
```

## 6. Cấu Hình Storybook
Tạo Storybook trong `packages/ui`:

```bash
npx nx g @nx/react:storybook-configuration ui
```

## 7. Cấu Hình GitHub Actions
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
          cache: 'npm'
      - run: npm ci
      - run: npx nx affected --target=lint
      - run: npx nx affected --target=test
      - run: npx nx affected --target=build
```

## 8. Khởi Chạy Project
Chạy web app:

```bash
npx nx serve web
```

Mở `http://localhost:4200` để kiểm tra.

</xaiArtifact>

---

### Bước 2: Tạo Cấu Trúc Thư Mục

Dựa trên cấu trúc monorepo đã đề xuất:

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
│   └── test-plan.md
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── nx.json
├── tsconfig.json
└── package.json
```

---

### Bước 3: Implement Core Features

Triển khai các feature chính: **Multi-Tenant Dashboard**, **RBAC**, **Analytics**, và **Customization**. Code sẽ tập trung vào **type safety**, **Micro Frontends**, và **observability**.

#### 3.1. Multi-Tenant Dashboard với Module Federation

Setup Module Federation để tách `dashboard` và `analytics` thành Micro Frontends.

```js

const { withNx } = require('@nx/next/plugins/with-nx');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = withNx({
  webpack: (config) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'web',
        remotes: {
          analytics: 'analytics@http://localhost:4201/remoteEntry.js',
        },
        shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
      })
    );
    return config;
  },
});

```

```js

const { withNx } = require('@nx/next/plugins/with-nx');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = withNx({
  webpack: (config) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'analytics',
        filename: 'remoteEntry.js',
        exposes: {
          './Chart': './app/analytics/charts/page.tsx',
        },
        shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
      })
    );
    return config;
  },
});
```

```js

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Chart = dynamic(() => import('analytics/Chart'), { ssr: false });

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <Chart />
      </Suspense>
    </div>
  );
}

```

**Giải Thích**:
- **Module Federation**: Tách `analytics` thành remote module, load dynamic trong `web` app.
- **Next.js Config**: Config Webpack để expose `Chart` từ `analytics` và consume trong `web`.
- **Dynamic Import**: Dùng `next/dynamic` để lazy load Micro Frontend, giảm initial load.

---

#### 3.2. RBAC với Middleware và Zustand

Triển khai Role-Based Access Control, lưu user roles trong Zustand.

```js

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

```

```js

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

```js

import { NextRequest, NextResponse } from 'next/server';
import { useAuthStore } from '@/lib/zustand';

export function middleware(request: NextRequest) {
  const user = useAuthStore.getState().user;
  const { pathname } = request.nextUrl;

  if (!user && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (user?.role !== 'admin' && pathname.startsWith('/users')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/users/:path*'],
};

```

**Giải Thích**:
- **Zustand**: Quản lý user state với persist middleware để lưu vào local storage.
- **Middleware**: Kiểm tra quyền truy cập dựa trên role, redirect nếu không đủ quyền.
- **Types**: Định nghĩa types cho `User`, `Tenant`, `AnalyticsData` để đảm bảo type safety.

---

#### 3.3. Analytics với WebAssembly và GraphQL

Tích hợp WebAssembly (Rust) để xử lý analytics và GraphQL cho data fetching.

```js

import init, { processAnalytics } from './analytics.wasm';

export async function computeAnalytics(data: number[]): Promise<number[]> {
  await init();
  return processAnalytics(data);
}

```

```js

export function normalizeAnalytics(data: number[]): number[] {
  const max = Math.max(...data);
  return data.map((value) => (value / max) * 100);
}

```

```js

import { useQuery } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';
import { computeAnalytics } from '@/lib/wasm';
import { normalizeAnalytics } from '@utils/analytics';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const GET_ANALYTICS = gql`
  query GetAnalytics($tenantId: ID!) {
    analytics(tenantId: $tenantId) {
      id
      metric
      value
    }
  }
`;

export default function Chart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const { data } = await client.query({
        query: GET_ANALYTICS,
        variables: { tenantId: 't1' },
      });
      const values = data.analytics.map((item: any) => item.value);
      const normalized = normalizeAnalytics(values);
      const computed = await computeAnalytics(normalized);
      return computed;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData = {
    labels: data.map((_: any, index: number) => `Point ${index + 1}`),
    datasets: [{ label: 'Analytics', data, borderColor: '#007bff', fill: false }],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Analytics Chart</h2>
      <Line data={chartData} />
    </div>
  );
}

```

**Giải Thích**:
- **WebAssembly**: Mock WASM module để xử lý analytics data (thực tế cần Rust code và `wasm-bindgen`).
- **GraphQL Query**: Fetch analytics data với Apollo, normalize và process qua WASM.
- **Chart**: Dùng `react-chartjs-2` để render biểu đồ, tích hợp với WASM output.

---

#### 3.4. Customization với Drag-and-Drop Widgets

Tích hợp drag-and-drop để tùy chỉnh dashboard widgets.

```js

import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useAuthStore } from '@/lib/zustand';

interface Widget {
  id: string;
  content: string;
}

export default function WidgetsPage() {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: '1', content: 'Widget 1' },
    { id: '2', content: 'Widget 2' },
  ]);

  const moveWidget = (fromIndex: number, toIndex: number) => {
    const updated = [...widgets];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setWidgets(updated);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <h2 className="text-xl font-bold">Customizable Widgets</h2>
        {widgets.map((widget, index) => (
          <WidgetItem key={widget.id} widget={widget} index={index} moveWidget={moveWidget} />
        ))}
      </div>
    </DndProvider>
  );
}

interface WidgetItemProps {
  widget: Widget;
  index: number;
  moveWidget: (from: number, to: number) => void;
}

function WidgetItem({ widget, index, moveWidget }: WidgetItemProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'widget',
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: 'widget',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveWidget(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-4 border rounded mb-2 ${isDragging ? 'opacity-50' : ''}`}
    >
      {widget.content}
    </div>
  );
}

```

**Giải Thích**:
- **Drag-and-Drop**: Sử dụng `react-dnd` để cho phép sắp xếp lại widgets.
- **Zustand**: Lưu widget configs (mock ở đây, thực tế cần persist vào storage hoặc API).
- **Type Safety**: Định nghĩa `Widget` interface để đảm bảo type correctness.

---

### Bước 4: Testing với Playwright và Jest

Tạo E2E test với Playwright cho dashboard flow.

```js

import { test, expect } from '@playwright/test';

test('Dashboard navigation and RBAC', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('text=Dashboard')).toBeVisible();

  await page.goto('/users');
  await expect(page).toHaveURL('/dashboard'); // Redirect if not admin
});

```
Tạo unit test cho `Chart`:

```js

import { render, screen } from '@testing-library/react';
import Chart from '../charts/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

describe('Chart', () => {
  it('renders analytics chart', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Chart />
      </QueryClientProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const chartTitle = await screen.findByText('Analytics Chart');
    expect(chartTitle).toBeInTheDocument();
  });
});

```
**Giải Thích**:
- **Playwright**: E2E test kiểm tra navigation và RBAC redirect.
- **Jest**: Unit test cho `Chart`, đảm bảo render đúng với mock data.

---

### Bước 5: Document và Benchmark

Tạo file backlog với user stories:

```
# Product Backlog: SaaS Dashboard

## User Stories
- **As an admin**, I want to **manage users and roles**, so that I can **control access** to the dashboard.
  - **Acceptance Criteria**:
    - CRUD operations for users/roles.
    - RBAC enforced via middleware.
    - Audit logs for actions.
- **As a user**, I want to **customize my dashboard**, so that I can **prioritize widgets**.
  - **Acceptance Criteria**:
    - Drag-and-drop widget reordering.
    - Persist widget configs.
    - Latency <100ms for updates.
- **As a tenant**, I want **isolated analytics**, so that my data **remains private**.
  - **Acceptance Criteria**:
    - Data segmented by tenantId.
    - Real-time analytics updates via GraphQL subscriptions.
    - WASM for high-performance processing.

## Prioritization (MoSCoW)
- **Must Have**: Multi-tenant, RBAC, analytics, customization.
- **Should Have**: Cross-platform (mobile/desktop), i18n.
- **Could Have**: Export reports (CSV/JSON).
- **Won’t Have**: Advanced AI analytics (for now).

```

**Benchmark**:
- Lighthouse: LCP <1s, CLS=0, INP <100ms.
- Apollo DevTools: Query latency <100ms.
- Chrome DevTools: WASM processing <50ms cho 10k records.

---

### Bước 6: Tiếp Theo

Bạn đã có setup monorepo và code cho **Multi-Tenant Dashboard**, **RBAC**, **Analytics**, và **Customization**. Để tiếp tục:
1. **Refactor Lần 1**: Tích hợp GraphQL subscriptions, dataloader, và optimize WASM.
2. **Thêm Features**: Cross-platform (React Native/Electron), i18n, export reports.
3. **Testing**: Tăng coverage >90% với Jest + Playwright, thêm a11y tests (`axe-core`).
4. **Deploy**: Setup Docker và deploy lên Vercel (`nx run web:deploy`).

**Hành Động Ngay**:
- Chạy `npx nx serve web` và kiểm tra UI tại `http://localhost:4200`.
- Test GraphQL API với `/api/graphql` trong GraphiQL.
- Chạy tests: `npx nx test web` và `npx playwright test`.