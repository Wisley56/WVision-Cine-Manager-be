import { Sessao } from "src/sessoes/entities/sessoes.entity";


export class Ingresso {
  id: string;
  nomeCliente: string;
  cpf: string;
  assento: string;
  tipoPagamento: string; // 'Cartão' | 'Pix' | 'Dinheiro'
  sessaoId: string;
  createdAt: Date;
  updatedAt: Date;

  sessao?: Sessao;
}