import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { hashFromRequest } from 'src/utils/hash-from-request';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';

@Injectable()
export class MedecinService {
  constructor(@Inject('MEDECIN_SERVICE') private medecin: ClientProxy) {}

  async create(createMedecinDto: CreateMedecinDto) {
    createMedecinDto = await hashFromRequest(createMedecinDto);
    return this.medecin.send<ResponseServiceInterface, CreateMedecinDto>(
      'createMedecin',
      createMedecinDto,
    );
  }

  findAll() {
    return this.medecin.send<ResponseServiceInterface>('findAllMedecin', '');
  }

  findOne(id: string) {
    return this.medecin.send<ResponseServiceInterface, string>(
      'findOneMedecin',
      id,
    );
  }

  update(updateMedecinDto: UpdateMedecinDto) {
    const { id } = updateMedecinDto;
    return `This action updates a #${id} medecin`;
  }

  remove(id: string) {
    return `This action removes a #${id} medecin`;
  }
}
