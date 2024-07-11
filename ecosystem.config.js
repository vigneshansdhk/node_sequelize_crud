module.exports = {
    apps: [
        {
            name: 'nodecrud_sequelize',
            script: './server.js',
            instances: 1,
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
                PORT: process.env.PORT,
                HOST: process.env.HOST,
                DB_HOST: process.env.DB_HOST,
                DB_PORT: process.env.DB_PORT,
                DB_USER: process.env.DB_USER,
                DB_PASSWORD: process.env.DB_PASSWORD,
                DB_NAME: process.env.DB_NAME,
            }
        },
    ],
};
