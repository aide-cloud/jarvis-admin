import { Card, Space } from 'antd'
import React from 'react'

const TodaysNews: React.FC = () => {
  const githubRepos = 'https://github.com/aide-cloud/jarvis-admin'
  const aideCloud = 'https://github.com/aide-cloud'
  const blog = 'https://aide-cloud.github.io/'

  return (
    <Card className='child-card'>
      <Space direction='vertical' className='today-news' size={8}>
        <div className='greeting'>
          Good morning, administrator, show time is up!
        </div>
        <div>今日晴，20℃ - 28℃, 温度适宜，湿度: 78%</div>

        <Space>
          <a href={githubRepos}>仓库地址</a>
          <a href={aideCloud}>GitHub地址</a>
          <a href={blog}>博客地址</a>
        </Space>
      </Space>
    </Card>
  )
}
export default TodaysNews
