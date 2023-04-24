import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue';// 提供 Vue 3 单文件组件支持,在插件中使用

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang:'zh-CH',
  base: '/ViteDocs/',
  title: "FoXe Docs",
  description: "狐氙的杂文站",
  head: [//改变网页标签的图标
    [
      'link', {
      rel: 'icon',
      href: '/images/head.jpg',
    },
    ],],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo: "/images/head.jpg",//左上角标题图标
    nav: [
      {text: "主页", link: '/'},
      {text: "示例",activeMatch:'/example',items:[
          { text: 'markdown-examples', link: '/example/markdown-examples' },
          { text: 'Runtime API Examples', link: '/example/api-examples' }
        ]}
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          {text: 'Markdown Examples', link: '/example/markdown-examples'},
          {text: 'Runtime API Examples', link: '/example/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Future-FoXe/ViteDocs'},
      {icon: 'discord', link: 'https://discord.com/channels/@me'}
    ]
  }
});