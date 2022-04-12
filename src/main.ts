//
//npm i -g @nestjs/cli
//npm install --save @nestjs/sequelize sequelize sequelize-typescript
//npm install --save pg pg-hstore
//npm install --save-dev @types/sequelize
//npm i @nestjs/config
//npm i cross-env
//
//nest generate module users
//nest generate controller users
//nest generate service users




import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start();