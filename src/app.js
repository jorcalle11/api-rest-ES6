'use strict';

import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;
let app = express();

app.use(morgan('dev'));

app.get('/',(req,res) => {
  res.send('hello world!');
});

app.get('/users', (req,res)=> {
  res.send([
    {
      'id':1,
      'name':'jorge calle',
      'email':'jorcalle11@gmail.com'
    },
    {
      'id':2,
      'name':'nicole calle guzman',
      'email': 'nicolecalle05@gmail.com'
    }
  ]);
});

app.listen(port, function () {
  console.log(`server running and listening in http://localhost:${port}`);
});
