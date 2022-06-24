import React from 'react'

import JarvisLayout from '@/components/layout/layout'
import JarvisMenu from '@/components/menu/menu'
import routerConfig from '@/config/router-config'

import './App.less'

const App: React.FC = () => {
  return (
    <div className='App'>
      <JarvisLayout
        sider={<JarvisMenu menuConfig={routerConfig} />}
        routers={routerConfig}
      />
    </div>
  )
}

export default App
