"use strict";

const path = require('path');
const assetsDir = 'file_static';


module.exports = {
  assetsDir,
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  runtimeCompiler: true,
  // transpileDependencies: ['vue-daum-postcode', 'swiper', 'dom7'],
  devServer: {
    open: true,
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.name = "상용";
      config.plugins.push(...productionPlugins);
    } else {
      config.name = "LOCAL";
    }

    config.devtool = (process.env.NODE_ENV === 'development') ? 'inline-source-map' : false;
    config.performance = {
      hints: false,
    }
    config.optimization = {
      splitChunks: {
        maxSize: 512000,
        minSize: 512000,
      }
    }
    config.output.filename = `${assetsDir}/js/[name].[hash:8].js`;
    config.output.chunkFilename = `${assetsDir}/js/[name].[hash:8].js`;

  }
}