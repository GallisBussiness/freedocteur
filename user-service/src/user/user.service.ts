import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose, Types } from 'mongoose';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TYPE_USER, User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
   
 async  create(createUserDto: CreateUserDto): Promise<ResponseServiceInterface>{
    const createdUser = new this.userModel(createUserDto);
    const user =  await createdUser.save();
    return {data:user,statusCode:200}
  }

  async  registerFromGoogle(username): Promise<ResponseServiceInterface>{
    
    const newUserFromGoogle = {username,isResgisteredFromGoogle:true,type_user:TYPE_USER.PATIENT};
    const createdUser = new this.userModel(newUserFromGoogle);
    const user =  await createdUser.save();
    return {data:user,statusCode:200}
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

  update(id: Types.ObjectId, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userModel.deleteOne({id:new Types.ObjectId(id)});
  }

}
