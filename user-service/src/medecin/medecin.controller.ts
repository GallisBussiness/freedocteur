import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MedecinService } from './medecin.service';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { CreateMedecinUserDto } from './dto/createMedecinUserDto';
import { Types } from 'mongoose';

@Controller()
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @MessagePattern('createMedecin')
  create(@Payload() createMedecinUserDto: CreateMedecinUserDto) {
    return this.medecinService.create(createMedecinUserDto);
  }

  @MessagePattern('findAllMedecin')
  findAll() {
    return this.medecinService.findAll();
  }

  @MessagePattern('findOneMedecin')
  findOne(@Payload() id: Types.ObjectId) {
    return this.medecinService.findOne(id);
  }

  @MessagePattern('updateMedecin')
  update(@Payload() updateMedecinDto: UpdateMedecinDto) {
    return this.medecinService.update(updateMedecinDto.id, updateMedecinDto);
  }

  @MessagePattern('removeMedecin')
  remove(@Payload() id: number) {
    return this.medecinService.remove(id);
  }
}
