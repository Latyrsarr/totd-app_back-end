import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantModule } from './api/etudiant/etudiant.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EtudiantModule, MongooseModule.forRoot('mongodb+srv://sarrlatyr23:Ramou1965@cluster0.mfhcgvi.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
