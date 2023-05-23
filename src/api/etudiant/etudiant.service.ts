import { Injectable } from '@nestjs/common';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Etudiant } from './etidiant.schema';
import { Model } from 'mongoose';

@Injectable()
export class EtudiantService {
  constructor(@InjectModel(Etudiant.name) private etudiantModel: Model<Etudiant>) {}

  async create(createCatDto: any): Promise<Etudiant> {
    const createdCat = new this.etudiantModel(createCatDto);
    return createdCat.save();
  
  }

  findAll() {
    return `This action returns all etudiant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etudiant`;
  }

  update(id: number, updateEtudiantDto: UpdateEtudiantDto) {
    return `This action updates a #${id} etudiant`;
  }

  remove(id: number) {
    return `This action removes a #${id} etudiant`;
  }
}
