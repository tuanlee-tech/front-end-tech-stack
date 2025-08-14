## 🚀 Bắt Đầu Coding Dự Án 2: Booking App

### Bước 1: Setup Project với Next.js + TypeScript + Tailwind

Sử dụng **Next.js 15+** với App Router để hỗ trợ SSR/ISR, kết hợp TypeScript, Tailwind CSS, và các dependencies khác. Cấu hình ESLint, Prettier, và GitHub Actions cho CI/CD.

#### Code Setup

```js

# Hướng Dẫn Setup Dự Án Booking App

## 1. Tạo Project với Next.js
Chạy lệnh để tạo project Next.js với TypeScript:

```bash
npx create-next-app@latest booking-app --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
cd booking-app
npm install
```

## 2. Cài Đặt Dependencies
Cài các thư viện cần thiết:

```bash
npm install @tanstack/react-query @apollo/client graphql socket.io-client @hookform/resolvers zod @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled @radix-ui/react-slot @radix-ui/react-select cypress jest ts-jest @testing-library/react @testing-library/jest-dom @axe-core/react
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks prettier husky
```

## 3. Cấu Hình Tailwind CSS
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
    extend: {},
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
```

## 4. Cấu Hình ESLint + Prettier
Tạo `.eslintrc.js`:

```javascript
module.exports = {
  env: { browser: true, es2020: true },
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

## 5. Cấu Hình TypeScript
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

## 6. Cấu Hình Jest
Tạo `jest.config.js`:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};
```

Tạo `src/tests/setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
configure({ testIdAttribute: 'data-testid' });
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
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## 8. Khởi Chạy Project
```bash
npm run dev
```

Mở `http://localhost:3000` để kiểm tra.

```

---

### Bước 2: Tạo Cấu Trúc Thư Mục

Dựa trên cấu trúc feature-based đã đề xuất, tạo các thư mục sau:

```
booking-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── graphql/route.ts
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── bookings/
│   │   │   ├── components/
│   │   │   │   └── BookingForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useBooking.ts
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── middleware.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── EventCard.tsx
│   ├── lib/
│   │   ├── apollo.ts
│   │   ├── redux/
│   │   │   └── store.ts
│   │   └── socket.ts
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
│   ├── tests/
│   │   └── e2e/
│   │       └── booking.spec.ts
│   ├── types/
│   │   └── index.d.ts
├── docs/
│   ├── backlog.md
│   ├── test-plan.md
│   └── guidelines.md
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

### Bước 3: Implement Core Features

Chúng ta sẽ triển khai các feature chính: **Search Events**, **Book Tickets**, và **Real-Time Updates**. Dưới đây là các code snippets chính, tập trung vào **type safety**, **SSR**, và **real-time**.

#### 3.1. GraphQL Setup với Apollo Client

Cấu hình Apollo Client để fetch events và handle mutations/subscriptions.

```js

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql' }),
  cache: new InMemoryCache(),
});

export default client;

```

```js

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    date: String!
    location: String!
    availableTickets: Int!
  }
  type Booking {
    id: ID!
    eventId: ID!
    userId: ID!
    quantity: Int!
  }
  type Query {
    events: [Event!]!
    event(id: ID!): Event
  }
  type Mutation {
    bookTicket(eventId: ID!, quantity: Int!): Booking!
  }
  type Subscription {
    ticketUpdated(eventId: ID!): Event!
  }
`;

const resolvers = {
  Query: {
    events: () => [
      { id: '1', title: 'Concert', date: '2025-09-01', location: 'Hanoi', availableTickets: 100 },
    ],
    event: (_: any, { id }: { id: string }) =>
      ({ id, title: 'Concert', date: '2025-09-01', location: 'Hanoi', availableTickets: 100 }),
  },
  Mutation: {
    bookTicket: (_: any, { eventId, quantity }: { eventId: string; quantity: number }) => ({
      id: 'b1', eventId, userId: 'u1', quantity,
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(server);

```

**Giải Thích**:
- **Apollo Client**: Config client với HTTP link, sẵn sàng thêm subscriptions qua WebSocket.
- **GraphQL Route**: Mock server với schema và resolvers cho events/bookings, dùng `@as-integrations/next` để tích hợp với Next.js.

---

#### 3.2. Search Events với TanStack Query

Tạo hook và component để tìm kiếm events, hỗ trợ infinite scroll.

```js

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  availableTickets: number;
}

export interface EventInput {
  title: string;
  date: string;
  location: string;
  availableTickets: number;
}

```

```js

import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';
import { Event } from '../types';

const GET_EVENTS = gql`
  query GetEvents($offset: Int, $limit: Int) {
    events(offset: $offset, limit: $limit) {
      id
      title
      date
      location
      availableTickets
    }
  }
`;

export function useEvents(pageSize: number = 10) {
  return useInfiniteQuery({
    queryKey: ['events'],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await client.query({
        query: GET_EVENTS,
        variables: { offset: pageParam * pageSize, limit: pageSize },
      });
      return data.events as Event[];
    },
    getNextPageParam: (lastPage, allPages) => (lastPage.length === pageSize ? allPages.length : undefined),
  });
}

```

```js

import { useEvents } from '../hooks/useEvents';
import { EventCard } from '@/components/EventCard';
import { Button } from '@/components/Button';

export function EventList() {
  const { data, fetchNextPage, hasNextPage, isLoading, error } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.pages.flat().map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} className="mt-4">
          Load More
        </Button>
      )}
    </div>
  );
}

```

```js

import { Event } from '@/features/events/types';
import { Button } from './Button';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

export const EventCard = React.memo(({ event }: EventCardProps) => {
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
});

```

**Giải Thích**:
- **useEvents**: Sử dụng `useInfiniteQuery` để fetch events với infinite scroll, tối ưu network calls.
- **EventList**: Render danh sách events, hỗ trợ load more với pagination.
- **EventCard**: Memoized component để giảm re-renders, hiển thị event info và link đến detail page.

---

#### 3.3. Book Tickets với React Hook Form + Zod

Tạo form để book tickets, tích hợp optimistic updates với TanStack Query.

```js

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

const BOOK_TICKET = gql`
  mutation BookTicket($eventId: ID!, $quantity: Int!) {
    bookTicket(eventId: $eventId, quantity: $quantity) {
      id
      eventId
      quantity
    }
  }
`;

const bookingSchema = z.object({
  quantity: z.number().min(1, 'At least 1 ticket required').max(10, 'Max 10 tickets'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  eventId: string;
}

export function BookingForm({ eventId }: BookingFormProps) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const mutation = useMutation({
    mutationFn: async ({ quantity }: BookingFormData) => {
      const { data } = await client.mutate({
        mutation: BOOK_TICKET,
        variables: { eventId, quantity },
      });
      return data.bookTicket;
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['events'] });
      const previousEvents = queryClient.getQueryData(['events']);
      queryClient.setQueryData(['events'], (old: any) => ({
        ...old,
        pages: old.pages.map((page: any) =>
          page.map((event: any) =>
            event.id === eventId
              ? { ...event, availableTickets: event.availableTickets - variables.quantity }
              : event
          )
        ),
      }));
      return { previousEvents };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(['events'], context?.previousEvents);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div>
        <Input
          type="number"
          placeholder="Number of tickets"
          {...register('quantity', { valueAsNumber: true })}
          aria-invalid={errors.quantity ? 'true' : 'false'}
        />
        {errors.quantity && <span className="text-red-500">{errors.quantity.message}</span>}
      </div>
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Booking...' : 'Book Tickets'}
      </Button>
    </form>
  );
}

```

**Giải Thích**:
- **BookingForm**: Dùng React Hook Form + Zod để validate số lượng vé. Tích hợp `useMutation` với optimistic updates để update UI trước khi nhận API response.
- **Optimistic Updates**: Giảm `availableTickets` ngay lập tức, rollback nếu API fail.

---

#### 3.4. Real-Time Updates với Socket.io

Tích hợp Socket.io để cập nhật số vé real-time.

```js

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export function subscribeToTicketUpdates(eventId: string, callback: (data: { eventId: string; availableTickets: number }) => void) {
  socket.on(`ticketUpdated:${eventId}`, callback);
  return () => socket.off(`ticketUpdated:${eventId}`, callback);
}

export default socket;

```

```js

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';
import { subscribeToTicketUpdates } from '@/lib/socket';
import { BookingForm } from '@/features/bookings/components/BookingForm';
import { useQueryClient } from '@tanstack/react-query';

const GET_EVENT = gql`
  query GetEvent($id: ID!) {
    event(id: $id) {
      id
      title
      date
      location
      availableTickets
    }
  }
`;

export function EventDetail() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const { data } = await client.query({
        query: GET_EVENT,
        variables: { id },
      });
      return data.event;
    },
  });

  useEffect(() => {
    const unsubscribe = subscribeToTicketUpdates(id, ({ eventId, availableTickets }) => {
      queryClient.setQueryData(['event', eventId], (old: any) => ({
        ...old,
        availableTickets,
      }));
    });
    return unsubscribe;
  }, [id, queryClient]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p>Date: {new Date(data.date).toLocaleDateString()}</p>
      <p>Location: {data.location}</p>
      <p>Tickets Available: {data.availableTickets}</p>
      <BookingForm eventId={id} />
    </div>
  );
}

```

**Giải Thích**:
- **Socket.io**: Setup client để listen real-time updates (`ticketUpdated` events), tích hợp với TanStack Query để update cache.
- **EventDetail**: Fetch event chi tiết với Apollo, dùng Socket.io để update `availableTickets` real-time.

---

### Bước 4: Setup Redux Toolkit cho State Management

Quản lý global state (e.g., user, theme) với Redux Toolkit.

```js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/auth/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

```

```js

import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: { id: string; email: string } | null;
}

const initialState: UserState = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ id: string; email: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

```

**Giải Thích**:
- **Redux Store**: Config store với `userSlice` để quản lý user state.
- **userSlice**: Định nghĩa actions `login`/`logout` để update user.

---

### Bước 5: Testing với Cypress và Jest

Tạo E2E test với Cypress cho booking flow.

```js

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});

describe('Booking Flow', () => {
  it('should book a ticket successfully', () => {
    cy.visit('/events');
    cy.get('[data-testid="event-card"]').first().click();
    cy.get('input[type="number"]').type('2');
    cy.get('button[type="submit"]').click();
    cy.contains('Booking successful').should('be.visible');
  });
});

```

Tạo unit test cho `EventList`:

```js

import { render, screen } from '@testing-library/react';
import { EventList } from '../components/EventList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';

const queryClient = new QueryClient();

describe('EventList', () => {
  it('renders events correctly', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <EventList />
        </QueryClientProvider>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const event = await screen.findByText('Concert');
    expect(event).toBeInTheDocument();
  });
});

```

**Giải Thích**:
- **Cypress**: E2E test cho booking flow, kiểm tra navigation và form submission.
- **Jest**: Unit test cho `EventList`, đảm bảo render đúng với mock data.

---

### Bước 6: Document và Benchmark

Tạo file backlog với user stories:

```js

# Product Backlog: Booking App

## User Stories
- **As an event goer**, I want to **search events** by keyword, date, or location, so that I can **find events I’m interested in**.
  - **Acceptance Criteria**:
    - Search form with fields for keyword, date, location.
    - Infinite scroll for event list.
    - Latency <100ms for search results.
- **As an event goer**, I want to **book tickets** and see real-time ticket availability, so that I **don’t miss out**.
  - **Acceptance Criteria**:
    - Form to select ticket quantity (1-10).
    - Optimistic UI update for booking.
    - Real-time ticket updates via WebSocket.

## Prioritization (MoSCoW)
- **Must Have**: Search events, book tickets, real-time updates.
- **Should Have**: Responsive UI, dark mode.
- **Could Have**: User dashboard for booking history.
- **Won’t Have**: Admin panel (for now).

```

**Benchmark**:
- Dùng Apollo DevTools để đo query latency (<100ms).
- Lighthouse để check Web Vitals (LCP <1s, CLS=0).
- Chrome Network tab để đo TTFB (<500ms).

---

### Bước 7: Tiếp Theo

Bạn đã có setup cơ bản và code cho **Search Events**, **Book Tickets**, **Real-Time Updates**, cùng cấu trúc Redux và testing. Để tiếp tục:
1. **Refactor Lần 1**: Thêm GraphQL subscriptions và dataloader để tối ưu queries.
2. **Thêm Features**: User dashboard, dark mode, i18n.
3. **Testing**: Tăng coverage >85% với Jest + Cypress, thêm a11y tests (`axe-core`).
4. **Deploy**: Setup Docker và deploy lên Vercel (`vercel --prod`).

**Hành Động Ngay**:
- Chạy `npm run dev` và kiểm tra UI tại `http://localhost:3000`.
- Test GraphQL API với `/api/graphql` trong GraphiQL.
- Chạy tests: `npm test` và `npx cypress run`.