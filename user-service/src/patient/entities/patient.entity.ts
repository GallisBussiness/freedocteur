import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/user/entities/user.entity";
import * as mongoose from 'mongoose';

export type PatientDocument = Patient & Document;

export class Patient {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    adresse: string

    @Prop()
    telephone: string

    @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
