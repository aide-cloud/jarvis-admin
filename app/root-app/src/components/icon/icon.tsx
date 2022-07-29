import { createFromIconfontCN } from '@ant-design/icons'
import React from 'react'

export interface JarvisIconProps {
  scriptUrl?: string
  antdIcon?: string
  svgIcon?: string
}

const _antd_icon = require('@ant-design/icons')

const _interopRequireDefault = (obj: any) => {
  return obj && obj.__esModule ? obj : { default: obj }
}

const antd_icon = _interopRequireDefault(_antd_icon)

const JarvisIcon: React.FC<JarvisIconProps> = ({
  scriptUrl,
  antdIcon,
  svgIcon,
}) => {
  if (svgIcon !== undefined && svgIcon !== '') {
    const MyIcon = createFromIconfontCN({
      scriptUrl: scriptUrl,
    })
    return <MyIcon type={svgIcon} />
  }

  if (!!antdIcon && antdIcon in antd_icon) {
    return React.createElement(antd_icon[antdIcon] || null, null, 123)
  }

  return <></>
}

export default JarvisIcon
