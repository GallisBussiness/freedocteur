import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';


const Options:MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host:'localhost',
    port:1000
  }
}
const logger = new Logger('Main')
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,Options);
   app.listen().then(() => logger.log('userService is listen on port : 1000'));
}
bootstrap();
