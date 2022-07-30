import { Error404 } from '@/components/error-page/error-404'
import MenuConfig from '@/config/menu.config'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  createElement,
} from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import JarvisLayout from '../components/layout'
import './App.less'

export interface RouterItem {
  path: string
  content: any
}

const App: React.FC = () => {
  const [routerItems, setRouterItems] = useState<RouterItem[]>([])
  const [userAccess, setUserAccess] = useState<string[]>([
    '/home',
    '/dashboard/analysis',
  ])

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

  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path='/'
              element={
                <JarvisLayout
                  menuConfig={MenuConfig}
                  routerConfig={routerItems}
                  userAccess={userAccess}
                />
              }
            >
              {routerItems.map((item: RouterItem) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={createElement(item.content)}
                />
              ))}

              <Route path='/' element={<Navigate to='/home' />} />
            </Route>

            <Route path='/account' element={<Outlet />}>
              {noAuthRouterItems.map((item: RouterItem) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={createElement(item.content)}
                />
              ))}
            </Route>

            <Route path='*' element={<Error404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
