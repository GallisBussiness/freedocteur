import { Types } from 'mongoose';

export class CreateMedecinDto {
  username?: string;
  firstName?: string;
  lastName?: string;
  userId?: Types.ObjectId;
  adresse?: string;
  phoneNumber?: string;
  email?: string;
  description?: string;
  speciality?: string;
}
