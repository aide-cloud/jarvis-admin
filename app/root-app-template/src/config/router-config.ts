import { menuConfig } from '@/components/menu/menu'

export default [
  {
    label: 'dashboard',
    path: '/dashboard-page',
    icon: 'DashboardOutlined',
    children: [
      {
        label: 'xx1',
        path: '/dashboard',
        pathRename: '/kongzhitai',
        children: [],
      },
    ],
  },
  {
    label: 'config',
    path: '/config',
    icon: 'DashboardOutlined',
    children: [],
  },
  {
    label: 'child-app',
    path: '/page1',
    icon: 'DashboardOutlined',
    microApp: {
      name: 'child-app',
      url: 'http://localhost:13500/',
      baseroute: '/child-app',
      errorPagePath: '/',
    },
    children: [],
  },
] as menuConfig[]
