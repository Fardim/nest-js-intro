import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsString({ message: 'Name should be a string value' })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  gender?: string;

  isMarried: boolean;
}
