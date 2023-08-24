import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from 'src/common/entities/level';
import { UserModule } from '../user/user.module';
import { ProgramEntity } from 'src/common/entities/program';

@Module({
  imports:[TypeOrmModule.forFeature([LevelEntity,ProgramEntity]),UserModule,LevelModule],
  providers: [LevelService],
  controllers: [LevelController],
  exports:[LevelService]
})
export class LevelModule {}
