import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    name: string;
    isVerified: boolean;
    birthDate: string;
    city: string;
    gender: string;
    avatarPath: string;
    friends: Ref<UserModel>[];
}
