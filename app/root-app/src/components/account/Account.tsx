import {
  DownOutlined,
  LockOutlined,
  PoweroffOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, Dropdown, Badge, Avatar, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Account.less'

export interface AccountProps {
  userInfo?: AccountInfo
}

export interface AccountInfo {
  id: number
  name: string
  avatar: string
  email: string
  phone: string
  address: string[]
  roles: string[]
  permissions: string[]
  token: string
}

const Account: React.FC<AccountProps> = ({ userInfo }) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/account/login')
  }
  const menu = (
    <Menu
      items={[
        {
          label: '账户信息',
          key: 'account',
          icon: <UserOutlined />,
          onClick: () => {},
        },
        {
          label: '修改密码',
          key: 'password',
          icon: <LockOutlined />,
          onClick: () => {},
        },
        {
          label: '查看通知',
          key: 'notification',
          icon: <SoundOutlined />,
          onClick: () => {},
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: <PoweroffOutlined />,
          onClick: logout,
        },
      ]}
    />
  )
  return (
    <Dropdown
      className='Account'
      overlay={menu}
      trigger={['click']}
      placement='bottomLeft'
    >
      <Button type='link'>
        {localStorage.getItem('username')}
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default Account
