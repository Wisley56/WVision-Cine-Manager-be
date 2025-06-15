import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessoesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSessaoDto: CreateSessaoDto) {
    return this.prisma.sessao.create({
      data: {
        ...createSessaoDto,
        dataHora: new Date(createSessaoDto.dataHora),
        preco: Number(createSessaoDto.preco),
      },
    });
  }

  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  async findOne(id: string) {
    const sessao = await this.prisma.sessao.findUnique({
      where: { id },
      include: { filme: true, sala: true },
    });
    if (!sessao) throw new NotFoundException(`Sessão com ID "${id}" não encontrada.`);
    return sessao;
  }

  async update(id: string, updateSessaoDto: UpdateSessaoDto) {
    await this.findOne(id);
    return this.prisma.sessao.update({
      where: { id },
      data: {
        ...updateSessaoDto,
        ...(updateSessaoDto.dataHora && { dataHora: new Date(updateSessaoDto.dataHora) }),
        ...(updateSessaoDto.preco && { preco: Number(updateSessaoDto.preco) }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.sessao.delete({ where: { id } });
  }
}