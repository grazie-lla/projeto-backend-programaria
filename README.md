# projeto-backend-programaria

Projeto final do bootcamp EUPROGRAMO da Programaria, a proposta era criar uma API Rest que se conecta-se a um front-end já pronto de uma página de catálogo de mulheres inspiradoras e inovadoras da área de TI.

## Proposta

O objetivo deste projeto é criar uma API REST utilizando Node.js e Express.js para gerenciar e fornecer informações sobre mulheres inspiradoras na área de TI. A API se integra ao MongoDB usando o Mongoose como ODM (Object Data Modeling).

## Requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, siga os passos abaixo para executar o projeto localmente:

1. Clone este repositório para o seu ambiente local.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências: "npm install"
4. Após a instalação das dependências, inicie o servidor com o comando: "npm start""
Isso iniciará o servidor na porta localhost:3333.

## Endpoints

A API oferece os seguintes endpoints:

- `GET /women`: Retorna a lista de mulheres inspiradoras cadastradas.
- `POST /women`: Cadastra uma nova mulher inspiradora. Os detalhes devem ser enviados no corpo da solicitação.
- `PATCH /women/:id`: Atualiza os detalhes de uma mulher inspiradora com o ID especificado. Os novos detalhes devem ser enviados em JSON no corpo da solicitação.
- `DELETE /women/:id`: Remove uma mulher inspiradora com o ID especificado.

## Deploy

A API foi implantada usando a plataforma Render e está acessível através do seguinte link: [Programaria DIVAS](https://backend-kukd.onrender.com).

## Ferramentas Utilizadas

- Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (para testes)


## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

---

**Nota:** Este projeto é destinado a fins educacionais e de demonstração. Respeite os direitos autorais e a privacidade das pessoas ao adicionar informações e imagens ao catálogo.

