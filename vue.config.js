module.exports = {
  lintOnSave: false,

  devServer: {
    host: '0.0.0.0',
    port: 4000,
    proxy: 'http://localhost:8080'
  }
}
