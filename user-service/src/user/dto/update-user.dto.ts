import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: Types.ObjectId;
}
