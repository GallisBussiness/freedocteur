import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SCHEDULE_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 1100
        }
      }
    ]),
  ],
  exports: [ScheduleService],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}
