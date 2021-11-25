import { Prop } from "@nestjs/mongoose";

export class CreateUserDto {
    @Prop()
    username: string;
  
    @Prop()
    password: string;
  
    @Prop()
    role: string;
}
