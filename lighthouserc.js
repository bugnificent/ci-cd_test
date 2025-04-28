module.exports = {
  ci: {
    collect: {
      staticDistDir: './SoftLand/',
    },
    upload: {
      target: 'filesystem',
      target: 'temporary-public-storage',
      outputDir: './SoftLand/lighthouse-reports'    
    }
  }
};
