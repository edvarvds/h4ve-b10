# Campanha Havan - Abaixo-assinado

Landing page para a campanha de abaixo-assinado pela elegibilidade de Bolsonaro com descontos exclusivos em produtos Havan.

## Estrutura do Projeto

```
.
├── index.html                 # Página principal da campanha
├── server.js                  # Servidor Express para servir a aplicação
├── package.json               # Configuração do projeto Node.js
├── Procfile                   # Configuração para deploy no Heroku
└── Conheça os melhores tecidos leves pro verão - Blog Havan_files/  # Arquivos estáticos (CSS, JS, imagens)
```

## Funcionalidades

- Vídeo de apresentação da campanha
- Seção de objetivo e como funciona
- Depoimentos de participantes
- Formulário de assinatura
- Layout responsivo para desktop e mobile

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Font Awesome
- Express.js (para servir a aplicação)

## Executando Localmente

1. Certifique-se de ter o Node.js instalado
2. Clone este repositório
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm start
   ```
5. Acesse `http://localhost:3000` no seu navegador

## Deploy no Heroku

Para fazer o deploy desta aplicação no Heroku:

1. Crie uma conta no [Heroku](https://heroku.com) se ainda não tiver
2. Instale o [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. Faça login no Heroku CLI:
   ```
   heroku login
   ```
4. Crie um novo app no Heroku:
   ```
   heroku create nome-do-seu-app
   ```
5. Faça o deploy:
   ```
   git push heroku main
   ```
6. Abra a aplicação:
   ```
   heroku open
   ```

## Observações

Esta landing page foi criada para a campanha de abaixo-assinado pela elegibilidade de Bolsonaro, oferecendo descontos exclusivos em produtos Havan para os participantes. 