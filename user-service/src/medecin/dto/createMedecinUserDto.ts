import { Types } from 'mongoose';

export class CreateMedecinUserDto {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  userId: Types.ObjectId;
}
