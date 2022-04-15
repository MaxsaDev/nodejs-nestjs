import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Назва поштової скриньки'})
    @IsString({message: 'Це має бути строка'})
    @IsEmail({}, {message: 'Поштова адреса вказана некоректно'})
    readonly email: string;

    @ApiProperty({example: 'pAssWord123#!', description: 'Пароль'})
    @IsString({message: 'Це має бути строка'})
    @Length(4, 16, {message: 'не менш 4 та не більше 16 символів'})
    readonly password: string;
}