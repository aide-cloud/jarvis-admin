import { RouterItem } from '@/components/layout/JarvisLayout'
import MenuConfig from '@/config/menu.config'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import React, { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import JarvisLayout from '../components/layout'
import './App.less'

const App: React.FC = () => {
  const [routerAccount] = useState<RouterItem[]>([
    {
      path: '/account/login',
      content: lazy(() => import('@/components/account/login')),
    },
    {
      path: '/account/register',
      content: lazy(() => import('@/components/account/register')),
    },
    {
      path: '*',
      content: lazy(() => import('@/components/account/login')),
    },
  ])

  const isLogin = () => {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    }
    return true
  }

  return (
    <ConfigProvider locale={zhCN}>
      {isLogin() ? (
        <JarvisLayout menuConfig={MenuConfig} />
      ) : (
        <Routes>
          {routerAccount.map((item: RouterItem) => (
            <Route
              key={item.path}
              path={item.path}
              element={React.createElement(item.content)}
            />
          ))}
        </Routes>
      )}
    </ConfigProvider>
  )
}

export default App
