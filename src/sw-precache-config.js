module.exports = {
  staticFileGlobs: [
    'dist/browser/*.{ico,txt,js,css}'
  ],
  stripPrefix: 'dist/browser',
  runtimeCaching: [{
    urlPattern: /(\/|\/about)$/,
    handler: 'networkFirst'
  }]
};
