import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  getUser(): string {
    return 'Get Users ';
  }

  @Post()
  postUser(): string {
    return 'Post Users ';
  }
}

