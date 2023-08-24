import { ProgramService } from './../program/program.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLevelDto } from 'src/common/dto/level/level-create.dto';
import { LevelEntity } from 'src/common/entities/level';
import { ProgramEntity } from 'src/common/entities/program';
import { UserEntity } from 'src/common/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelEntity)
    private levelRepository: Repository<LevelEntity>,
    @InjectRepository(ProgramEntity)
    private programService: ProgramService,
  ) {}

  async all(): Promise<LevelEntity[]> {
    return await this.levelRepository.find();
  }

  async createLevel(dto: CreateLevelDto,level): Promise<LevelEntity> {
    const {grade,programId}=dto
    // Create the level
    const level = await this.levelRepository.create({
      ...dto,  
        grade  :dto.grade
  });

  // // Associate the program with a level
  // if (programId) {
  //     console.log('programId',programId)
  //     const program = await this.programService.findProgramById(programId);
  //     console.log(program)
  //     if (program) {
  //       level.program = program;
  //         await this.levelRepository.save(program);
  //     }
  // }
  return level
}


  async findLevelById(id: number): Promise<LevelEntity | undefined> {
    return this.levelRepository.findOne({ where: { id } });
  }
}
