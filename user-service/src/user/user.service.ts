import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<ResponseServiceInterface> {
    const { username } = createUserDto;
    const { data: u } = await this.findByUsername(username);
    if (u) return new BadRequestException();
    const createdUser = new this.userModel(createUserDto);
    const user = await createdUser.save();
    return { data: user, statusCode: 200 };
  }

  // async registerFromGoogle(username): Promise<ResponseServiceInterface> {
  //   const newUserFromGoogle = {
  //     username,
  //     isResgisteredFromGoogle: true,
  //     type_user: TYPE_USER.PATIENT,
  //   };
  //   const createdUser = new this.userModel(newUserFromGoogle);
  //   const user = await createdUser.save();
  //   return { data: user, statusCode: 200 };
  // }

  async findAll(): Promise<ResponseServiceInterface> {
    const users = await this.userModel.find().exec();
    return { data: users, statusCode: 200 };
  }

  async findOne(id: Types.ObjectId): Promise<ResponseServiceInterface> {
    const user = await this.userModel.findOne({ id: new Types.ObjectId(id) });
    return { data: user, statusCode: 200 };
  }

  async findByUsername(username: string): Promise<ResponseServiceInterface> {
    const user = await this.userModel.findOne({ username }).exec();
    return { data: user, statusCode: 200 };
  }

  async update(id: Types.ObjectId, updateUserDto: UpdateUserDto) {
    try {
      const result = await (
        await this.userModel.updateOne(
          { id: new Types.ObjectId(id) },
          updateUserDto,
        )
      ).acknowledged;
      return { data: result, statusCode: 200 };
    } catch (e) {
      return { data: false, statusCode: 500 };
    }
  }

  async remove(id: string): Promise<ResponseServiceInterface> {
    const r = await (
      await this.userModel.deleteOne({ id: new Types.ObjectId(id) })
    ).acknowledged;
    return { data: r, statusCode: 200 };
  }
}
