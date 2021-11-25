import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
   
  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

 async findAll(): Promise<ResponseServiceInterface>{
    const users = await this.userModel.find().exec();
    return {data:users,statusCode:200}
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByUsername(username: string): Promise<ResponseServiceInterface>{
    const user = await this.userModel.findOne({username}).exec();
    return {data:user,statusCode:200};
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

}
