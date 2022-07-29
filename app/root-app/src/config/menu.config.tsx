import {
  DashboardOutlined,
  MonitorOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { useNavigate } from 'react-router-dom'

const MenuConfig = () => {
  const navigate = useNavigate()
  return [
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
          onClick: () => navigate('/dashboard/overview'),
        },
        // 分析
        {
          key: '/dashboard/analysis',
          label: '分析',
          onClick: () => navigate('/dashboard/analysis'),
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
          label: '用户管理',
          onClick: () => navigate('/user/user-manager'),
        },
        {
          key: '/user/role-manager',
          label: '角色管理',
          onClick: () => navigate('/user/role-manager'),
        },
        {
          key: '/user/permission-manager',
          label: '权限管理',
          onClick: () => navigate('/user/permission-manager'),
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
          label: '实时监控',
          onClick: () => navigate('/monitor/realtime-monitor'),
        },
        // 历史监控
        {
          key: '/monitor/history-monitor',
          label: '历史监控',
          onClick: () => navigate('/monitor/history-monitor'),
        },
        // 监控配置
        {
          key: '/monitor/monitor-config',
          label: '监控配置',
          onClick: () => navigate('/monitor/monitor-config'),
        },
        // 资源管理
        {
          key: '/monitor/resource-manager',
          label: '资源管理',
          onClick: () => navigate('/monitor/resource-manager'),
        },
        // 元数据
        {
          key: '/monitor/metadata',
          label: '元数据',
          onClick: () => navigate('/monitor/metadata'),
        },
      ],
    },
  ] as ItemType[]
}

export default MenuConfig
