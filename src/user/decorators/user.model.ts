import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

enum EnumGender {
  'male' = 'male',
  'female' = 'female',
}

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  name: string;

  @prop({ default: false })
  isVerified: boolean;

  @prop()
  birthDate: string;

  @prop({ enum: EnumGender })
  gender: string;

  @prop()
  city: string;

  @prop()
  avatarPath: string;
}
