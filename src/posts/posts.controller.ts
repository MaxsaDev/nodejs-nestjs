import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService){}

    @ApiOperation({summary: 'Створення матеріалу'})
    @ApiResponse({status: 200, type: Post})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(
        @Body() dto: CreatePostDto,
        @UploadedFile() image
    ){
        return this.postService.create(dto, image);
    }
}
