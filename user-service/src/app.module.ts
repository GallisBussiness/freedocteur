import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { PatientModule } from './patient/patient.module';
import { MedecinModule } from './medecin/medecin.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './rpc-exception.filter';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/freedocteurv2'),
    UserModule,
    PatientModule,
    MedecinModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class AppModule {}
