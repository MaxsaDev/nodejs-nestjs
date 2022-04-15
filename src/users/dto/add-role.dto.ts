import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Назва ролі'})
    @IsString({message: 'Це має бути строка'})
    readonly value: string;

    @ApiProperty({example: '123', description: 'ID користувача, якому надається роль'})
    @IsNumber({},{message: 'Це має бути число'})
    readonly userId: number;
}