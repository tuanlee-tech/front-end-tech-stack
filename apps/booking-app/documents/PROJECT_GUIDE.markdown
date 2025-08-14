# Hướng Dẫn Dự Án Booking App

Chào mừng bạn đến với **Booking App**, một dự án thực hành frontend từ trung cấp đến nâng cao, giúp bạn master React, Next.js, TypeScript, và các kỹ năng production-ready! Ứng dụng này cho phép người dùng tìm kiếm sự kiện, đặt vé, và nhận cập nhật trạng thái vé theo thời gian thực (real-time). Dự án tập trung vào **async data handling**, **real-time updates**, và **scalability**, với mục tiêu xây dựng một ứng dụng **performant**, **secure**, và **deployable**.

Phiên bản đầu tiên sử dụng **useState** và client-side rendering (CSR) để giữ code đơn giản, dễ học. Các lần refactor sau sẽ tích hợp các Hooks nâng cao, Redux, GraphQL, server components, và testing toàn diện để lấp đầy kiến thức và nâng cao kỹ năng. Qua 2 lần refactor, bạn sẽ học từ cơ bản đến chuyên nghiệp, không giới hạn bởi phạm vi dự án.

## 🚀 Tổng Quan Dự Án

Booking App là một ứng dụng web cho phép người dùng tìm kiếm sự kiện (ví dụ: concert, hội thảo), đặt vé, và theo dõi số vé còn lại theo thời gian thực. Đây là dự án lý tưởng để học cách xây dựng ứng dụng full-stack frontend với:

- **Hiệu Suất Cao**: Tối ưu latency <100ms cho queries, TTFB <500ms, bundle size <500KB.
- **Code Sạch**: Modular, reusable, tuân thủ ESLint/Prettier/Husky, code coverage >85%.
- **Thân Thiện Với Người Dùng**: Responsive, dark mode, loading skeletons, và a11y (accessibility).

### Tính Năng Chính
- **Search Events**: Tìm kiếm sự kiện theo từ khóa, ngày, vị trí; hiển thị danh sách với infinite scrolling.
- **Book Tickets**: Chọn số lượng vé, điền thông tin cá nhân, hỗ trợ optimistic updates.
- **Real-Time Updates**: Cập nhật số vé còn lại qua WebSocket, thông báo khi hết vé.
- **User Features**: Đăng nhập/đăng xuất (local storage, mở rộng sang NextAuth), dashboard lịch sử đặt vé.
- **Admin Basics**: Mock admin panel để quản lý sự kiện (CRUD).
- **UI/UX**: Responsive, custom themes, loading skeletons cho SSR.

### Mục Tiêu Học Tập
- **React & Next.js**: Thành thạo concurrent rendering, server components, SSR/SSG/ISR, và App Router.
- **TypeScript**: Sử dụng discriminated unions, generics, và type-safe queries với Zod/GraphQL Codegen.
- **State Management**: Học Redux Toolkit, RTK Query, và TanStack Query cho state phức tạp.
- **Data Fetching**: Làm việc với GraphQL (queries/mutations/subscriptions) và REST, tối ưu với dataloader.
- **Real-Time**: Triển khai WebSocket với Socket.io, xử lý reconnection logic.
- **Testing**: Xây dựng test pyramid (unit, integration, E2E) với Jest, React Testing Library, và Cypress.
- **DevOps**: Container hóa với Docker, deploy lên Vercel, setup CI/CD với GitHub Actions.

### Tech Stack (Cập Nhật 14/08/2025)
Dựa trên trends frontend 2025, sử dụng các phiên bản mới nhất:
- **React 19+**: Concurrent rendering, improved Suspense.
- **Next.js 15+**: App Router, edge runtime, server components.
- **TypeScript 5.6+**: Discriminated unions, schema inference.
- **Redux Toolkit 2.2+**: RTK Query, Redux Thunk/Saga.
- **TanStack Query 5+**: Data fetching, caching, infinite scroll.
- **GraphQL (Apollo Client 3.9+)**: Queries, mutations, subscriptions.
- **Tailwind CSS 4+ & shadcn/ui**: Responsive UI, custom themes.
- **Socket.io 5+**: Real-time updates.
- **Jest 30+, React Testing Library 16+, Cypress 14+**: Unit + E2E testing.
- **Docker**: Containerization cho staging.
- **Vercel**: Deployment với previews.
- **GitHub Actions**: CI/CD pipelines.

### Kế Hoạch Thực Hiện
- **Thời Gian**: 8-10 tuần, chia thành:
  - **Tuần 1-3**: Setup project, xây dựng core features (Search Events, Book Tickets) với useState, CSR.
  - **Tuần 4-6**: Refactor lần 1 (thêm GraphQL, WebSocket, Redux, SSR).
  - **Tuần 7-8**: Refactor lần 2 (tối ưu performance, thêm E2E tests, a11y).
  - **Tuần 9-10**: Hoàn thiện, deploy lên Vercel, tích hợp góc nhìn BA/QA/Tech Lead.
- **Refactor**: 2 lần:
  - **Lần 1**: Chuyển sang useReducer, Redux, GraphQL subscriptions, và SSR.
  - **Lần 2**: Tối ưu với dataloader, E2E tests, a11y, và bundle size.
- **Kết Quả**: Deploy ứng dụng lên Vercel, đạt latency <100ms, code coverage >85%, CLS=0.

---

## 🛠 Setup Dự Án

Dưới đây là hướng dẫn chi tiết để setup môi trường phát triển với các công cụ mới nhất (tính đến 14/08/2025).

### Bước 1: Tạo Project với Next.js
Chạy lệnh để tạo project với TypeScript, Tailwind, và ESLint:

```bash
npx create-next-app@15.0.0 booking-app --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
cd booking-app
npm install
```

### Bước 2: Cài Đặt Dependencies
Cài các thư viện cần thiết:

```bash
npm install @tanstack/react-query@5.0.0 @apollo/client@3.9.0 graphql@16.8.1 socket.io-client@5.0.0 @hookform/resolvers@3.3.2 zod@3.22.4 @reduxjs/toolkit@2.2.0 react-redux@9.0.0 @mui/material@6.0.0 @emotion/react@11.11.1 @emotion/styled@11.11.0 @radix-ui/react-slot@1.0.2 @radix-ui/react-select@2.0.0 cypress@14.0.0 jest@30.0.0 ts-jest@30.0.0 @testing-library/react@16.0.0 @testing-library/jest-dom@6.1.0 @axe-core/react@4.8.2
npm install -D @typescript-eslint/eslint-plugin@6.7.4 @typescript-eslint/parser@6.7.4 eslint-plugin-react@7.33.2 eslint-plugin-react-hooks@4.6.0 prettier@3.0.3 husky@9.0.0
```

**Dependencies (Production)**:
- `@tanstack/react-query`: Data fetching và caching.
- `@apollo/client`, `graphql`: GraphQL queries/mutations/subscriptions.
- `socket.io-client`: Real-time updates.
- `@hookform/resolvers`, `zod`: Form validation.
- `@reduxjs/toolkit`, `react-redux`: State management.
- `@mui/material`, `@emotion/react`, `@emotion/styled`: UI components.
- `@radix-ui/react-slot`, `@radix-ui/react-select`: Headless UI.
- `cypress`, `jest`, `ts-jest`, `@testing-library/react`, `@testing-library/jest-dom`: Testing.
- `@axe-core/react`: Accessibility testing.

**DevDependencies**:
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: TypeScript linting.
- `eslint-plugin-react`, `eslint-plugin-react-hooks`: React linting.
- `prettier`, `husky`: Code formatting và pre-commit hooks.

### Bước 3: Cấu Hình Tailwind CSS
Cập nhật `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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

Cập nhật `src/app/globals.css`:

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
Tạo `.eslintrc.js`:

```javascript
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
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

Cấu hình Husky cho pre-commit:

```bash
npx husky-init && npm install
echo "npm run lint && npm run test" > .husky/pre-commit
```

### Bước 5: Cấu Hình TypeScript
Cập nhật `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Bước 6: Cấu Hình Jest
Tạo `jest.config.js`:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

Tạo `src/tests/setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
configure({ testIdAttribute: 'data-testid' });
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
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

### Bước 8: Khởi Chạy Project
```bash
npm run dev
```

Mở `http://localhost:3000` để kiểm tra.

---

## 📂 Cấu Trúc Thư Mục

Cấu trúc feature-based, hỗ trợ refactor qua các phiên bản (`src-initial`, `src-refactor1`, `src-refactor2`):

```
booking-app/
├── src-initial/             # Phiên bản đầu (useState, CSR)
│   ├── app/
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── bookings/
│   │   │   ├── components/
│   │   │   │   └── BookingForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useBooking.ts
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── EventCard.tsx
│   ├── features/
│   │   ├── events/
│   │   │   ├── components/
│   │   │   │   ├── EventList.tsx
│   │   │   │   └── EventSearch.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useEvents.ts
│   │   │   └── types.ts
│   │   ├── bookings/
│   │   │   ├── components/
│   │   │   │   └── BookingForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useBooking.ts
│   │   │   └── types.ts
│   ├── types/
│   │   └── index.d.ts
├── src-refactor1/           # Refactor lần 1 (Redux, GraphQL, SSR)
├── src-refactor2/           # Refactor lần 2 (Dataloader, E2E, a11y)
├── tests/
│   └── e2e/
│       └── booking.spec.ts
├── docs/
│   ├── backlog.md
│   ├── test-plan.md
│   ├── guidelines.md
│   └── patterns.md
├── .github/workflows/
│   └── ci.yml
├── Dockerfile
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

**Lý Do Scalable**: Feature-based, App Router hỗ trợ parallel routes, dễ mở rộng sang monorepo.

---

## 💻 Code Mẫu (Phiên Bản Đầu Tiên)

Phiên bản đầu tiên sử dụng **useState**, **CSR**, và **fetch API** để đơn giản, dễ học. Code tập trung vào **Search Events** và **Book Tickets**, với mock API (MSW).

### 1. Types
Tạo `src-initial/types/index.d.ts`:

```typescript
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  availableTickets: number;
}

export interface Booking {
  id: string;
  eventId: string;
  userId: string;
  quantity: number;
}
```

**Tech Lead Review**:
- **Tốt**: Types rõ ràng, sử dụng `interface` để dễ mở rộng.
- **Cải Thiện**: Thêm discriminated unions cho `Event` (e.g., `type: 'concert' | 'workshop'`) trong refactor.

### 2. Mock API với MSW
Tạo `src-initial/mocks/handlers.ts`:

```typescript
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/events', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          title: 'Concert 2025',
          date: '2025-09-01',
          location: 'Hanoi',
          availableTickets: 100,
        },
      ])
    );
  }),
  rest.post('/api/bookings', async (req, res, ctx) => {
    const { eventId, quantity } = await req.json();
    return res(
      ctx.json({
        id: 'b1',
        eventId,
        userId: 'u1',
        quantity,
      })
    );
  }),
];
```

Tạo `src-initial/mocks/browser.ts`:

```typescript
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

Khởi động MSW trong `src-initial/app/layout.tsx`:

```typescript
'use client';

import { useEffect } from 'react';
import '../app/globals.css';

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
- **Tốt**: MSW mô phỏng API thực tế, dễ chuyển sang backend thật.
- **Cải Thiện**: Thêm mock cho WebSocket trong refactor để test real-time.

### 3. Search Events với useState
Tạo `src-initial/features/events/hooks/useEvents.ts`:

```typescript
import { useState, useEffect } from 'react';
import { Event } from '@/types';

/**
 * Hook để fetch danh sách sự kiện
 * @returns {events, isLoading, error}
 */
export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError('Failed to fetch events');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return { events, isLoading, error };
}
```

Tạo `src-initial/features/events/components/EventList.tsx`:

```typescript
import { useEvents } from '../hooks/useEvents';
import { EventCard } from '@/components/EventCard';

/**
 * Component hiển thị danh sách sự kiện
 */
export function EventList() {
  const { events, isLoading, error } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
```

Tạo `src-initial/components/EventCard.tsx`:

```typescript
import { Event } from '@/types';
import { Button } from './Button';
import Link from 'next/link';

/**
 * Component hiển thị thông tin sự kiện
 * @param {Event} event - Thông tin sự kiện
 */
export const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white dark:bg-gray-800">
      <h3 className="font-bold">{event.title}</h3>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Tickets Available: {event.availableTickets}</p>
      <Link href={`/events/${event.id}`}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};
```

**Tech Lead Review**:
- **Tốt**: Code đơn giản, dễ hiểu, sử dụng `useState` và `fetch` cho phiên bản đầu.
- **Cải Thiện**: Thêm memoization (`React.memo`) để tối ưu render, chuyển sang TanStack Query trong refactor.

### 4. Book Tickets với useState
Tạo `src-initial/features/bookings/hooks/useBooking.ts`:

```typescript
import { useState } from 'react';
import { Booking } from '@/types';

/**
 * Hook để xử lý đặt vé
 * @param {string} eventId - ID sự kiện
 * @returns {bookTicket, isLoading, error}
 */
export function useBooking(eventId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookTicket = async (quantity: number) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId, quantity }),
      });
      const data: Booking = await res.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setError('Failed to book ticket');
      setIsLoading(false);
      throw err;
    }
  };

  return { bookTicket, isLoading, error };
}
```

Tạo `src-initial/features/bookings/components/BookingForm.tsx`:

```typescript
import { useState } from 'react';
import { useBooking } from '../hooks/useBooking';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

/**
 * Form để đặt vé
 * @param {string} eventId - ID sự kiện
 */
export function BookingForm({ eventId }: { eventId: string }) {
  const [quantity, setQuantity] = useState('');
  const { bookTicket, isLoading, error } = useBooking(eventId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const qty = parseInt(quantity);
    if (qty < 1 || qty > 10) {
      alert('Please enter a quantity between 1 and 10');
      return;
    }
    try {
      await bookTicket(qty);
      alert('Booking successful!');
      setQuantity('');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <div>
        <Input
          type="number"
          placeholder="Number of tickets"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          aria-label="Ticket quantity"
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Booking...' : 'Book Tickets'}
      </Button>
    </form>
  );
}
```

**Tech Lead Review**:
- **Tốt**: Form đơn giản, xử lý lỗi cơ bản, dễ hiểu cho người mới.
- **Cải Thiện**: Thêm validation với Zod, tích hợp React Hook Form, và optimistic updates trong refactor.

### 5. Shared Components
Tạo `src-initial/components/Button.tsx`:

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

Tạo `src-initial/components/Input.tsx`:

```typescript
/**
 * Component Input tái sử dụng
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 */
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary ${props.className}`}
    />
  );
}
```

**Tech Lead Review**:
- **Tốt**: Components tái sử dụng, hỗ trợ Tailwind cho styling.
- **Cải Thiện**: Thêm a11y attributes (aria-label, role) và theme provider trong refactor.

---

## 🔄 Kế Hoạch Refactor

Dự án được thiết kế để refactor 2 lần, giúp bạn học từ cơ bản đến nâng cao:

### Refactor Lần 1: Tích Hợp Redux, GraphQL, SSR
- **Mục Tiêu**: Chuyển từ useState sang useReducer/Redux, thêm GraphQL, và chuyển sang SSR.
- **Chi Tiết**:
  - **useReducer**: Quản lý state phức tạp cho events/bookings (ví dụ: reducer với actions `FETCH_EVENTS`, `BOOK_TICKET`).
  - **Redux Toolkit**: Setup store, slices cho events, bookings, và user. Sử dụng RTK Query để fetch data.
  - **GraphQL**: Tích hợp Apollo Client, chuyển API sang queries/mutations/subscriptions.
  - **SSR**: Chuyển EventList sang server component, dùng `getServerSideProps` hoặc App Router’s server rendering.
  - **WebSocket**: Thêm Socket.io để cập nhật real-time số vé còn lại.
  - **Testing**: Thêm unit tests cho reducers và integration tests cho GraphQL.

**Ví Dụ useReducer**:
```typescript
interface EventState {
  events: Event[];
  isLoading: boolean;
  error: string | null;
}

type EventAction =
  | { type: 'FETCH_EVENTS_START' }
  | { type: 'FETCH_EVENTS_SUCCESS'; payload: Event[] }
  | { type: 'FETCH_EVENTS_ERROR'; payload: string };

const initialState: EventState = { events: [], isLoading: false, error: null };

function eventReducer(state: EventState, action: EventAction): EventState {
  switch (action.type) {
    case 'FETCH_EVENTS_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_EVENTS_SUCCESS':
      return { ...state, isLoading: false, events: action.payload };
    case 'FETCH_EVENTS_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
```

**Tech Lead Review**:
- **Lợi Ích**: useReducer cung cấp state logic rõ ràng, dễ mở rộng sang Redux.
- **Lưu Ý**: Kết hợp với RTK Query để giảm boilerplate trong refactor.

### Refactor Lần 2: Tối Ưu Performance, E2E Testing, A11y
- **Mục Tiêu**: Tối ưu performance, thêm E2E tests, và đảm bảo accessibility.
- **Chi Tiết**:
  - **useRef, useLayoutEffect**: Sử dụng `useRef` để lưu DOM references (ví dụ: focus input sau submit), `useLayoutEffect` để xử lý side-effects liên quan đến DOM.
  - **useImperativeHandle, useId**: Tích hợp `useImperativeHandle` cho custom form controls, `useId` cho accessible form labels.
  - **useTransition, useDeferredValue**: Tối ưu search với `useTransition` để xử lý state updates mượt mà, `useDeferredValue` cho debounced search.
  - **useDebugValue**: Thêm debug info cho custom hooks (ví dụ: `useEvents`).
  - **Dataloader**: Tích hợp GraphQL dataloader để tránh N+1 queries.
  - **E2E Testing**: Viết Cypress tests cho booking flow và real-time updates.
  - **A11y**: Thêm `axe-core` để kiểm tra accessibility, đảm bảo ARIA roles.
  - **Performance**: Tối ưu bundle size (<500KB) với code splitting, lazy loading.

**Ví Dụ useTransition**:
```typescript
import { useState, useTransition } from 'react';
import { useEvents } from '../hooks/useEvents';

/**
 * Component tìm kiếm sự kiện với useTransition
 */
export function EventSearch() {
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();
  const { events } = useEvents(search);

  const handleSearch = (value: string) => {
    startTransition(() => {
      setSearch(value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search events..."
        className="p-2 border rounded"
      />
      {isPending && <div>Searching...</div>}
      <div>{events.map((event) => <EventCard key={event.id} event={event} />)}</div>
    </div>
  );
}
```

**Tech Lead Review**:
- **Lợi Ích**: `useTransition` giúp UX mượt mà khi search, giảm lag.
- **Lưu Ý**: Kết hợp `useDeferredValue` để tối ưu search với dữ liệu lớn.

---

## 📚 Kiến Thức Còn Thiếu & Gợi Ý Học Thêm

Dưới đây là các chủ đề nâng cao để lấp đầy kiến thức:

1. **Server-Side Rendering (SSR/SSG/ISR)**:
   - **Học**: Cách Next.js xử lý hybrid rendering, khi nào dùng SSG vs ISR.
   - **Thực Hành**: Tạo page SSG cho event list, ISR cho event detail.
   - **Đề Tài**: Xây dựng blog page với SSG, đo TTFB.

2. **Advanced State Management**:
   - **Học**: Redux Persist cho offline support, RTK Query caching strategies.
   - **Thực Hành**: Persist user state, cache events với RTK Query.
   - **Đề Tài**: Xây dựng offline-first todo app.

3. **Animations**:
   - **Học**: Framer Motion cho micro-interactions.
   - **Thực Hành**: Thêm animation cho EventCard (scale on hover).
   - **Đề Tài**: Tạo carousel với Framer Motion.

4. **Accessibility (A11y)**:
   - **Học**: ARIA roles, keyboard navigation.
   - **Thực Hành**: Thêm ARIA labels cho BookingForm, test với `axe-core`.
   - **Đề Tài**: Xây dựng a11y-compliant modal component.

5. **Performance Optimization**:
   - **Học**: Code splitting, lazy loading, tree shaking.
   - **Thực Hành**: Lazy load EventList, đo bundle size với Webpack Analyzer.
   - **Đề Tài**: Tối ưu app có >1000 components.

6. **Micro-Frontends**:
   - **Học**: Module Federation cho scalable apps.
   - **Thực Hành**: Tách admin panel thành micro-frontend.
   - **Đề Tài**: Xây dựng monorepo với Nx.

---

## 📈 Benchmark & Metrics

- **Latency**: Query latency <100ms (đo với Apollo DevTools).
- **Web Vitals**: LCP <1s, CLS=0 (đo với Lighthouse).
- **Bundle Size**: <500KB sau code splitting (đo với Webpack Analyzer).
- **Code Coverage**: >85% (đo với Jest).
- **TTFB**: <500ms (đo với Chrome Network tab).

---

## 🧑‍💼 Góc Nhìn Từ Các Vai Trò

### Business Analyst (BA)
- **User Stories**:
  - **As an event goer**, I want to **search events** by keyword, date, or location, so that I can **find events I’m interested in**.
  - **As an event goer**, I want to **book tickets** and see real-time availability, so that I **don’t miss out**.
- **MoSCoW**:
  - **Must Have**: Search events, book tickets, real-time updates.
  - **Should Have**: Responsive UI, dark mode.
  - **Could Have**: User dashboard.
  - **Won’t Have**: Full admin panel.
- **Thực Hành**: Tạo `docs/backlog.md` với user stories, wireframes với Figma.

### Quality Assurance (QA)
- **Test Pyramid**:
  - **Unit Tests**: Test reducers, hooks với Jest.
  - **Integration Tests**: Test GraphQL queries/mutations.
  - **E2E Tests**: Test booking flow với Cypress.
- **Edge Cases**: Network failures, concurrent bookings.
- **Thực Hành**: Tạo `docs/test-plan.md`, chạy load testing với Artillery.

### Tech Lead
- **Architecture**: Next.js App Router, feature-based structure.
- **Code Review**: Kiểm tra race conditions trong real-time updates, đảm bảo type safety.
- **Thực Hành**: Tạo `docs/guidelines.md` cho naming conventions, git workflow.

---

## 🚀 Hành Động Tiếp Theo

1. **Chạy Project**:
   ```bash
   npm run dev
   ```
   Mở `http://localhost:3000` để kiểm tra.

2. **Chạy Tests**:
   ```bash
   npm test
   npx cypress run
   ```

3. **Refactor**:
   - **Lần 1**: Tích hợp Redux, GraphQL, SSR.
   - **Lần 2**: Tối ưu performance, thêm E2E tests, a11y.

4. **Deploy**:
   ```bash
   vercel --prod
   ```

5. **Học Thêm**:
   - Thực hành các đề tài trong phần “Kiến Thức Còn Thiếu”.
   - Đọc tài liệu Next.js, Redux Toolkit, và GraphQL.

---