-- CreateTable
CREATE TABLE "Filme" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "dataEstreia" TIMESTAMP(3) NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "idioma" TEXT NOT NULL,
    "formato" TEXT NOT NULL,
    "filmeId" TEXT NOT NULL,
    "salaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" TEXT NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "assento" TEXT NOT NULL,
    "tipoPagamento" TEXT NOT NULL,
    "sessaoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sala_nome_key" ON "Sala"("nome");

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
