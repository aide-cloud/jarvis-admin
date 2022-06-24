import { createHashHistory } from 'history'
import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.less'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}

// 此组件用于监听基座下发的跳转指令
const NavigatorFromBaseApp = () => {
  const history = createHashHistory()
  useEffect(() => {
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== history.location.pathname) {
        history.push(data.path as string)
      }
    })
  }, [history])

  return null
}

function App() {
  return (
    <div className='App'>
      <HashRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigatorFromBaseApp />
          <Switch>
            <Route path='/page1' component={page1} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  )
}

const page1: React.FC = () => {
  return (
    <div>
      <h1>child app page1</h1>
    </div>
  )
}

export default App
