import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './config/postgres.config';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forRoot(postgresConfig), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
