import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { tap } from 'rxjs';

@Controller('medecin')
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @Post()
  async create(@Body() createMedecinDto: CreateMedecinDto) {
    const res =  await this.medecinService.create(createMedecinDto);
     return res.pipe(tap((res) => console.log(res)));
  }

  @Get()
  findAll() {
    return this.medecinService.findAll().pipe(tap((res) => console.log(res)));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medecinService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedecinDto: UpdateMedecinDto) {
    return this.medecinService.update({ ...updateMedecinDto, id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medecinService.remove(id);
  }
}
