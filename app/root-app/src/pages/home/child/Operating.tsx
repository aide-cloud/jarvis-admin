import JarvisIcon from '@/components/icon'
import { Card, Space, Statistic } from 'antd'
import React, { useEffect } from 'react'

import iconScriptUrl from '@/config/icon-script-url'
import dayjs from 'dayjs'
import {
  CloudDownloadOutlined,
  FieldTimeOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons'

export interface OperatingItemType {
  title: string
  value: number | string
  icon: string
}

const Operating: React.FC = () => {
  const valueStyle: React.CSSProperties = {
    fontSize: '16px',
  }

  const [nowTime, setNowTime] = React.useState<string>(
    dayjs().format('YYYY-MM-DD HH:mm:ss')
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  // 随机正整数
  const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // 随机小数, 保留两位
  const randomFloat = (min: number, max: number): number => {
    let num = Math.random() * (max - min) + min
    return parseFloat(num.toFixed(2))
  }

  const [loading, setLoading] = React.useState(false)

  return (
    <Card className='data-card' loading={loading}>
      <Space size={56} className='data-card'>
        <Statistic
          title='今日天气'
          value='晴, 温度: 20°C'
          prefix={<SoundOutlined />}
          valueStyle={valueStyle}
        />
        <Statistic
          title='在线人数'
          value={randomInt(1000, 990)}
          prefix={<UserOutlined />}
          suffix='人'
          valueStyle={valueStyle}
        />
        <Statistic
          title='实时流量'
          value={randomFloat(1, 5)}
          prefix={<CloudDownloadOutlined />}
          valueStyle={valueStyle}
          suffix='MB'
        />
        <Statistic
          title='当前时间'
          value={nowTime}
          prefix={<FieldTimeOutlined />}
          valueStyle={valueStyle}
        />
      </Space>
    </Card>
  )
}

export default Operating
