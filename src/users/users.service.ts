import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {RoleService} from "../role/role.service";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private userRepository: typeof User,
        private roleService: RoleService
    ) {}

    async createUser(dto: CreateUserDto) {
        console.log('DTO: ', dto);
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id])
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }
}
