import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { PatientModule } from './patient/patient.module';
import { MedecinModule } from './medecin/medecin.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/freedocteurv2'),
  UserModule,
  PatientModule,
  MedecinModule,
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
