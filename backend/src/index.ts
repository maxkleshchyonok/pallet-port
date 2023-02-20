import express from 'express';
import mongoose from 'mongoose';

const DB_LOGIN = 'palletenjoer';
const DB_PASSWORD = 87654321;
const PORT = process.env.PORT ?? 5300;

const DB_URL = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.afhplie.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

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