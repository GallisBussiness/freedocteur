import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { tap, map } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req): Promise<ResponseServiceInterface> {
    return this.authService.login(req.user);
  }

  // @Get('auth/google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req){}

  // @Get('auth/google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleAuthCallback(@Req() req){
  //   if(!req.user) throw new BadRequestException();
  //     const { email } = req.user;
  //     return  this.authService.signinFromGoogle(email);
  // }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const result = await this.userService.create(createUserDto);
    return result.pipe(tap((res) => console.log(res)));
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAll().pipe(
      tap((res) => console.log(res)),
      map((res) => {
        return res;
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id).pipe(tap((res) => console.log(res)));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService
      .update(id, updateUserDto)
      .pipe(tap((res) => console.log(res)));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
