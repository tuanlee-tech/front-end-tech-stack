import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router/routes";

/*
* Set defaultOptions cho queryClient. 
* Có thể overwrite thông số lại trong các useQuery nếu cần
*/
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Giảm thời gian lưu cache nếu không cần thiết
      staleTime: 1000 * 60 * 5, // 5 phút
      gcTime: 1000 * 60 * 10, // cacheTime ~ gcTime  10 phút
      // Tắt retry cho các query không quan trọng
      retry: false,
      // Tắt refetch khi window focus để giảm tải API
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
