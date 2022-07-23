const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebPackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebPackPwaManifestPlugin({
      name: 'Petgram - Your pet photos app',
      shortname: 'Petgram 🐶',
      description: 'Find pet photos and use it as wallpaper',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#456BD9',
      theme_color: '#456BD9',
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          size: '1024x1024',
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'maskable any',
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkBoxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 5420000,
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/petgram-server-valentin.vercel.app/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
