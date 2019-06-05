let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {


  entry : "./src/app.js",
  output : {
    path : __dirname + '/dist',
    filename : "bundle.js"
  },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },


          {
            test: /\.(html)$/,
            use : {
              loader : "html-loader"
            }
          },

          { test: /\.jpg$/, use: [ "file-loader" ] },
          { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] }
        ]
      },


    plugins : [
      new HtmlWebpackPlugin()
    ]

}