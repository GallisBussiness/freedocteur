import { Types } from 'mongoose';

export class CreateMedecinDto {
  firstName: string;
  lastName: string;
  userId: Types.ObjectId;
}
