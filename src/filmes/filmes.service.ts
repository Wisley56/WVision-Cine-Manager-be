import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFilmeDto: CreateFilmeDto) {
    return this.prisma.filme.create({
      data: {
        ...createFilmeDto,
        duracao: Number(createFilmeDto.duracao), // Garante que seja número
        dataEstreia: new Date(createFilmeDto.dataEstreia),
      },
    });
  }

  findAll() {
    return this.prisma.filme.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string) {
    const filme = await this.prisma.filme.findUnique({ where: { id } });
    if (!filme) {
      throw new NotFoundException(`Filme com ID "${id}" não encontrado.`);
    }
    return filme;
  }

  async update(id: string, updateFilmeDto: UpdateFilmeDto) {
    await this.findOne(id); // Verifica se o filme existe
    return this.prisma.filme.update({
      where: { id },
      data: {
        ...updateFilmeDto,
        ...(updateFilmeDto.duracao && { duracao: Number(updateFilmeDto.duracao) }),
        ...(updateFilmeDto.dataEstreia && { dataEstreia: new Date(updateFilmeDto.dataEstreia) }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verifica se o filme existe
    return this.prisma.filme.delete({ where: { id } });
  }
}