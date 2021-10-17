import { MongooseConnection } from './database/mongoConnect';
import express from 'express'
import router from './routes';
require('dotenv').config()

const api = express();

api.use(express.json())
api.use(router)

MongooseConnection.connect()

api.listen(process.env.API_PORT || 3000,() => {
  console.log('api is running!')
})