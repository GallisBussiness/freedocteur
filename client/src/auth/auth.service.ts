import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private userService: UserService,private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const {data:user} = await this.userService.login(username);
    console.log(user.password,pass);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(user) {
    const payload = { username: user.username, sub: user._id };
    return {
      data: this.jwtService.sign(payload,{expiresIn:'1h'}),
      statusCode: 200
    };
  }
  // async verifyFromGoogle(username:string) {
  //   const {data:user} = await this.userService.login(username);
  //   if (user && user.isResgisteredFromGoogle) {
  //     return user;
  //   }
  //   return null;
  // }


  // async signinFromGoogle(email) {
  //   const {data:user} = await this.verifyFromGoogle(email);
  //   if (user) {
  //    return this.login(user);
  //   }
  //   const {data:userFromService} =  await this.userService.regsiterUserFromGoogle(email).toPromise();

  //   return this.login(userFromService);
  // }

}
