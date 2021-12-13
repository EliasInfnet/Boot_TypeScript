import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import config from './config';
import { apiRouter } from './routes/api.routes';

dotenv.config()

const app = express();
app.use(express.json())
app.use(apiRouter)

const ENV_VARS = {
  port : process.env.PORT,
  mongoURI : process.env.MONGO_URI,
  token_secret : process.env.TOKEN_SECRET
}

const mongoURI = process.env.MONGO_URI as string || undefined
const port = process.env.PORT

app.listen(port, async () => {
  console.log('Server funcionando na porta ', port)

  if(mongoURI){
    mongoose.connect(mongoURI)
  } else {
    console.log('Erro na conexao com db')
  }

  
})

export {
  ENV_VARS
}

