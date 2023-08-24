import { UserEntity } from './../../common/entities/user';
import { ConflictException, ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException, Put, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDTO } from 'src/common/dto/user/user-create.dto';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignUpDTO } from 'src/common/dto/auth/signup.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity>
    ){
       
    }
    async all():Promise<UserEntity[]>{
        return await this.userRepository.find();
    }
    async create(data, ids:number[]): Promise<UserEntity> {
        return this.userRepository.save(data);
    }

    async update(id: number, data): Promise<any> {
        return this.userRepository.update(id, data)
    }

    async delete(id: number): Promise<any> {
        return this.userRepository.delete(id);
    }










    //Find a user by email
    async findOneByEmail(email : string): Promise<any> {
        return this.userRepository.findOne({where:{email}});
    }
    //Find a user by id
    async findOneById(id : number): Promise<any> {
        return this.userRepository.findOne({where:{id}});
    }

    async createUser(dto :SignUpDTO):Promise<UserEntity>{ 
          
        console.log("DTO ",dto)
        
    const hashedPassword = await bcrypt.hash("Zah14$01471983", 12);

    try {
        const user = await this.userRepository.save({
            ...dto,
            password: hashedPassword,
            attributionDate: new Date()            
        });
        console.log("user ",user)
        return user;
    } catch (error) {
        if (error.code = 11000) {
            throw new ConflictException('Duplicate Email!!');
        }
        throw error;
    }
        
    }

    async findUserStatusByUserId(id: any) {
        const user = await this.userRepository.findOne({where:{id}})
    
        if(!user) {
          throw new HttpException('No user found by Id', HttpStatus.NOT_FOUND)
        }
    
        return user.status
      }




  

    
}
