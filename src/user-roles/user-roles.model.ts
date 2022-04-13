import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "../role/roles.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({example: '1', description: 'Унікальний ідентифікатор, який автоматично створюється системою'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '123', description: 'ID корисувача'})
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @ApiProperty({example: '123', description: 'ID ролі користувача'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    roleId: number;

}