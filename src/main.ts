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
//npm i class-validator class-transformer
//npm install --save @nestjs/serve-static
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
//
//nest generate module posts
//nest generate controller posts
//nest generate service posts
//
//nest generate module files
//nest generate controller files
//nest generate service files


import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import {ValidationPipe} from "@nestjs/common";

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

    //якщо є необхідність контролю доступу до застосунку виключно авторизованим користувачам
    //app.useGlobalGuards(JwtAuthGuard);

    //валідацію на рівні всього застосунку можно визначити тут
    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start();