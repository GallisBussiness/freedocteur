import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MedecinService } from './medecin.service';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';

@Controller()
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @MessagePattern('createMedecin')
  create(@Payload() createMedecinDto: CreateMedecinDto) {
    return this.medecinService.create(createMedecinDto);
  }

  @MessagePattern('findAllMedecin')
  findAll() {
    return this.medecinService.findAll();
  }

  @MessagePattern('findOneMedecin')
  findOne(@Payload() id: number) {
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
