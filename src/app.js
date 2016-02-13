'use strict';

import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;
let app = express();

app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.send('hello world!');
});

app.listen(port, function () {
    console.log(`server running and listening in http://localhost:${port}`);
});
