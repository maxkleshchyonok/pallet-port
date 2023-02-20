import express from 'express';

const PORT = process.env.PORT ?? 5300;

const app = express();

app.use(express.json());

const startServer = async () => {
    try {
        app.listen(PORT, () => console.log('It work WOW!'));
    } catch (error) {
        console.error(error);
    }
}

startServer();