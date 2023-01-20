import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '18.231.114.17',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'invitation',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
