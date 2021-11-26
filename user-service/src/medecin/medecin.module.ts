import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medecin, MedecinSchema } from './entities/medecin.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medecin.name, schema: MedecinSchema }]),
    UserModule,
  ],
  controllers: [MedecinController],
  providers: [MedecinService],
})
export class MedecinModule {}
