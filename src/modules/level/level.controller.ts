import { CreateLevelDto } from 'src/common/dto/level/level-create.dto';
import { Body, Post, Controller, Get } from '@nestjs/common';
import { LevelService } from './level.service';
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/common/entities/user';
import { LevelEntity } from 'src/common/entities/level';

@Controller('level')
export class LevelController {
    constructor(
        private readonly levelService: LevelService,
        private readonly userService: UserService, // Assuming you have a UserService
      ) {}
      @Get()
      async all():Promise<LevelEntity[]>{
        return await this.levelService.all()
        
      }
    
      @Post()
      async create(@Body() dto : CreateLevelDto): Promise<LevelEntity> {
        console.log(dto)
        return this.levelService.createLevel(dto);
      }
}
