const withCSS = require("@zeit/next-css");
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const withImages = require('next-images')

const aliases = {
  Components: path.resolve(__dirname, "components"),
  Containers: path.resolve(__dirname, "containers"),
  Layouts: path.resolve(__dirname, "containers/layouts/"),
}


module.exports = withCSS(withImages({
  useFileSystemPublicRoutes: false,
  inlineImageLimit: 16384,
  alias: aliases,
  webpack: config => {
    // resolve path
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".scss", ".css", ".mdx", "jsx"],
      alias: { ...config.resolve.alias, ...aliases }
    }

    config.node = {
      ...config.node,
      fs: "empty"
    }

    config.module.rules.push({
      test: /.*\.(otf|eot|woff|woff2|ttf|md)$/i,
      use: [
        {
          loader: "url-loader"
        }
      ]
    })

    if (config.mode === "production") {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
      }
    }

    // Read the .env file
    new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: true
    })

    return config
  }
}));