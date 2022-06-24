const CracoAntDesignPlugin = require('craco-antd')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
}
