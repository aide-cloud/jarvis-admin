import JarvisLogo from '@/components/logo'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.less'

export interface UserInfo {
  username: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const login = (userInfo: UserInfo) => {
    console.log('userInfo', userInfo)
    localStorage.setItem('username', userInfo.username)
    navigate('/', { replace: true })
  }

  const toRegister = () => {
    navigate('/account/register', { replace: true })
  }

  return (
    <div className='root'>
      <Space size={4} className='Login' direction='vertical'>
        <Space className='Space-Title'>
          <div className='logo'>
            <JarvisLogo />
          </div>
          <div className='title'>Login</div>
        </Space>
        <Form onFinish={login} className='Form' size='large'>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username' prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' prefix={<LockOutlined />} />
          </Form.Item>
          <Space>
            还有没有账号？
            <Button type='link' onClick={toRegister}>
              点这里注册
            </Button>
            <Form.Item>
              <Button type='ghost' htmlType='reset'>
                重置
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                登陆
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Space>
      <JarvisFooter />
    </div>
  )
}

const JarvisFooter = () => {
  return (
    <div className='footer'>
      © 2021 - 2022 .
      <a href='https://beian.miit.gov.cn' target='_blank' rel='noreferrer'>
        黔ICP备2022001434号
      </a>
      . 基于
      <a href='https://zh-hans.reactjs.org/' target='_blank' rel='noreferrer'>
        React
      </a>
      框架
      <a href='https://ant.design/index-cn' target='_blank' rel='noreferrer'>
        ant.design
      </a>
      . UI设计
    </div>
  )
}

export default Login
