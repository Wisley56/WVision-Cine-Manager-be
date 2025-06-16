# WVision Cine Manager - Backend

API RESTful desenvolvida para ser o backend do sistema de gerenciamento de cinemas WVision Cine Manager. A aplicação gerencia filmes, salas, sessões e ingressos, fornecendo os endpoints necessários para a operação completa do sistema.

Este projeto foi construído utilizando as seguintes tecnologias:
- **NestJS**: Um framework Node.js progressivo para construir aplicações de backend eficientes e escaláveis.
- **Prisma**: Um ORM de próxima geração para Node.js e TypeScript.
- **PostgreSQL**: Um poderoso sistema de banco de dados relacional de código aberto.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.

## Funcionalidades

-   Gerenciamento completo (CRUD) de **Filmes**.
-   Gerenciamento completo (CRUD) de **Salas de Cinema**.
-   Gerenciamento completo (CRUD) de **Sessões**, com relacionamento entre Filmes e Salas.
-   Gerenciamento completo (CRUD) de **Ingressos** para as sessões.
-   Validação de dados de entrada usando DTOs e `class-validator`.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior recomendada)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/download/) rodando localmente ou na nuvem.

## Guia de Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

**1. Clone o repositório**
```bash
git clone [https://github.com/seu-usuario/wvision-cine-manager-backend.git](https://github.com/seu-usuario/wvision-cine-manager-backend.git)
cd wvision-cine-manager-backend
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto, copiando o exemplo de `.env.example` (se houver) ou usando o modelo abaixo. Substitua os valores pelos dados de acesso ao seu banco de dados PostgreSQL.

```env
# URL de conexão do seu banco de dados PostgreSQL
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=public"
```

**4. Execute as Migrações do Banco de Dados**
Este comando irá criar todas as tabelas necessárias no seu banco de dados, com base no schema do Prisma.
```bash
npx prisma migrate dev
```

**5. Execute a Aplicação**
O servidor de desenvolvimento será iniciado e ficará observando alterações nos arquivos.
```bash
npm run start:dev
```
Por padrão, a aplicação estará disponível em `http://localhost:3001`.

## Scripts Disponíveis

-   `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com watch mode.
-   `npm run build`: Compila o projeto TypeScript para JavaScript.
-   `npm run start:prod`: Inicia a aplicação em modo de produção (requer `npm run build` antes).
-   `npm test`: Roda os testes unitários.
-   `npm run test:e2e`: Roda os testes end-to-end.

## Endpoints da API

A API está estruturada em torno dos seguintes recursos principais:

-   `GET, POST, PATCH, DELETE /filmes`
-   `GET, POST, PATCH, DELETE /salas`
-   `GET, POST, PATCH, DELETE /sessoes`
-   `GET, POST, DELETE /ingressos`

## Deploy em Produção

Para fazer o deploy da aplicação em um ambiente de produção, siga estes passos:

1.  **Build do Projeto**: Compile os arquivos TypeScript.
    ```bash
    npm run build
    ```
2.  **Migrações do Prisma**: Em um ambiente de produção, use o comando `deploy` para aplicar as migrações existentes.
    ```bash
    npx prisma migrate deploy
    ```
3.  **Iniciar o Servidor**: Use o script de produção para iniciar o servidor.
    ```bash
    npm run start:prod
    ```

É crucial configurar as variáveis de ambiente (`DATABASE_URL`, `PORT`, etc.) na sua plataforma de hospedagem (Ex: Render, Railway, AWS).

## Licença

Este projeto está licenciado sob a Licença MIT.
