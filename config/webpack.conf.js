const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./demo/index.js",
  output: {
    path: path.resolve(__dirname, "../bundle"),
    filename: "[name].min.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      // {
      //   test: /\.(png|jpg|jpeg|ttf|eot|svg|woff|gif)$/,
      //   exclude: path.resolve(__dirname, '../src/assets'),
      //   use: [
      //     {
      //       loader: "file-loader",
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg|ttf|eot|svg|woff|gif)$/i,
        exclude: path.resolve(__dirname, '../src/assets'),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./demo/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
