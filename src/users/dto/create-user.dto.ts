import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Назва поштової скриньки'})
    readonly email: string;

    @ApiProperty({example: 'pAssWord123#!', description: 'Пароль'})
    readonly password: string;
}