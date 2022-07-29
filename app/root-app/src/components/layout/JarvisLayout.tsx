import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, useEffect } from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import JarvisLogo from '@/components/logo'
import JarvisMenu from '@/components/menu'
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
    setRouterItems(buildRouter(menuConfig))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout className='Layout'>
      <Header>
        <JarvisLogo />
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
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default JarvisLayout