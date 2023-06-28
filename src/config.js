import { config } from 'dotenv'
config();

console.log(process.env.PORT)


//Se nao houver uma porta definida por padrao será a 3000
export default {
    port: process.env.PORT || 3000,
}