import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import expenseRoutes from './routes/transactions.js'

dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb', extended: 'true' }))
app.use(express.urlencoded({ limit: '10mb', extended: 'true' }))
app.use(cors())

app.use('/api/v1/transactions', expenseRoutes);

app.get('/', (req, res) => {
  res.send('this is the expense tracker_1202 api')
})

const PORT = process.env.PORT || 5000;
const DB_CONNECT = process.env.MONGO_URI 

mongoose.connect(DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))


