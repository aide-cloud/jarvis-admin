import React from 'react'
import { createHashHistory } from 'history'
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import microApp from '@micro-zoe/micro-app'

export interface MicroServer {
  name: string
  url: string
  baseroute: string
  errorPagePath: string
}

export interface MicroServerProps {
  server: MicroServer
}

const MicroPage: React.FC<MicroServerProps> = ({ server }) => {
  const { name, url, baseroute, errorPagePath } = server
  const handleDataChange = (e: any) => {
    console.log('来自子应用  的数据:', e.detail)
  }

  return (
    <micro-app
      name={name}
      url={url}
      baseroute={baseroute}
      data={{ msg: '来自基座的数据' }}
      onCreated={() => console.log('micro-app元素被创建')}
      onBeforemount={() => console.log('即将被渲染')}
      onMounted={() => {
        microApp.setData('micro-app', { status: '主从连接完成' })
      }}
      onUnmount={() => {
        console.log('已经卸载')
      }}
      onError={() => {
        console.log('渲染出错')
        createHashHistory().push(errorPagePath)
      }}
      onDataChange={handleDataChange}
    ></micro-app>
  )
}

export default MicroPage
