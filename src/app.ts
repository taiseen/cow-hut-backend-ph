import globalErrorHandler from './app/middleware/globalErrorHandler';
import routeNotFound from './utils/routeNotFound';
import express, { Application } from 'express';
import welcome from './utils/welcome';
import router from './app/routes';
import cors from 'cors';

const app: Application = express();

app.use(cors()); // use cors
app.use(express.json()); // parsing data...
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router); // all routes present here...

app.get('/', welcome); // welcome info display

app.use('/', routeNotFound); // route not found | 404 | for CRUD operation

app.use(globalErrorHandler); // global error handling...

export default app;
