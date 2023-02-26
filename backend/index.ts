import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes';

const app = express();
const port = 3333;

const fs = require('fs');

const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');

const spec = fs.readFileSync('./swagger/api/swagger.yaml', 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware: { swaggerMetadata: () => any; swaggerValidator: () => any; swaggerUi: () => any; }) {

  app.use(middleware.swaggerMetadata());

  app.use(middleware.swaggerUi());

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }))
  router(app);

  app.listen(port, () => console.log(`Server run on port ${ port }!`));
});

