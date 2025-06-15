import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { IngressosService } from './ingressos.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { Ingresso } from './entities/ingresso.entity';

@Controller('ingressos')
export class IngressosController {
  constructor(private readonly ingressosService: IngressosService) {}

  @Post()
  create(@Body() createIngressoDto: CreateIngressoDto): Promise<Ingresso> {
    return this.ingressosService.create(createIngressoDto);
  }

  @Get()
  findAll(): Promise<Ingresso[]> {
    return this.ingressosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Ingresso> {
    return this.ingressosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Ingresso> {
    return this.ingressosService.remove(id);
  }
}