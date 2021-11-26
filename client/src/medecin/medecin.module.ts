import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [  ClientsModule.register([
    { name: 'MEDECIN_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 1000,} },]),],
  controllers: [MedecinController],
  providers: [MedecinService]
})
export class MedecinModule {}
