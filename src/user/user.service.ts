import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';

import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { UserDto } from './user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>) {}
  async getUser(_id: Types.ObjectId) {
    return this.UserModel.aggregate()
      .match({ _id })
      .lookup({
        from: 'Post',
        foreignField: 'user',
        localField: '_id',
        as: 'posts',
      })
      .addFields({
        postsCount: {
          $size: '$posts',
        },
      })

      .project({ __v: 0, posts: 0 })
      .exec()
      .then((data) => data[0]);
  }

  async byId(_id: Types.ObjectId) {
    const user = await this.UserModel.findById(_id, '-__v');
    if (!user) throw new UnauthorizedException('User not found');

    return user;
  }

  async updateProfile(_id: Types.ObjectId, dto: UserDto) {
    const user = await this.byId(_id);

    user.name = dto.name;
    user.city = dto.city;
    user.gender = dto.gender;
    user.avatarPath = dto.avatarPath;
    user.birthDate = dto.birthDate;

    return await user.save();
  }
}
