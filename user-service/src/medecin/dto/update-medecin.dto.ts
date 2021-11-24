import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreateMedecinDto } from './create-medecin.dto';

export class UpdateMedecinDto extends PartialType(CreateMedecinDto) {
  id: Types.ObjectId;
}
