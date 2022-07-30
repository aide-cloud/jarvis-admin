import MenuConfig from '@/config/menu.config'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { lazy, useEffect, useState } from 'react'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import JarvisLayout from '../components/layout'
import Login from './account/login/Login'
import './App.less'

export interface RouterItem {
  path: string
  content: any
}

const App: React.FC = () => {
  const [routerItems, setRouterItems] = useState<RouterItem[]>([])

  const noAuthRouterItems: RouterItem[] = [
    {
      path: '/account/login',
      content: lazy(() => import('@/pages/account/login')),
    },
    {
      path: '/account/register',
      content: lazy(() => import('@/pages/account/register')),
    },
  ]

  // 根据菜单配置生成路由配置
  const buildRouter = (menuConfig: ItemType[]) => {
    let routers: RouterItem[] = []
    menuConfig.forEach((item: any) => {
      if (item?.children && item?.children.length > 0) {
        routers = [...routers, ...buildRouter(item.children)]
        return
      }
      routers.push({
        path: item.key,
        content: lazy(() => import('@/pages' + item.key)) || '',
      })
    })
    return routers
  }
  useEffect(() => {
    setRouterItems([...buildRouter(MenuConfig)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const reg = React.createElement(
    lazy(() => import('@/pages/account/register'))
  )

  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          {/* <Route path='/' element={<JarvisLayout menuConfig={MenuConfig} />}>
            {routerItems.map((item: RouterItem) => (
              <Route
                key={item.path}
                path={item.path}
                element={React.createElement(item.content)}
              />
            ))}
          </Route> */}
          {/* {noAuthRouterItems.map((item: RouterItem) => (
            <Route
              key={item.path}
              path={item.path}
              // element={React.createElement(item.content)}
              element={<Login />}
            />
          ))} */}
          <Route
            path='/account'
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route
              path='/account/register'
              key={'/account/register'}
              element={reg}
            />
            <Route path='/account/login' element={<h1>login</h1>} />
          </Route>

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
