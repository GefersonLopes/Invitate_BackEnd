import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: 'postgres://emyahopy:eebNTI5F7XaCmjccklb65Kttj6Bps4gW@babar.db.elephantsql.com/emyahopy',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
