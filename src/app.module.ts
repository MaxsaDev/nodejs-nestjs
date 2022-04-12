import {Module} from "@nestjs/common";
import { AppController } from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.HOST,
            port: 5432,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            models: [],
            autoLoadModels: true, //щоб Sequelize створював таблиці на підставі моделей в програмі
        }),
    ],
})
export class AppModule {

}