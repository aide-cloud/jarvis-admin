import { DashboardOutlined } from '@ant-design/icons'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

export default [
  // 仪表盘
  {
    key: '/dashboard',
    label: '仪表盘',
    icon: <DashboardOutlined />,
    children: [
      // 总览
      {
        key: '/dashboard/overview',
        label: '总览',
      },
      // 分析
      {
        key: '/dashboard/analysis',
        label: '分析',
      },
    ],
  },
] as ItemType[]
