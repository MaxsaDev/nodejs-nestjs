import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { RoleModule } from './role/role.module';
import {User} from "./users/users.model";
import {Role} from "./role/roles.model";
import {UserRoles} from "./user-roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true, //щоб Sequelize створював таблиці на підставі моделей в програмі
        }),
        UsersModule,
        RoleModule,
        AuthModule,
        PostsModule,
        FilesModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
    ],
})
export class AppModule {

}