module.exports = {
    development: {
        username: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSWORD,
        database: process.env.DB_DEV_DATABASE,
        host: process.env.DB_DEV_HOSTNAME,
        port: process.env.DB_DEV_PORT,
        dialect: "postgres",
        logging: false
    },
    test: {
        username: process.env.DB_TEST_USERNAME,
        password: process.env.DB_TEST_PASSWORD,
        database: process.env.DB_TEST_DATABASE,
        host: process.env.DB_TEST_HOSTNAME,
        port: process.env.DB_TEST_PORT,
        dialect: "postgres",
        logging: false
    },
    production: {
        username: process.env.DB_PROD_USERNAME,
        password: process.env.DB_PROD_PASSWORD,
        database: process.env.DB_PROD_DATABASE,
        host: process.env.DB_PROD_HOSTNAME,
        port: process.env.DB_PROD_PORT,
        dialect: "postgres",
        logging: false
    }
}