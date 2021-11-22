import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/google.strategy';

@Module({
  imports: [
     UserModule,
     AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
