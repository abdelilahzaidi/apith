import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramCreateDTO } from 'src/common/dto/program/program-create.dto';
import { ProgramEntity } from 'src/common/entities/program';

@Controller('program')
export class ProgramController {
    constructor(
        private readonly programService: ProgramService,
        //private readonly levelService: LevelService,
      ) {}

  @Get('')
  async all():Promise<ProgramEntity[]>{
    return await this.programService.all();
  }


    @Post('')
  async createProgram(
    
    @Body() dto: ProgramCreateDTO,
  ) {

    return await this.programService.createProgram(dto);
  }


  










}
