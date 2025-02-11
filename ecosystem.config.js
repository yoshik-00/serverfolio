module.exports = {
  apps: [
    {
      name: "api-backend",
      script: "/var/www/api/server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      autorestart: true,
      error_file: "/var/log/pm2/api-error.log",
      out_file: "/var/log/pm2/api-out.log",
    },
  ],
};
