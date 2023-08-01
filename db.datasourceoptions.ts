const dbOptions = {
  entities: [__dirname + '/**/*.entity{.js,.ts}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.js'],
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbOptions, {
      type: 'sqlite',
      database: 'db.sqlite',
    });
    break;
  case 'test':
    Object.assign(dbOptions, {
      type: 'sqlite',
      database: 'test.sqlite',
      migrationsRun: true,
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('unknown environment');
}

export const DBOptions = dbOptions;
