import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TYPE_USER {
  MEDECIN = "MEDECIN",
  PATIENT = "PATIENT"
}

export type UserDocument = User & Document;

@Schema()
export class User {
  username: string;
  password?: string;
  type_user: TYPE_USER;
}

export const UserSchema = SchemaFactory.createForClass(User);