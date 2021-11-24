import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './entities/patient.entity';

@Injectable()
export class PatientService {

  constructor(@InjectModel(Patient.name) private patientModel: Model<PatientDocument>){}

  async create(createPatientDto: CreatePatientDto): Promise<ResponseServiceInterface>{
    const createdPatient = new this.patientModel(createPatientDto);
    const patient =  await createdPatient.save();
    return {data:patient,statusCode:200}
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: Types.ObjectId, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
