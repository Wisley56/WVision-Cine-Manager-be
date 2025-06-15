import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';

@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(@Body() createSalaDto: CreateSalaDto): Promise<Sala> {
    return this.salasService.create(createSalaDto);
  }

  @Get()
  findAll(): Promise<Sala[]> {
    return this.salasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sala> {
    return this.salasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto): Promise<Sala> {
    return this.salasService.update(id, updateSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Sala> {
    return this.salasService.remove(id);
  }
}