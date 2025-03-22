module.exports = {
  ci: {
    collect: {
      staticDistDir: './SoftLand/', // Replace with the path to your built files or if its node.js adjust package.json
    },
    upload: {
      target: 'temporary-public-storage', // Use public storage or setup server
    },
  },
};

