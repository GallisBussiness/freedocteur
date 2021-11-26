import { IsEmail, IsOptional, IsString } from 'class-validator';
export enum TYPE_USER {
  MEDECIN = 'MEDECIN',
  PATIENT = 'PATIENT',
}

export enum STATUS_USER {
  ACTIVATE = 'ACTIVATE',
  DISABLED = 'DISABLED',
}

export enum ROLES {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  SECRETAIRE = 'SECRETAIRE',
  USER = 'USER',
}

export class CreateUserDto {
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}
