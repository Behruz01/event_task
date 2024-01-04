import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminService } from './admin.service';

@ApiTags('Admins')
@ApiBearerAuth()
@Controller('admins')
export class AdminController {
  constructor(private readonly adminsService: AdminService) { }

  @ApiOperation({ summary: 'Create a new admin' })
  @ApiResponse({
    status: 201,
    description: 'Admin created successfully',
    type: CreateAdminDto,
  })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all admins' })
  @ApiResponse({
    status: 200,
    description: 'Return all admins.',
    type: [CreateAdminDto],
  })
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @ApiOperation({ summary: 'Get an admin by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the admin by ID.',
    type: CreateAdminDto,
  })
  @ApiResponse({ status: 404, description: 'Admin not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an admin by ID' })
  @ApiResponse({
    status: 200,
    description: 'Admin updated successfully.',
    type: CreateAdminDto,
  })
  @ApiResponse({ status: 404, description: 'Admin not found.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Delete an admin by ID' })
  @ApiResponse({
    status: 200,
    description: 'Admin deleted successfully.',
    type: CreateAdminDto,
  })
  @ApiResponse({ status: 404, description: 'Admin not found.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
