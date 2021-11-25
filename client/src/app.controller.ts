import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req){}
  
    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthCallback(@Req() req){
      return req.user ?? 'no user from google';
    }
}
