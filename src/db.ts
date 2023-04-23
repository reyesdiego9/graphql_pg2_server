import { DataSource } from 'typeorm';
import { Client } from './schema/entities/Client';
import { Car } from './schema/entities/Car';
import { CatalogService } from './schema/entities/CatalogService';
import { Service } from './schema/entities/Service';
import { Visit } from './schema/entities/Visit';
import { Document } from './schema/entities/Document';
import { State } from './schema/entities/State';
import { Token } from './schema/entities/Token';
import { Photo } from './schema/entities/Photo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '4569',
  database: 'test1',
  synchronize: true,
  entities: [
    Client,
    Car,
    Service,
    CatalogService,
    Visit,
    Document,
    State,
    Token,
    Photo
  ]
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log('connected with the data base');
  })
  .catch((error) => console.log(error));
