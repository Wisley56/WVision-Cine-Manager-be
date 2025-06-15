import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  findAll(): Promise<Filme[]> {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.remove(id);
  }
}