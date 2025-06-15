import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { Sessao } from './entities/sessoes.entity';

@Controller('sessoes')
export class SessoesController {
  constructor(private readonly sessoesService: SessoesService) {}

  @Post()
  create(@Body() createSessaoDto: CreateSessaoDto): Promise<Sessao> {
    return this.sessoesService.create(createSessaoDto);
  }

  @Get()
  findAll(): Promise<Sessao[]> {
    return this.sessoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sessao> {
    return this.sessoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto): Promise<Sessao> {
    return this.sessoesService.update(id, updateSessaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Sessao> {
    return this.sessoesService.remove(id);
  }
}