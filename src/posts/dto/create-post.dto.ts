import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Назва матеріалу', description: 'Назва матеріалу'})
    readonly title: string;

    @ApiProperty({example: 'Текст матеріалу', description: 'Текст матеріалу'})
    readonly content: string;

    @ApiProperty({example: '123', description: 'ID користувача - автора матеріалу'})
    readonly userId: number;
}