module.exports = {
  apps: [
    {
      name: "seamo-server",
      script: "index.js",
      instances: 1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
