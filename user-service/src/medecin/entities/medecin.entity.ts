import { Prop } from "@nestjs/mongoose";

export enum STATE {
    PAYE = "PAYE",
    NOTPAYE = "NOTPAYE",
  }
export class Medecin {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    description: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    adresse: string;

    @Prop()
    state: STATE;

    @Prop()
    speciality: string;

    @Prop()
    nationality: string;

    @Prop()
    photo: string;
}
