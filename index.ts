import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}))
router(app);

app.listen(port, () => console.log(`Server run on port ${ port }!`));