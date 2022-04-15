import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../role/roles.model";
import {UserRoles} from "../user-roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Унікальний ідентифікатор, який автоматично створюється системою'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@email.com', description: 'Назва поштової скриньки'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'pAssWord123#!', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'false', description: 'Заблокований/не заблокований'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Розсилка спаму', description: 'Причина блокування користувача'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=>Role, ()=> UserRoles)
    roles: Role[];

    @HasMany(()=>Post)
    posts: Post[];
}