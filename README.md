# 💍 Rings of Power - Back-End

Este é o projeto back-end para o desafio da Devvo, construído com **Fastify**, **TypeORM** e **PostgreSQL**. Ele expõe uma API REST para gerenciar os anéis do universo de O Senhor dos Anéis.

---

## 📦 Tecnologias

- [Fastify](https://www.fastify.io/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/) (validação de dados)
- [Docker](https://www.docker.com/) (opcional)

---

## ⚙️ Variáveis de ambiente

O projeto usa variáveis de ambiente para configurar o acesso ao banco de dados. Um arquivo `.env.example` está disponível com os campos necessários. Será necessário criar um arquivo .env no root do projeto.Caso você utilize o docker do projeto, copiar o .env.example para o .env no root do projeto é suficiente.

## 🔐 `.env.example`

```env
DATABASE_HOST=localhost
DATABASE_USER=user
DATABASE_PASSWORD=user
DATABASE_NAME=ring
```

## 🛠️ Como rodar o projeto

1- Instale as dependêcias com seu package manager. Ex: npm install

2- Certifique-se de ter um banco de dados PostgreSQL rodando localmente ou remotamente (Caso não seja pelo docker, passar informações do banco de dados para o .env)

-Caso opte por utilizar o docker local, é so executar o comando: docker compose up

3- Execute o comando npm run start:dev para iniciar a API. Para ter certeza que está funcionando, você deve ver a mensagem: "Server running on http://localhost:3000"

4(Opcional)- Rode o seed para popular o banco de dados com o comando npm run seed

5- Acesse a documentação do projeto com a url: http://localhost:3000/docs
