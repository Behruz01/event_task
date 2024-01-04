import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/infra/entities/admin.entity';
import { AdminRepo } from 'src/infra/repositories/admin.repo';
import * as bcrypt from "bcrypt"
import { Not } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity) private readonly repo: AdminRepo
  ) { }
  async create(createAdminDto: CreateAdminDto) {
    try {
      const { full_name, email, password } = createAdminDto
      const findAdmin = await this.repo.findOne({ where: { email } });
      if (findAdmin)
        throw new HttpException('Admin already exists!', HttpStatus.CONFLICT);

      const hashedPass = await bcrypt.hash(password, 12)
      const data = this.repo.create({ full_name, email, password: hashedPass })
      await this.repo.save(data)

      return { message: "Admin created successfully" }
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const data = await this.repo.find()
      return data
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.repo.findOne({ where: { id } })
      return data
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    try {
      const findAdmin = await this.repo.findOne({ where: { id } })
      if (!findAdmin) throw new HttpException('Admin not found!', HttpStatus.NOT_FOUND);

      const { full_name, email, password } = updateAdminDto;

      const findOtherAdmin = await this.repo.findOne({
        where: { id: Not(id), email },
      });
      if (findOtherAdmin)
        throw new HttpException('Email already exists!', HttpStatus.CONFLICT);

      let hashedPass: string;
      if (password) {
        hashedPass = await bcrypt.hash(password, 12);
      }
      await this.repo.update(
        { id },
        { full_name, email, password: hashedPass },
      );
      return {
        message: 'Admin updated successfully',
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.repo.delete({ id })
      return { message: "Admin deleted successfully" }
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
