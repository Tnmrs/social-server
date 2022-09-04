import { IsEnum, IsString } from 'class-validator';
import { EnumGender } from './user.interface';
export class UserDto {
  @IsString()
  name: string;

  @IsString()
  avatarPath: string;

  @IsString()
  birth: string;

  @IsEnum(EnumGender)
  gender: string;

  @IsString()
  city: string;
}
