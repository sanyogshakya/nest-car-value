import { DBOptions } from './db.datasourceoptions';
import { DataSourceOptions, DataSource } from 'typeorm';

const dsOptions: DataSourceOptions = <DataSourceOptions>{};
Object.assign(dsOptions, DBOptions);

const appDataSource = new DataSource(dsOptions);

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export const AppDataDource = appDataSource;
