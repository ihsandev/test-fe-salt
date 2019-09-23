const withCSS = require("@zeit/next-css");
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

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
      extensions: [...config.resolve.extensions, ".scss", ".css", ".mdx"],
      alias: { ...config.resolve.alias, ...aliases }
    }

    // Read the .env file
    new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: true
    })
    return config
  }
}));