import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/freedocteurv2'),
  UserModule,
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
