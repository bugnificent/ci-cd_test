module.exports = {
  ci: {
    collect: {
      staticDistDir: './SoftLand/', // Statik sitenizin dizini
    },
    upload: {
      target: 'temporary-public-storage', // Geçici depolama, bu da uygun
      outputDir: './SoftLand/lighthouse-reports', // Raporların kaydedileceği dizin
      reportFilenamePattern: 'lighthouse-report-%%TIMESTAMP%%.html', // Rapor dosya adı formatı
    },
  },
};
