import { Card, Space } from 'antd'
import React from 'react'
import Operating from './child/Operating'
import TodaysNews from './child/TodaysNews'
import Todo from './child/Todo'
import UpdateLog from './child/UpdateLog'
import UserOpLine from './child/UserOpLine'

import './Home.less'

export const Home: React.FC = () => {
  return (
    <Space className='home-root' direction='vertical' size={4}>
      <Operating />
      <Space className='Todays-news' align='start'>
        <TodaysNews />
        <Todo />
        <UpdateLog />
      </Space>
      <Card title='用户在线人数分析'>
        <UserOpLine />
      </Card>
    </Space>
  )
}
