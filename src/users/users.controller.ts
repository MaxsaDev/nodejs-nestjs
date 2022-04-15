import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import { UsersService } from './users.service';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";



@ApiTags('Users (Користувачі)')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary: 'Створення користувача'})
    @ApiResponse({status: 200, type: User})
    //Якщо валідація потрібна тільки на рівні цього endpoint - за допомогою decorator @UsePipes
    //@UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Отримання всіх користувачів'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    //Тільки для авторизованих користувачів
    //@UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Визначення ролей'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Заблокувати користувача'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto);
    }

}
