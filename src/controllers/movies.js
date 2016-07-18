'use strict';
import {getInstanceMongoDb} from '../db/conection';

export default class MovieController {

  constructor() {}

  getAll(req, res) {
    const db = getInstanceMongoDb();
    if (db === null) return res.status(500).send({message: 'no es posible conectarse a la base de datos'});

    const collection = db.collection('peliculas');
    collection.find().toArray((err, movies) => {
      res.send(movies);
    });
  }

  add(req,res) {
    const db = getInstanceMongoDb();
    if (db === null) return res.status(500).send({message: 'no es posible conectarse a la base de datos'});
    req.body.premiere = new Date();
    const collection = db.collection('peliculas');
    collection.insertOne(req.body, (err, doc) => {
      if (err) return res.status(400).send(err);
      console.log(doc);
      res.status(201).send(doc.ops[0]);
    });
  }
}
