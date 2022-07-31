import { Card } from 'antd'
import React from 'react'

const Todo: React.FC = () => {
  return (
    <Card title='待办事项' className='child-card'>
      <div className='info'>
        <p>P0: 完成后端微服务项目搭建</p>
        <p>P1: 完成前端项目部署</p>
        <p>P2: 完成数据初始化</p>
      </div>
    </Card>
  )
}

export default Todo
