import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Button, Col, Layout, Row, Space } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, useEffect, Suspense } from 'react'

import { Outlet, RouteObject, useLocation, useNavigate } from 'react-router-dom'
import JarvisLogo from '@/components/logo'
import JarvisMenu from '@/components/menu'
import JarvisAccount from '@/components/account'

import { JarvisBreadcrumb } from '../breadcrumb/JarvisBreadcrumb'
import './JarvisLayout.less'
import Access from '../account/access'

export interface JarvisLayoutProps {
  menuConfig: ItemType[]
  routerConfig: RouterItem[]
  userAccess?: string[]
}

export type RouterItem = RouteObject

const { Header, Footer, Sider, Content } = Layout
const JarvisLayout: React.FC<JarvisLayoutProps> = ({
  menuConfig,
  routerConfig,
  userAccess = [],
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const location = useLocation()

  const isAccess = (path: string) => {
    return userAccess.includes(path)
  }

  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLogin && localStorage.getItem('username') !== null) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
        navigate('/account/login')
        return
      }
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Row className='Row'>
          <Col span={4}>
            <JarvisLogo />
          </Col>
          <Col span={20} className='Col-20'>
            <Space size={4} className='Space'>
              <Button type='primary' icon={<SettingOutlined />} />
              <JarvisAccount />
            </Space>
          </Col>
        </Row>
      </Header>

      <Layout>
        <Sider collapsed={collapsed}>
          <JarvisMenu
            menuConfig={menuConfig}
            mode='inline'
            height={'calc(100% - 32px)'}
            routerConfig={routerConfig}
          />
          <Button
            className='Button'
            type='primary'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Sider>
        <Layout>
          <Content className='Content'>
            <Suspense fallback={<div>Loading...</div>}>
              <JarvisBreadcrumb menuConfig={menuConfig} />
              <Access
                hasAccess={isAccess(location.pathname)}
                children={<Outlet />}
              />
            </Suspense>
          </Content>
          <Footer className='Footer'>aide-cloud</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default JarvisLayout
