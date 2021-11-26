import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MedecinModule } from './medecin/medecin.module';

@Module({
  imports: [UserModule, AuthModule, MedecinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
