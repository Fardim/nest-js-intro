import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  // getUsers(@Query() query: any) { query.gender query.isMarried
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page); // Male directly
    return this.userService.getAllUsers();
  }

  @Get(':id')
  // getUserById(@Param() param: any) { param.id
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id, id);
    return this.userService.getUserById(id);
  }

  @Post('createUser')
  // createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
  createUser(@Body() user: CreateUserDto) { // ValidationPipe is handled globally in main.ts file
    this.userService.createUser(user);
    return 'A new user is created';
  }
}
