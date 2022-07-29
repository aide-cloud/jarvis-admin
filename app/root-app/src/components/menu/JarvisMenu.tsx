import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React from 'react'

import './JarvisMenu.less'

export interface JarvisMenuProps {
  menuConfig: ItemType[]
  mode?: 'vertical' | 'horizontal' | 'inline'
  height?: number | string
}

const JarvisMenu: React.FC<JarvisMenuProps> = ({
  menuConfig,
  mode,
  height,
}) => {
  return <Menu style={{ height: height }} items={menuConfig} mode={mode} />
}

export default JarvisMenu
