import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '123', description: 'ID користувача, якого заблоковано'})
    readonly userId: number;

    @ApiProperty({example: 'Спам', description: 'Причина, за якою користувача було заборонено'})
    readonly banReason: string;
}