import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/product-router.js';
import productCategoryRouter from './routers/productCategory-router.js';

const DB_LOGIN = 'palletenjoer';
const DB_PASSWORD = 87654321;
const PORT = process.env.PORT ?? 5300;

const DB_URL = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.afhplie.mongodb.net/Palletport?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

app.use('/api', productCategoryRouter);
app.use('/api', productRouter);

const startServer = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('It work WOW!'));
    } catch (error) {
        console.error(error);
    }
}

startServer();