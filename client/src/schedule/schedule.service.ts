import { Injectable, Inject } from '@nestjs/common';
import { Schedule, IPaginate, Slot, Hour } from './dto/schedule.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseServiceInterface } from '../../../schedule-service/src/ResponseServiceInterface';
import * as faker from 'faker/locale/fr';

@Injectable()
export class ScheduleService {

  constructor( @Inject("SCHEDULE_SERVICE") private readonly scheduleProxy: ClientProxy ) { 
    /* const Days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
      for (let id=1; id <= 10; id++) {
        faker.random.number(10, 50)
        const sc: Schedule = { doctorId: faker.random.uuid() , isActive: faker.random.boolean() }
        this.create(sc);
      } */
  }

  /**
   * Create a schedule
   * @param schedule 
   * @returns 
   */
  create(schedule: Schedule) { return this.scheduleProxy.send<string, Schedule>('createSchedule', schedule); }
  
  /**
   * To update a schedule
   * @param schedule 
   * @returns 
   */
  update(schedule: Schedule) { return this.scheduleProxy.send<string, Schedule>('updateSchedule', schedule); }
  
  /**
   * 
   * @param id 
   * @returns 
   */
  toggleActive(id: string) {return this.scheduleProxy.send<string, string>('toggleActive', id);}

  /**
   * To delete a schedule
   * @param id : id of the schedule to remove
   * @returns 
   */
  remove(id: string) { return this.scheduleProxy.send<ResponseServiceInterface, string>('removeSchedule', id); }

  /**
   * To get one schedule corresponding to the param id
   * @param id : id of the schedule to find
   * @returns
   */
  findOne(id: string) { return this.scheduleProxy.send<ResponseServiceInterface, string>('findOneSchedule', id); }
  
  /**
   * To get the list of the schedules 
   * @returns list of schedules
   */
  findAll() { return this.scheduleProxy.send<ResponseServiceInterface, string>('findAllSchedules', ''); }
  
  /**
   * To get a list of the schedules with pagination
   * @param query : page => the offset of the selection, limit => the per page, search => a string for search
   * @returns 
   */
  paginate(query: IPaginate) { return this.scheduleProxy.send<ResponseServiceInterface, IPaginate>('paginateSchedules', query); }
  
  /**
   * To get the schedule of the doctor by ther id
   * @param doctorId : id doctor to get ther schedule
   * @returns a schedule
   */
  findOneByDoctor(doctorId: string) { return this.scheduleProxy.send<ResponseServiceInterface, string>('findOneByDoctorSchedule', doctorId); }
  
  /**
   * 
   * @param doctorId 
   */
  findAllSlotsByDoctor(doctorId: string) { return this.scheduleProxy.send<ResponseServiceInterface, string>('findAllSlotsByDoctor', doctorId); }

  /**
   * Add a new slot to schedule
   * @param data : id => id of the schedule, slot => a new slot to add in the schedule
   * @returns 
   */
  addSlot(payload:{id: string, slot: Slot}) { return this.scheduleProxy.send<string, {id: string, slot: Slot}>('addSlotToSchedule', payload); }
  
  /**
   * 
   * @param id 
   * @param slotId 
   */
  removeSlot(payload: {id: string, slotId: string}) {return this.scheduleProxy.send<ResponseServiceInterface, {id: string, slotId: string}>('removeSlot', payload); }

  /**
   * 
   * @param payload 
   * @returns 
   */
  toggleActiveSlot(payload: {id: string, slotId: string}) { return this.scheduleProxy.send<string, {id: string, slotId: string}>('toggleActiveSlot', payload);  }

  /**
   * 
   * @param payload 
   * @returns 
   */
  addHourToSlot(payload: {id: string, day: string, hour: Hour}) { return this.scheduleProxy.send<string, {id: string, day: string, hour: Hour}>('addHourToSlot', payload); }

  /**
   * 
   * @param payload 
   * @returns 
   */
  removeHourSlot(payload: {id: string, slotId: string, hourId: string}) { return this.scheduleProxy.send<string, {id: string, slotId: string, hourId: string}>('removeHourSlot', payload); }

  /**
   * 
   * @param payload 
   * @returns 
   */
  toggleActiveHourSlot(payload: {id: string, slotId: string, hourId: string}) { return this.scheduleProxy.send<string, {id: string, slotId: string, hourId: string}>('toggleActiveHourSlot', payload); }
}
