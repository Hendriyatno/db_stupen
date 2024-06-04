module.exports ={
  "development": {
    "username": "postgres",
    "password": "123",
    "database": "database1",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "123",
    "database": "database1",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "123",
    "database": "database1",
    "host": "localhost",
    "dialect": "postgres"
  }
}


// module.exports = {
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//     // dialectOptions: {  // comment this line, if you use database in local
//     //   ssl: { // comment this line, if you use database in local
//     //     rejectUnauthorized: false, // comment this line, if you use database in local
//     //     ca: fs.readFileSync('./config/ca-certificate.crt').toString(),  // comment this line, if you use database in local
//     //   }
//     // }
//   },
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: ${DB_NAME},
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
//   production: {
//     ...sharedConfig,
//     connection: process.env.DATABASE_URL,
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
// }