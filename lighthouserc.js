module.exports = {
  ci: {
    collect: {
      staticDistDir: './SoftLand/',
    },
    upload: {
      target: 'filesystem',
      outputDir: './SoftLand/lighthouse-reports',
      reportFilenamePattern: 'lighthouse-report-%%PATHNAME%%-%%DATETIME%%.html'
    }
  }
};
