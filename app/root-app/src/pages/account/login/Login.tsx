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
    <Space size={4} className='Login' direction='vertical'>
      <div className='content'>
        <div>
          <div className='title'>Login</div>
          <Form onFinish={login} className='Form' size='large'>
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder='Username' prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                placeholder='Password'
                prefix={<LockOutlined />}
              />
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
        </div>
      </div>
    </Space>
  )
}

export default Login
