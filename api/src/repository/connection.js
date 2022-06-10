import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYQSL_HOST,
    user: process.env.MYQSL_USER,
    password: process.env.MYQSL_PWD,
    database: process.env.MYQSL_BD
})

export { con }