import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Space } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useState, useEffect, Suspense } from 'react'
import { lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import JarvisLogo from '@/components/logo'
import JarvisMenu from '@/components/menu'
import JarvisAccount from '@/pages/account'
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
