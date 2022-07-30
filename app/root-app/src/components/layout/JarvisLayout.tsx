import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Space } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, useEffect, Suspense } from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import JarvisLogo from '@/components/logo'
import JarvisMenu from '@/components/menu'
import JarvisAccount from '@/components/account'
import './JarvisLayout.less'

export interface JarvisLayoutProps {
  menuConfig: ItemType[]
}

export interface RouterItem {
  path: string
  content: any
}

const { Header, Footer, Sider, Content } = Layout
const JarvisLayout: React.FC<JarvisLayoutProps> = ({ menuConfig }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [routerItems, setRouterItems] = useState<RouterItem[]>([])

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
        content: lazy(() => import('@/pages' + item.key)),
      })
    })
    return routers
  }
  useEffect(() => {
    setRouterItems([...buildRouter(menuConfig)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Space className='Space'>
          <JarvisLogo />
          <JarvisAccount />
        </Space>
      </Header>

      <Layout>
        <Sider collapsed={collapsed}>
          <JarvisMenu
            menuConfig={menuConfig}
            mode='inline'
            height={'calc(100% - 32px)'}
          />
          <Button
            className='Button'
            type='primary'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Sider>
        <Layout>
          <Content>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routerItems.map((item: RouterItem) => {
                  return (
                    <Route
                      key={item.path}
                      path={item.path}
                      element={React.createElement(item.content)}
                    />
                  )
                })}
                <Route path='*' element={<div>404</div>} />
              </Routes>
            </Suspense>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default JarvisLayout
