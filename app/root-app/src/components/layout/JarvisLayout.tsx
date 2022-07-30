import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row, Space } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, Suspense } from 'react'

import { Outlet } from 'react-router-dom'
import JarvisLogo from '@/components/logo'
import JarvisMenu from '@/components/menu'
import JarvisAccount from '@/components/account'

import { JarvisBreadcrumb } from '../breadcrumb/JarvisBreadcrumb'
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

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Row className='Row'>
          <Col span={4}>
            <JarvisLogo />
          </Col>
          <Col span={20} className='Col-20'>
            <Space size={4} className='Space'>
              <Button type='primary'>设置</Button>
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
              <JarvisBreadcrumb menuConfig={menuConfig} />
              <Outlet />
            </Suspense>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default JarvisLayout
