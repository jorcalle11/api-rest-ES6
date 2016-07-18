'use strict';

import express    from 'express';
import morgan     from 'morgan';
import bodyPaser  from 'body-parser';
import config     from './config';
import {connect}  from './db/conection';
import routes     from './routes';


let app = express();
app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyPaser.json());
app.use(morgan('dev'));
app.use(routes);

connect(config.url)
  .then((data) => {
    app.listen(config.port, connectServer);
    console.log(data.message);
  })
  .catch((err) => {
    console.log(err);
  });

function connectServer() {
  console.log(`server running and listening in http://localhost:${config.port}`);
}
