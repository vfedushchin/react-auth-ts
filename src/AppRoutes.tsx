import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppPath } from './AppPath'
import AnimatedLoading from './components/AnimatedLoading/AnimatedLoading'

const Login = React.lazy(() => import('./pages/Login/Login'))
const Forgot = React.lazy(() => import('./pages/Forgot/Forgot'))
const ChangePassword = React.lazy(() => import('./pages/ChangePassword/ChangePassword'))
const Page404 = React.lazy(() => import('./pages/Page404/Page404'))
const ComingSoon = React.lazy(() => import('./pages/ComingSoon/ComingSoon'))

export const AppRoutes = () => (
  <Suspense
    fallback={
      <div className={'loading-container'}>
        <AnimatedLoading />
      </div>
    }
  >
    <Routes>
      <Route path={`/${AppPath.Login}`} element={<Login />} />
      <Route path={`/${AppPath.Forgot}`} element={<Forgot />} />
      <Route path={`/${AppPath.ChangePassword}`} element={<ChangePassword />} />
      <Route path={`/${AppPath.Page404}`} element={<Page404 />} />
      <Route path={`/${AppPath.ComingSoon}`} element={<ComingSoon />} />

      <Route
        path="/"
        element={<Navigate replace to={`/${AppPath.Login}`} />}
      />
      <Route path={`*`} element={<Page404 />} />
    </Routes>
  </Suspense>
)
