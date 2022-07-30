import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Login</h1>
      <Button
        type='primary'
        onClick={() => {
          localStorage.setItem('token', '123')
          navigate('/')
        }}
      >
        Primary
      </Button>
    </div>
  )
}

export default Login
