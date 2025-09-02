import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "HyperCore One",
  description: "HyperCore One Docs",
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matrix', link: 'https://matrix.to/#/#zenon-sigs:zenon.chat' },
      { text: 'Forum', link: 'https://forum.hypercore.one/' }
    ],

    sidebar: [
      {
        text: 'Organization',
        items: [
          { text: 'README', link: '/'},
          { text: 'Meta', link: 'https://docs.hypercore.one/meta'},
          { text: 'Newsletter', link: 'https://docs.hypercore.one/newsletter'},
          { text: 'SDLC SIG', link: 'https://docs.hypercore.one/sig-sdlc'},
          { text: 'Community SIG', link: 'https://docs.hypercore.one/sig-community'},
          { text: 'OP SIG', link: 'https://docs.hypercore.one/sig-op'},
          { text: 'Syrius SIG', link: 'https://docs.hypercore.one/sig-syrius'},
          { text: 'Liquidity SIG', link: 'https://docs.hypercore.one/sig-liquidity'},
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Incubator', link: 'https://docs.hypercore.one/incubator'},
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/hypercore-one.github.io/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/hypercore-one.github.io' }
    ]
  }
})
