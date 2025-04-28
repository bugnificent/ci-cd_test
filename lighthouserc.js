module.exports = {
  ci: {
    collect: {
      staticDistDir: './SoftLand/',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'filesystem',
      outputDir: './SoftLand/lighthouse-reports',
      reportFilenamePattern: 'lighthouse-report-%%PATHNAME%%-%%DATETIME%%.html'
    }
  }
};
