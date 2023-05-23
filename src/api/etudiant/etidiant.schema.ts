import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IEtudiant } from './types';

export type EtudiantDocument = HydratedDocument<IEtudiant>;

@Schema()
export class Etudiant {
  @Prop()
  nom: string;

  @Prop()
  prenom: string

  @Prop()
  id_etudiant: string;
}
export const EtudiantSchema = SchemaFactory.createForClass(Etudiant);