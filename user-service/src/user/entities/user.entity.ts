import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ROLES, STATUS_USER, TYPE_USER } from '../dto/create-user.dto';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password?: string;

  @Prop({ default: TYPE_USER.PATIENT })
  type_user: TYPE_USER;

  @Prop({ default: STATUS_USER.DISABLED })
  status: STATUS_USER;

  @Prop({ default: ROLES.USER })
  role: ROLES;
}

export const UserSchema = SchemaFactory.createForClass(User);
