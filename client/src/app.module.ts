import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { GoogleStrategy } from './auth/google.strategy';

@Module({
  imports: [
     UserModule,
     AuthModule,
  ],
  controllers: [AppController],
  providers: [GoogleStrategy],
})
export class AppModule {}
