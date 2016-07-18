'use strict';

import mongodb from 'mongodb';
import CollectionMovie from './collections/movies';
const mongoClient = mongodb.MongoClient;

let dataBase = null;

export function connect(url) {
  let promise = new Promise((resolve, reject) => {
    if (dataBase) resolve({message: 'ya debes estar conectado!!'});
    mongoClient.connect(url, (err, db) => {
      if (err) return reject(err.message);
      dataBase = db;
      createCollections(db);
      return resolve({message: `conexión exitosa :)`});
    });
  });
  return promise;
}

export function getInstanceMongoDb() {
  return dataBase;
}

function createCollections(db) {
  db.listCollections().toArray().then((collections) => {
    console.log(collections);
    if (!collections.length) {
      const collectionMovie = new CollectionMovie(db);
      console.log(`Creando colección ${collectionMovie.getName()}, espere...`);
      collectionMovie.create();
      console.log(`Colección ${collectionMovie.getName()} ha sido creada correctamente.`);
    }
  });
}
