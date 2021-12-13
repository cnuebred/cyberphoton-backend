import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

import { config } from './config/config.env';
import { logger } from './utils/logs.utils';
import { router } from './routes/router';

const app = express();
const port = config.port;

app.use(express.json());

router(app)

app.get('*', (req, res) => {
    res.send({ msg: 'Default response' });
});

app.listen(port, () => {
    return logger.log('\n', 'Server is running on', `http://${config.host}:${config.port}`)
});