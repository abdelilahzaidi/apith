import { LevelModule } from './../level/level.module';
import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramEntity } from 'src/common/entities/program';
import { UserModule } from '../user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([ProgramEntity]),UserModule],
  providers: [ProgramService],
  controllers: [ProgramController],
  exports:[ProgramService]
})
export class ProgramModule {}
