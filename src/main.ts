//
//npm i -g @nestjs/cli
//npm install --save @nestjs/sequelize sequelize sequelize-typescript
//npm install --save pg pg-hstore
//npm install --save-dev @types/sequelize
//npm i @nestjs/config
//npm i cross-env
//npm i @nestjs/jwt bcryptjs
//
//npm i @nestjs/swagger swagger-ui-express
//
//
//
//nest generate module users
//nest generate controller users
//nest generate service users
//
//nest generate module role
//nest generate controller role
//nest generate service role
//
//nest generate module auth
//nest generate controller auth
//nest generate service auth



import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    //документування @nestjs/swagger
    const config = new DocumentBuilder()
        .setTitle('Backend NodeJS NestJS PostgreSQL')
        .setDescription('Документація REST API')
        .setVersion('1.0.0')
        .addTag('Maxsa GoodJobSpace')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start();