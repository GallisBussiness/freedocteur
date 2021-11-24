import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  id: Types.ObjectId;
}
