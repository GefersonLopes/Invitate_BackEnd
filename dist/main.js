"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors({
        origin: [
            '*',
            'http://localhost:3000',
            'http://localhost:3001',
            'https://sharenergy-sandy.vercel.app',
        ],
        methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
        allowedHeaders: [
            'Accept',
            'Accept-Version',
            'Content-Type',
            'Api-Version',
            'Origin',
            'X-Requested-With',
            'Authorization',
            'Access-Control-Allow-Headers',
            'Origin,Accept',
            'X-Requested-With',
            'Content-Type',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials',
            'Access-Control-Expose-Headers',
            'Access-Control-Allow-Methods',
        ],
        credentials: true,
        exposedHeaders: ['API-Token-Expiry'],
    });
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API MKS')
        .setDescription('Technical test')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map