"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
exports.postgresConfig = {
    type: 'postgres',
    host: '18.231.114.17',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'invitation',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=postgres.config.js.map