import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: IUser[] = [
    { id: 1, name: 'john', age: 28, gender: 'male', isMarried: false },
    { id: 2, name: 'mark', age: 32, gender: 'male', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((d) => d.id === id);
  }

  createUser(user: IUser) {
    this.users.push(user);
  }
}

export interface IUser {
  id: number;
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
}
