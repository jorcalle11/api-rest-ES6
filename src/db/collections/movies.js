'use strict';

export default class Movies {
  constructor(db) {
    this.db = db;
    this.name = 'peliculas';
  }

  getName() {
    return this.name;
  }

  create() {
    this.db.createCollection(this.name,{
      validator: {
        $and : [
          {title: {$type: 'string'}},
          {age: {$type: 'int'}},
          {duration: {$type: 'string'}},
          {country: {$type: 'string'}},
          {director: {$type: 'string'}},
          {producer: {$type: 'string'}},
          {genre: {$type: 'array', $exists: true}},
          {language: {$in :['Español','Ingles']}},
          {subtitles: {$in :['Español latino','Español España','Ingles']}},
          {synopsis: {$type: 'string'}},
          {cover: {$type: 'string'}},
          {premiere: {$type: 'date'}}
        ]
      }
    });
  }
}
