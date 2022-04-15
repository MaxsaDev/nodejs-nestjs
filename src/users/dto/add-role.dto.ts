import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Назва ролі'})
    readonly value: string;

    @ApiProperty({example: '123', description: 'ID користувача, якому надається роль'})
    readonly userId: number;
}