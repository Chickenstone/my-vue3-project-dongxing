# 东兴边境旅游应用 (Vue3 + UniApp)

这是一个基于 Vue3 和 UniApp 开发的东兴边境旅游应用，提供完整的旅游服务功能。

## 项目特性

- 🎯 **Vue3 + UniApp**: 现代化的跨平台开发框架
- 🔐 **完整认证系统**: 用户注册、登录、权限控制
- 🏛️ **政务服务**: G31-G33 政务办事功能
- 🎪 **活动服务**: G51-G54 活动相关功能  
- 🗺️ **地图服务**: G61-G64 地图导航功能
- 📱 **响应式设计**: 适配多端设备
- 🎨 **现代化UI**: 美观的用户界面设计

## 技术栈

- **前端框架**: Vue 3.4.21
- **开发框架**: UniApp 3.0
- **构建工具**: Vite 5.1.4
- **语言**: JavaScript + TypeScript
- **样式**: SCSS + uni.scss
- **国际化**: Vue-i18n

## 项目结构

```
src/
├── api/                 # API接口模块
│   ├── user.js         # 用户相关接口
│   ├── government.js   # 政务服务接口
│   ├── activity.js     # 活动服务接口
│   └── map.js          # 地图服务接口
├── components/         # 公共组件
│   └── TabBar.vue     # 底部导航栏
├── pages/             # 页面文件
│   ├── index/         # 首页
│   ├── login/         # 登录页面
│   ├── register/      # 注册页面
│   ├── profile/       # 个人中心
│   └── function/      # 功能页面
│       ├── g31.vue    # 政务服务1
│       ├── g32.vue    # 政务服务2
│       ├── g33.vue    # 政务服务3
│       ├── g51.vue    # 活动服务1
│       ├── g52.vue    # 活动服务2
│       ├── g53.vue    # 活动服务3
│       ├── g54.vue    # 活动服务4
│       ├── g61.vue    # 地图服务1
│       ├── g62.vue    # 地图服务2
│       ├── g63.vue    # 地图服务3
│       └── g64.vue    # 地图服务4
├── utils/             # 工具函数
│   ├── auth.js        # 认证工具
│   ├── request.js     # 请求封装
│   ├── logout.js      # 登出工具
│   └── routeGuard.js  # 路由守卫
└── static/            # 静态资源
    ├── logo.png       # 应用图标
    ├── Dongxinglogo.png # 东兴标志
    ├── fonts/         # 字体文件
    ├── style/         # 样式文件
    └── tabbar/        # 导航栏图标
```

## 核心功能

### 🔐 认证系统
- 用户注册/登录
- Token认证
- 路由权限控制
- 自动登出机制

### 🏛️ 政务服务 (G3系列)
- G31: 政务办事服务1
- G32: 政务办事服务2  
- G33: 政务办事服务3

### 🎪 活动服务 (G5系列)
- G51: 活动管理服务1
- G52: 活动管理服务2
- G53: 活动管理服务3
- G54: 活动管理服务4

### 🗺️ 地图服务 (G6系列)
- G61: 地图导航服务1
- G62: 地图导航服务2
- G63: 地图导航服务3
- G64: 地图导航服务4

## 开发环境

### 安装依赖
```bash
npm install
```

### 开发运行
```bash
# H5开发
npm run dev:h5

# 微信小程序
npm run dev:mp-weixin

# 支付宝小程序
npm run dev:mp-alipay
```

### 构建打包
```bash
# H5构建
npm run build:h5

# 微信小程序构建
npm run build:mp-weixin
```

## API文档

详细的API接口文档请查看 [API接口文档.md](./API接口文档.md)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目Issues: [GitHub Issues](https://github.com/Chickenstone/my-vue3-project-dongxing/issues)
- 邮箱: [your-email@example.com]

---

**东兴边境旅游应用** - 让旅行更便捷，让服务更贴心！ 🌟