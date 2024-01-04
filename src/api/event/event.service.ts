import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from 'src/infra/entities/event.entity';
import { EventRepo } from 'src/infra/repositories/event.repo';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity) private readonly repo: EventRepo
  ) { }
  async create(createEventDto: CreateEventDto) {
    try {
      const { start_date, end_date, event_name, event_desc } = createEventDto;
      const findEvent = await this.repo.findOne({ where: { start_date: new Date(start_date) } });
      // Qolgan qismlar...
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  

  async findAll() {
    try {

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    try {

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
