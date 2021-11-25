import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule, Slot, IPaginate, Hour } from './dto/schedule.dto';
import { tap, map } from 'rxjs';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  create(@Body() schedule: Schedule) { return this.scheduleService.create(schedule); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() schedule: Schedule) { return this.scheduleService.update(schedule); }

  @Delete('toggleActive/:id')
  toggleActive(@Param('id') id: string) { return this.scheduleService.toggleActive(id); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.scheduleService.remove(id); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.scheduleService.findOne(id); }

  @Get()
  findAll() { return this.scheduleService.findAll().pipe( tap(res => console.log(res)), map( res  => { return  res; }) ); }

  @Get('paginate')
  paginate(@Query() query: IPaginate) { return this.scheduleService.paginate(query).pipe( tap(res => console.log(res)), map( res  => { return  res; }) ); }

  @Get('/slot-doctor/:id')
  findOneByDoctor(@Param('id') id: string) { return this.scheduleService.findOneByDoctor(id);  }

  @Get('/slots-doctor/:id')
  findAllSlotsByDoctor(@Param('id') doctorId: string) { return this.scheduleService.findAllSlotsByDoctor(doctorId); }

  @Post('slot-add')
  addSlot(@Body() data: {id: string, slot: Slot}) { return this.scheduleService.addSlot(data); }
  
  @Patch('slot-remove')
  removeSlot(@Body() payload: { id: string, slotId: string }) { return this.scheduleService.removeSlot(payload); }
  
  @Patch('slots-toggle-active')
  toggleActiveSlot(@Body() payload: { id: string, slotId: string }) { return this.toggleActiveSlot(payload); }
  
  @Post('hour-slot-add')
  addHourToSlot(@Body() payload: { id: string, day: string, hour: Hour }) { return this.addHourToSlot(payload); }
  
  @Patch('hour-slot-remove')
  removeHourSlot(@Body() payload: { id: string, slotId: string, hourId: string }) { this.scheduleService.removeHourSlot(payload); }
  
  @Patch('hour-toggle-active')
  toggleActiveHourSlot(@Body() payload: { id: string, slotId: string, hourId: string }) { return this.toggleActiveHourSlot(payload); }
}
