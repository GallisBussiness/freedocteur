import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';

@Injectable()
export class MedecinService {
  create(createMedecinDto: CreateMedecinDto) {
    return 'This action adds a new medecin';
  }

  findAll() {
    return `This action returns all medecin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medecin`;
  }

  update(id: Types.ObjectId, updateMedecinDto: UpdateMedecinDto) {
    return `This action updates a #${id} medecin`;
  }

  remove(id: number) {
    return `This action removes a #${id} medecin`;
  }
}
