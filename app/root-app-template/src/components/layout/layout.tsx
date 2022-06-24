import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Layout } from 'antd'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { menuConfig, routerConfig } from '@/components/menu/menu'
import './index.less'
import MicroPage from '../micro-page'

export interface JarvisLayoutProps {
  sider?: React.ReactElement
  header?: React.ReactElement
  content?: React.ReactElement
  routers?: menuConfig[]
  footer?: React.ReactElement
  className?: string
  style?: React.CSSProperties
  siderClassName?: string
  footerClassName?: string
  contentClassName?: string
  headerClassName?: string
  contentLayoutClassName?: string
}

const { Header, Footer, Sider, Content } = Layout

const JarvisLayout: React.FC<JarvisLayoutProps> = ({
  sider,
  header,
  footer,
  content,
  routers,
  className,
  style,
  siderClassName,
  contentClassName,
  headerClassName,
  footerClassName,
  contentLayoutClassName,
}) => {
  const [items, setItems] = useState<routerConfig[]>([])

  useEffect(() => {
    // setItems([])
    routers && handlerRouter(routers)
  }, [routers])

  const handlerRouter = (routers: menuConfig[]) => {
    let tmp: routerConfig[] = []

    const recursive = (arr: menuConfig[]) => {
      arr.forEach((router) => {
        if (router?.children && router.children.length > 0) {
          recursive(router.children)
          return
        }
        if (router.microApp) {
          tmp.push({
            path: router.microApp.baseroute + router.pathRename || router.path,
            content: <MicroPage server={router.microApp} />,
            isMicroApp: true,
          })
          return
        }
        tmp.push({
          path: router.pathRename || router.path,
          content: lazy(() => import('@/pages' + router.path)),
          isMicroApp: false,
        })
      })
    }

    recursive(routers)
    setItems([...tmp])
  }

  return (
    <HashRouter>
      <Layout className={`Layout ${className}`} style={style}>
        <Sider className={`Sider ${siderClassName}`}>{sider}</Sider>
        <Layout className={contentLayoutClassName}>
          <Header className={`Header ${headerClassName}`}>{header}</Header>
          <Content className={`Content ${contentClassName}`}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {items.map((item: routerConfig, index: number) => (
                  <Route
                    key={index}
                    path={item.path}
                    component={!item.isMicroApp && item.content}
                  >
                    {item.isMicroApp && item.content}
                  </Route>
                ))}
              </Switch>
            </Suspense>
          </Content>
          <Footer className={`Footer ${footerClassName}`}>{footer}</Footer>
        </Layout>
      </Layout>
    </HashRouter>
  )
}

export default JarvisLayout
