import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../role/roles.model";
import {UserRoles} from "../user-roles/user-roles.model";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userid: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs>{
    @ApiProperty({example: '1', description: 'Унікальний ідентифікатор, який автоматично створюється системою'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Назва матеріалу', description: 'Назва матеріалу'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'Текст матеріалу', description: 'Текст матеріалу'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'image.jpg', description: 'Зображення матеріалу'})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: '123', description: 'ID користувача - автора матеріалу'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(()=> User)
    author: User;
}