import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'Administrator', description: 'Назва ролі користувача'})
    readonly value: string;

    @ApiProperty({example: 'Роль "Адміністратор" має доступ до Адміністративної причини', description: 'Опис ролі'})
    readonly description: string;
}