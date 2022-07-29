import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import React, { Suspense } from 'react'
import JarvisLayout from '../components/layout'
import menuConfig from '../config/menu.config'
import './App.less'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfigProvider locale={zhCN}>
        <JarvisLayout menuConfig={menuConfig} />
      </ConfigProvider>
    </Suspense>
  )
}

export default App
