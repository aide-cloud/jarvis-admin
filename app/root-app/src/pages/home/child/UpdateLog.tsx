import { Card } from 'antd'
import React from 'react'

const UpdateLog: React.FC = () => {
  return (
    <Card title='更新日志' className='child-card'>
      <p>feat(1.0.0): 完成项目初始化工作</p>
      <p>release(1.0.1): 发布第一个dev版本</p>
      <p>bugfix(1.0.2): 修复dev版本中的部分BUG</p>
    </Card>
  )
}

export default UpdateLog
