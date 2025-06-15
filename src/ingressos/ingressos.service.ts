import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Injectable()
export class IngressosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIngressoDto: CreateIngressoDto) {
    return this.prisma.ingresso.create({
      data: createIngressoDto,
    });
  }

  findAll() {
    return this.prisma.ingresso.findMany({
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const ingresso = await this.prisma.ingresso.findUnique({
      where: { id },
      include: { sessao: true },
    });
    if (!ingresso) throw new NotFoundException(`Ingresso com ID "${id}" não encontrado.`);
    return ingresso;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.ingresso.delete({ where: { id } });
  }
}