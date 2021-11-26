import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedecinDocument = Medecin & Document;

@Schema()
export class Medecin {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  userId: string;
}

export const MedecinSchema = SchemaFactory.createForClass(Medecin);
