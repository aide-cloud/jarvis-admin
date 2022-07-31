import JarvisLogo from '@/components/logo'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Space, Form, Input, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import login from '../login'
import { JarvisFooter } from '../login/Login'

import './Register.less'

const Register: React.FC = () => {
  return (
    <Space direction='vertical' size={24} className='root'>
      <Space size={4} className='Register' align='center' direction='vertical'>
        <Space className='Space-Title'>
          <div className='logo'>
            <JarvisLogo />
          </div>
          <div className='title'>Register</div>
        </Space>
        <Form onFinish={login} className='Form' size='large'>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder='Username'
              className='Input'
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              autoComplete='true'
              placeholder='Password'
              className='Input'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            name='password_check'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              autoComplete='true'
              placeholder='Password check'
              className='Input'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Space align='baseline' size={66} className='Space'>
            <Space size={1} align='baseline'>
              已经有有账号？
              <Link to='/account/login'>点这里登陆</Link>
            </Space>
            <Space align='baseline'>
              <Form.Item>
                <Button type='ghost' htmlType='reset' size='middle'>
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' size='middle'>
                  注册
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

export default Register
