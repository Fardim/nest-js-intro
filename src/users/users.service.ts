import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [
    {
      id: 1,
      name: 'john',
      email: 'john@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((d) => d.id === id);
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
  }
}

