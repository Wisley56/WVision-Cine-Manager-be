import { Filme } from 'src/filmes/entities/filme.entity';
import { Sala } from 'src/salas/entities/sala.entity';

export class Sessao {
  id: string;
  dataHora: Date;
  preco: number;
  idioma: string; // 'Dublado' | 'Legendado'
  formato: string; // '2D' | '3D'
  filmeId: string;
  salaId: string;
  createdAt: Date;
  updatedAt: Date;

  filme?: Filme;
  sala?: Sala;
}