import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { Etudiant, EtudiantSchema } from './etidiant.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { IEtudiant } from './types';

@Module({
  imports: [MongooseModule.forFeature([{ name: Etudiant.name, schema: EtudiantSchema }])],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
