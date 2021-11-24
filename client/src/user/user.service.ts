import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UserService {

  constructor(@Inject('USER_SERVICE') private user: ClientProxy,) {}

  async create(createUserDto: CreateUserDto) {
    const {password} = createUserDto
     const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      createUserDto = {...createUserDto,password:hash}
    return this.user.send<string,CreateUserDto>('createUser',createUserDto);
  }

  login(username: string):Promise<ResponseServiceInterface> {
    return new Promise((resolve,reject) => {
       this.user.send<ResponseServiceInterface,string>('login',username).subscribe(d => resolve(d),(err) => reject(err));
    })
  
  }

  regsiterUserFromGoogle(email: string) {
    return this.user.send<ResponseServiceInterface,string>('registerFromGoogle',email);
  }

  findAll() {
    return this.user.send<ResponseServiceInterface,string>('findAllUser','');
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string):Observable<ResponseServiceInterface> {
    return this.user.send<ResponseServiceInterface,string>('removeUser',id)
    .pipe(
      tap(res => console.log(res))
    )
  }
}
