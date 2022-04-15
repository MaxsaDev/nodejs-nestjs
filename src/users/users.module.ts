import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User} from './users.model';
import {Role} from '../role/roles.model';
import {UserRoles} from '../user-roles/user-roles.model';
import {RoleModule} from '../role/role.module';
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RoleModule,
        //forwardRef - запобігає помилці зациклювання imports/exports
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService,
    ],
})
export class UsersModule {
}
