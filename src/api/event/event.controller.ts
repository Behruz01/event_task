import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('Event')
@ApiBearerAuth()
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @ApiOperation({ summary: 'Create a new event' })
  @ApiResponse({
    status: 201,
    description: 'Event created successfully',
    type: CreateEventDto,
  })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    status: 200,
    description: 'Return all events',
    type: [CreateEventDto],
  })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: 'Get an event by ID' })
  @ApiParam({ name: 'id', description: 'ID of the event' })
  @ApiResponse({
    status: 200,
    description: 'Return the event by ID',
    type: CreateEventDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an event by ID' })
  @ApiParam({ name: 'id', description: 'ID of the event' })
  @ApiResponse({
    status: 200,
    description: 'Event updated successfully',
    type: CreateEventDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @ApiOperation({ summary: 'Remove an event by ID' })
  @ApiParam({ name: 'id', description: 'ID of the event' })
  @ApiResponse({
    status: 200,
    description: 'Event removed successfully',
    type: CreateEventDto,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
