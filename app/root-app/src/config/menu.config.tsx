import {
  DashboardOutlined,
  MonitorOutlined,
  RocketOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { Link } from 'react-router-dom'

const MenuConfig = [
  // 首页
  {
    key: '/home',
    icon: <DashboardOutlined />,
    label: <Link to='/home'>首页</Link>,
  },
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
  // 个人中心
  {
    key: '/personal',
    label: '个人中心',
    icon: <SmileOutlined />,
    children: [
      // 个人设置
      {
        key: '/personal/personal-setting',
        label: <Link to='/personal/personal-setting'>个人设置</Link>,
      },
      // 我的收藏
      {
        key: '/personal/my-collection',
        label: <Link to='/personal/my-collection'>我的收藏</Link>,
      },
      // 我的订阅
      {
        key: '/personal/my-subscription',
        label: <Link to='/personal/my-subscription'>我的订阅</Link>,
      },
      // 我的设备
      {
        key: '/personal/my-device',
        label: <Link to='/personal/my-device'>我的设备</Link>,
      },
    ],
  },
  // 版本管理
  {
    key: '/version',
    label: <Link to='/version'>版本管理</Link>,
    icon: <RocketOutlined />,
  },
] as ItemType[]

export default MenuConfig
