import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({
      data: {
        ...createSalaDto,
        capacidade: Number(createSalaDto.capacidade),
      }
    });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }

  async findOne(id: string) {
    const sala = await this.prisma.sala.findUnique({ where: { id } });
    if (!sala) throw new NotFoundException(`Sala com ID "${id}" não encontrada.`);
    return sala;
  }

  async update(id: string, updateSalaDto: UpdateSalaDto) {
    await this.findOne(id);
    return this.prisma.sala.update({
      where: { id },
      data: {
        ...updateSalaDto,
        ...(updateSalaDto.capacidade && { capacidade: Number(updateSalaDto.capacidade) }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.sala.delete({ where: { id } });
  }
}