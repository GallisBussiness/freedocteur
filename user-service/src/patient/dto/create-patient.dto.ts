import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class CreatePatientDto {
    firstName: string
    adresse:string
    lastName: string
    user: Types.ObjectId;
}
