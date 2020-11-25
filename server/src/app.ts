import express, {Express} from 'express';
import bodyParser from 'body-parser';
import DBManager from './database/DatabaseManager';
import { AuthRouter } from './routes/auth-routes';

const PORT = process.env.PORT;

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('DBManager', new DBManager);

app.use('/auth', AuthRouter(app));

app.listen(PORT, () => {
  console.log(`Connected to {PORT}` )
})