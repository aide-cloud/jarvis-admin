import JarvisLogo from '@/components/logo'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Space } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <Space direction='vertical' size={24} className='root'>
      <Space size={4} className='Login' align='center' direction='vertical'>
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
            <Input.Password
              autoComplete='true'
              placeholder='Password'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Space align='baseline' size={66} className='Space'>
            <Space size={1} align='baseline'>
              还有没有账号？
              <Link to='/account/register'>点这里注册</Link>
            </Space>
            <Space align='baseline'>
              <Form.Item>
                <Button type='ghost' htmlType='reset' size='middle'>
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' size='middle'>
                  登陆
                </Button>
              </Form.Item>
            </Space>
          </Space>
        </Form>
      </Space>
      <JarvisFooter />
    </Space>
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
