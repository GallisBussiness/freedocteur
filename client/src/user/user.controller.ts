import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { tap, map, catchError, of } from 'rxjs';
import { LoginUserDto } from './dto/login-user-dto';
import { AuthGuard } from '@nestjs/passport';
import { ResponseServiceInterface } from '../ResponseServiceInterface';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) {}


  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req):Promise<ResponseServiceInterface> {
    return this.authService.login(req.user);
  }


  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result =  await this.userService.create(createUserDto)
    result.pipe(
      tap(res => console.log(res))
    );
  }
 
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAll()
    .pipe(
      tap(res => console.log(res)),
      map( res  => {
        return  res;
      })
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
