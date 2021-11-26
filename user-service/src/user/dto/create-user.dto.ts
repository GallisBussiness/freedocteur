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
  username: string;
  password: string;
  type_user: TYPE_USER;
  status: STATUS_USER;
  role: ROLES;
}
