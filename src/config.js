import { config } from 'dotenv'
config();

console.log(process.env.PORT)


//Se nao houver uma porta definida por padrao será a 3000
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASS,
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
}