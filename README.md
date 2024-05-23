# ☀️ CLIMA AGORA - COMPASS UOL

Projeto realizado para a avaliação da Sprint 2 e 3 do programa de bolsas da Compass UOL em Machine Learning com AWS.

## Descrição

Esta é uma API de clima que permite aos usuários obter as condições climáticas atuais de uma cidade específica. O projeto segue o padrão de arquitetura MVC (Model-View-Controller) para garantir uma estrutura organizada e de fácil manutenção. Além disso, inclui uma interface de usuário em HTML, CSS e JavaScript para interação com a API.

## Estrutura do projeto

```bash
sprints-2-3-pb-aws-abril/
├── src/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   └── views/
│       ├── layouts/
│       │   └── main.handlebars
│       └── index.handlebars
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── app.js
├── docker-compose.yml
├── package-lock.json
└── package.json


```

## Desafio

O desafio consiste em consumir uma API (Interface de Programação de Aplicação) em NodeJs e subir essa aplicação utilizando Docker para rodar dentro da AWS Cloud.

## Autores

- [@LuizFillipe1](https://www.github.com/LuizFillipe1)
- [@GabrielAvelarbr](https://github.com/GabrielAvelarbr)
- [@GustavoBrunetti](https://github.com/GustavoBrunetti)
- [@thiagoesAdapti](https://github.com/thiagoesAdapti)

## Pré-requisitos

`Node.js`
ou
`Docker`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril.git
```

Entre no diretório do projeto

```bash
  cd sprints-2-3-pb-aws-abril
```

Altere a branch para a "grupo-3"

```bash
  git checkout grupo-3
```

Rode o Docker

```bash
  docker build -t openweatherApi/grupo-3 .
  docker run -p 3000:3000 -d openweatherApi/grupo-3
```

Caso não tenha o Docker instalado, instale as dependências, e rode o projeto

```bash
  npm install
  npm run dev
```

Acesse a aplicação pelo navegador digitando na URL

```bash
  http://localhost:3000/
```

## Funcionalidades

- Obter condições climáticas atuais de uma cidade.
- Suporte para múltiplas cidades.
- Respostas em formato JSON.
- Interface de usuário para interação.

## Demonstração

Em breve

## Dificuldades

Não foi encontrado nenhuma dificuldade, visto que já tenho conhecimento prévio do conteúdo aplicado.

![Logo](https://media.licdn.com/dms/image/C4D16AQEZagpRn65NVA/profile-displaybackgroundimage-shrink_350_1400/0/1658868192287?e=1719446400&v=beta&t=xZ2h5lU1DEW_zGQOGbvSIpYZzjNYCd4ZNRBdMzsvops)

## Lógica Utilizada 🧠

#### Retorna todos os itens

```
  - O projeto Clima Agora é feito em NodeJs
```
