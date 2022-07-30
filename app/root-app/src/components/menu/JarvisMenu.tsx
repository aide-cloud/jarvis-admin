import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { useEffect } from 'react'
import { matchRoutes, useLocation } from 'react-router-dom'
import type { RouterItem } from '../layout/JarvisLayout'

import './JarvisMenu.less'

export interface JarvisMenuProps {
  menuConfig: ItemType[]
  mode?: 'vertical' | 'horizontal' | 'inline'
  height?: number | string
  routerConfig?: RouterItem[]
}

const JarvisMenu: React.FC<JarvisMenuProps> = ({
  menuConfig = [],
  routerConfig = [],
  mode = 'inline',
  height,
}) => {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = React.useState<
    string[]
  >([])
  const [defaultOpenKeys, setDefaultOpenKeys] = React.useState<string[]>([])
  const location = useLocation()
  const [isInit, setIsInit] = React.useState<boolean>(false)

  useEffect(() => {
    const routers = matchRoutes(routerConfig, location.pathname)
    let pathArr: string[] = []
    if (routers !== null) {
      for (const item of routers) {
        let path = item.route.path
        if (path) {
          pathArr.push(path)
        }
      }
      if (pathArr.length > 0) {
        setDefaultSelectedKeys(pathArr)
        setDefaultOpenKeys(['/' + pathArr[0].split('/')[1]])
        setIsInit(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  if (!isInit) {
    return null
  }

  return (
    <Menu
      className='Menu'
      style={{ height: height }}
      items={menuConfig}
      mode={mode}
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}
    />
  )
}

export default JarvisMenu
