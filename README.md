# jarvis-admin
Micro front-end and back-end management templates

## start
```shell
# Pull rely
yarn
# or 
npm install
# start server
yarn start
# or
npm run start
```


## build
```shell
# Pull rely
yarn
# or
npm install

# build
yarn build
# or
npm run build
```


## deployment
```conf
# nginx conf
server {
    listen 80;
    server_name www.example.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## directory structure
```
.
├── README.md
├── craco.config.js
├── package-lock.json
├── package.json
├── path.tsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api
│   ├── backgroud-image.jpg
│   ├── components
│   │   ├── account
│   │   │   ├── Account.less
│   │   │   ├── Account.tsx
│   │   │   ├── access
│   │   │   │   ├── Access.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── breadcrumb
│   │   │   ├── JarvisBreadcrumb.less
│   │   │   ├── JarvisBreadcrumb.tsx
│   │   │   └── index.ts
│   │   ├── error-page
│   │   │   ├── error-403.tsx
│   │   │   └── error-404.tsx
│   │   ├── icon
│   │   │   ├── icon.tsx
│   │   │   └── index.ts
│   │   ├── layout
│   │   │   ├── JarvisLayout.less
│   │   │   ├── JarvisLayout.tsx
│   │   │   └── index.ts
│   │   ├── logo
│   │   │   ├── JarvisLogo.less
│   │   │   ├── JarvisLogo.tsx
│   │   │   └── index.ts
│   │   └── menu
│   │       ├── JarvisMenu.less
│   │       ├── JarvisMenu.tsx
│   │       └── index.ts
│   ├── config
│   │   └── menu.config.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── App.less
│   │   ├── App.tsx
│   │   ├── account
│   │   │   ├── login
│   │   │   │   ├── Login.less
│   │   │   │   ├── Login.tsx
│   │   │   │   └── index.ts
│   │   │   └── register
│   │   │       ├── Register.tsx
│   │   │       └── index.ts
│   │   ├── dashboard
│   │   │   ├── analysis
│   │   │   │   ├── Analysis.tsx
│   │   │   │   └── index.ts
│   │   │   └── overview
│   │   │       ├── Overview.tsx
│   │   │       └── index.ts
│   │   ├── home
│   │   │   ├── Home.less
│   │   │   ├── Home.tsx
│   │   │   └── index.ts
│   │   ├── monitor
│   │   │   ├── history-monitor
│   │   │   │   ├── HistoryMonit.less
│   │   │   │   ├── HistoryMonitor.tsx
│   │   │   │   └── index.ts
│   │   │   ├── metadata
│   │   │   │   ├── Metadata.less
│   │   │   │   ├── Metadata.tsx
│   │   │   │   └── index.ts
│   │   │   ├── monitor-config
│   │   │   │   ├── MonitorConfig.less
│   │   │   │   ├── MonitorConfig.tsx
│   │   │   │   └── index.ts
│   │   │   ├── realtime-monitor
│   │   │   │   ├── RealtimeMonitor.less
│   │   │   │   ├── RealtimeMonitor.tsx
│   │   │   │   └── index.ts
│   │   │   └── resource-manager
│   │   │       ├── ResourceManager.less
│   │   │       ├── ResourceManager.tsx
│   │   │       └── index.ts
│   │   └── user
│   │       ├── permission-manager
│   │       │   ├── PermissionManager.tsx
│   │       │   └── index.ts
│   │       ├── role-manager
│   │       │   ├── RoleManager.tsx
│   │       │   └── index.ts
│   │       └── user-manager
│   │           ├── UserManager.tsx
│   │           └── index.ts
│   ├── react-app-env.d.ts
│   └── setupTests.ts
├── tsconfig.json
└── yarn.lock
```

## Write in the back
[demo地址](https://www.aide-cloud.cn/)



