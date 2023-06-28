import express from 'express'
import config from './config'

//configura o servidor
const app = express()

//settings
app.set('port', config.port)

export default app