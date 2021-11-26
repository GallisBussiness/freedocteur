import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/user/entities/user.entity";
import { Document, Types} from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    adresse: string

    @Prop()
    telephone: string

    @Prop({required: true, type: Types.ObjectId, ref: 'User' })
    user: User;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
