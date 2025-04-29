module.exports = {
  ci: {
    collect: {
      puppeteerScript: './scroll.js',
      url: ['https://yusufasik.com'],
      //staticDistDir: './',
    },
    upload: {
      target: 'temporary-public-storage',
    }
  }
};
