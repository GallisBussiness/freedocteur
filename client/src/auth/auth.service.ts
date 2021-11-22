import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService,private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const {data:user} = await this.userService.login(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      data: this.jwtService.sign(payload),
      statusCode: 200
    };
  }
}
