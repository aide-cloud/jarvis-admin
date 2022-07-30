import {
  DashboardOutlined,
  MonitorOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { Link } from 'react-router-dom'

const MenuConfig = [
  // 仪表盘
  {
    key: '/dashboard',
    label: '仪表盘',
    icon: <DashboardOutlined />,
    children: [
      // 总览
      {
        key: '/dashboard/overview',
        label: <Link to='/dashboard/overview'>总览</Link>,
      },
      // 分析
      {
        key: '/dashboard/analysis',
        label: <Link to='/dashboard/analysis'>分析</Link>,
      },
    ],
  },
  // 用户中心
  {
    key: '/user',
    label: '用户中心',
    icon: <UserOutlined />,
    children: [
      // 用户管理
      {
        key: '/user/user-manager',
        label: <Link to='/user/user-manager'>用户管理</Link>,
      },
      {
        key: '/user/role-manager',
        label: <Link to='/user/role-manager'>角色管理</Link>,
      },
      {
        key: '/user/permission-manager',
        label: <Link to='/user/permission-manager'>权限管理</Link>,
      },
    ],
  },
  // 监控中心
  {
    key: '/monitor',
    label: '监控中心',
    icon: <MonitorOutlined />,
    children: [
      // 实时监控
      {
        key: '/monitor/realtime-monitor',
        label: <Link to='/monitor/realtime-monitor'>实时监控</Link>,
      },
      // 历史监控
      {
        key: '/monitor/history-monitor',
        label: <Link to='/monitor/history-monitor'>历史监控</Link>,
      },
      // 监控配置
      {
        key: '/monitor/monitor-config',
        label: <Link to='/monitor/monitor-config'>监控配置</Link>,
      },
      // 资源管理
      {
        key: '/monitor/resource-manager',
        label: <Link to='/monitor/resource-manager'>资源管理</Link>,
      },
      // 元数据
      {
        key: '/monitor/metadata',
        label: <Link to='/monitor/metadata'>元数据</Link>,
      },
    ],
  },
] as ItemType[]

export default MenuConfig
