require('dotenv').config();
console.log('process.env.DB_DIALECT', process.env.DB_DIALECT);
module.exports = {
    port: process.env.PORT || 5003,
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
};
