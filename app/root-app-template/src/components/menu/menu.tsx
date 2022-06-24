import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import JarvisIcon from '@/components/icon'
import { MicroServer } from '@/components/micro-page/micro-page'

import './index.less'

export interface menuConfig {
  label: string
  path: string
  pathRename?: string
  icon?: string
  microApp?: MicroServer
  children?: menuConfig[]
}

export interface routerConfig {
  path: string
  content?: any
  isMicroApp: boolean
}

export interface JarvisMenuProps {
  menuConfig: menuConfig[]
}

const { SubMenu } = Menu

const JarvisMenu: React.FC<JarvisMenuProps> = ({ menuConfig }) => {
  const handerTitle = (title: string) => {
    document.title = title
  }

  const renderMenu = (menuConfig: menuConfig[]) => {
    return menuConfig.map((item: menuConfig, index: number) => {
      if (item?.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.path}
            icon={<JarvisIcon antdIcon={item.icon} />}
            title={item.label}
          >
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path} icon={<JarvisIcon antdIcon={item.icon} />}>
          <Link
            replace
            to={item.pathRename || item.path}
            onClick={() => handerTitle(item.label)}
          >
            {item.label}
          </Link>
        </Menu.Item>
      )
    })
  }

  return (
    <Menu className='Jarvis-Menu' mode='inline'>
      {renderMenu(menuConfig)}
    </Menu>
  )
}

export default JarvisMenu
