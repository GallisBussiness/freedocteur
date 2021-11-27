import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateMedecinDto {
  @IsOptional()
  @IsEmail()
  username: string;

  
  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  adresse: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  speciality: string;
}
