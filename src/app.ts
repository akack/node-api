import express, { Request, Response } from 'express';
import productRoutes from './modules/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.listen(7001, () => {
  console.log('Server is running on port 7001');
});
