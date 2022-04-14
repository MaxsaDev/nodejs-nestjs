import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import { RoleService } from './role.service';
import {CreateRoleDto} from './dto/create-role.dto';
import {Role} from './roles.model';

@ApiTags('Role (Ролі користувачів)')
@Controller('role')
export class RoleController {

    constructor(private roleService: RoleService) {}

    @ApiOperation({summary: 'Створення ролі'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.roleService.createRole(roleDto);
    }

    @ApiOperation({summary: 'Отримання певної ролі'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value:string) {
        return this.roleService.getRoleByValue(value);
    }
}
