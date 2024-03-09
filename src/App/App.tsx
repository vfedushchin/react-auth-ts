import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout/AppLayout'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout/>
    </BrowserRouter>
  )
}
