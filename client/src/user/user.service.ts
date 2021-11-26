import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable, tap } from 'rxjs';
import { hashFromRequest } from 'src/utils/hash-from-request';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private user: ClientProxy) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto = await hashFromRequest(createUserDto);
    return this.user.send<string, CreateUserDto>('createUser', createUserDto);
  }

  login(username: string): Promise<ResponseServiceInterface> {
    return new Promise((resolve, reject) => {
      this.user
        .send<ResponseServiceInterface, string>('login', username)
        .subscribe(
          (d) => resolve(d),
          (err) => reject(err),
        );
    });
  }

  regsiterUserFromGoogle(email: string) {
    return this.user.send<ResponseServiceInterface, string>(
      'registerFromGoogle',
      email,
    );
  }

  findAll() {
    return this.user.send<ResponseServiceInterface, string>('findAllUser', '');
  }

  findOne(id: string) {
    return this.user.send<ResponseServiceInterface, string>('findOneUser', id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updateObj = { ...updateUserDto, id };
    return this.user.send<ResponseServiceInterface, UpdateUserDto>(
      'updateUser',
      updateObj,
    );
  }

  remove(id: string): Observable<ResponseServiceInterface> {
    return this.user
      .send<ResponseServiceInterface, string>('removeUser', id)
      .pipe(tap((res) => console.log(res)));
  }
}
