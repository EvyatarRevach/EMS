import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import ordersRoutes from './routes/ordersRoutes';
import connectToDatabase from './configs/connectToMongogoDB';

const port = 3000
const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use('/api/users', userRoutes);
app.use('/api/orders/', ordersRoutes);

app.listen(port, () => {
  connectToDatabase()
  console.log(`server is running at port ${port}`);
});
