import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { IUser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  // getUsers(@Query() query: any) { query.gender query.isMarried
  getUsers(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
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

  @Post()
  createUser() {
    const user: IUser = {
      id: 3,
      name: 'Marry',
      age: 23,
      gender: 'female',
      isMarried: false,
    };
    this.userService.createUser(user);
    return 'A new user is created';
  }
}
