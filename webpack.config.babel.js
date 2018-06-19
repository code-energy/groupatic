import htmlPlugin from 'html-webpack-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

export default {
  entry: './main.js',
  output: { filename: 'bundle.js' },
  module: { rules: [
    { test: /\.vue$/, loader: 'vue-loader' },
    { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
  ]},
  plugins: [
    new VueLoaderPlugin(),
    new htmlPlugin({
      templateContent: `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Groupatic</title>
          </head>
          <body><div id="vue-main"></div></body>
        </html>`
    })
  ],
  "devServer": { "proxy": { "/api/": "http://127.0.0.1:8000" } }
}
