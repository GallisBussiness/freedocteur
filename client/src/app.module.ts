import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { GoogleStrategy } from './auth/google.strategy';
import { DoctorModule } from './doctor/doctor.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
     UserModule,
     AuthModule,
     DoctorModule,
     ScheduleModule,
  ],
  controllers: [AppController],
  providers: [GoogleStrategy],
})
export class AppModule {}
