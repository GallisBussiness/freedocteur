import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';

@Module({
  controllers: [MedecinController],
  providers: [MedecinService]
})
export class MedecinModule {}
