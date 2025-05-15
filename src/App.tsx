import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"
import { ToastContainer } from "react-toastify"
import { router } from "./router/router"
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Global Loading...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </QueryClientProvider>
  )
}

export default App
