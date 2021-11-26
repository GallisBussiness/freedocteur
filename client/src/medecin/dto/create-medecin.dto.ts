import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateMedecinDto {

  @IsEmail()
  username: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  adresse: string;

  @IsOptional()
  phoneNumber: string;

  @IsOptional()
  email: string;

  @IsOptional()
  description: string;

  @IsOptional()
  speciality: string;
}
