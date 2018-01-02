npm run dll 生成dll文件（只第一次运行项目执行该命令）

npm start  启动服务器并监听文件

npm run watch 监听文件改变不启动服务器


### 目录结构说明

- my-app                  // 项目根目录
  - package.json
  - README.md
  - BaseComponent.js      // 项目通用基础类，封装通用的方法等
  - entry                 // 页面入口目录，renderdom，redux等的引入
    - main.js 
  - common                // 业务通用文件
    - components          // 业务通用组件
    - style               // 业务通用样式
    - tool                // 业务通用工具，如fetch，字符串处理，时间处理等
  - layout                // 通用布局组件？
    - index.js
    - index.less
  - pages                 // 页面组件入口目录
    - page1               // 一个页面的入口目录
      - actions           // actions目录
        - index.js        // actions对外暴露的唯一文件
      - components        // 页面的组件
        - PageBanner      // 页面组件以目录形式包装，
          - index.js      // 组件目录里暴露的唯一文件
          - index.less    
          - components    // 该组件用到的子组件
            - BannerImage // 组件规则相同
              - index.js  // 组件目录只暴露唯一文件
              - index.less
        - container       // 容器组件通常用来集中业务逻辑
          - index.js      // 暴露的唯一文件
          - index.less
        - reducers
          - index.js
       