import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout/AppLayout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const App: React.FC = () => {
  

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppLayout/>
        </QueryClientProvider>
    </BrowserRouter>
  )
}
