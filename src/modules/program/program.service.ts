import { LevelEntity } from './../../common/entities/level';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramCreateDTO } from 'src/common/dto/program/program-create.dto';
import { ProgramEntity } from 'src/common/entities/program';
import { UserEntity } from 'src/common/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
    constructor(
        @InjectRepository(ProgramEntity)
        private programRepository: Repository<ProgramEntity>,
      ) {}

      async all():Promise<ProgramEntity[]>{
        return await this.programRepository.find();
      }
    
      async createProgram(dto: ProgramCreateDTO): Promise<ProgramEntity> {
        const newProgram = this.programRepository.create(dto); // Utilisation de 'dto' au lieu de 'document'
        
        
        return this.programRepository.save(newProgram);
      }
    async findProgramById(id: number): Promise<ProgramEntity | undefined> {
      return this.programRepository.findOne({ where: { id } });
    }
}
