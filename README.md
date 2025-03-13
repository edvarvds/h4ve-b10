# Campanha Havan - Abaixo-assinado

Landing page para a campanha de abaixo-assinado pela elegibilidade de Bolsonaro com descontos exclusivos em produtos Havan.

## Estrutura do Projeto

```
.
├── index.html                 # Página principal da campanha
├── index.php                  # PHP wrapper para o Heroku
├── server.js                  # Servidor Express para servir a aplicação
├── package.json               # Configuração do projeto Node.js
├── composer.json              # Configuração para PHP no Heroku
├── Procfile                   # Configuração para deploy no Heroku
├── .htaccess                  # Configuração do Apache para URLs
├── assets/                    # Arquivos estáticos (cópia com nome simplificado)
└── Conheça os melhores tecidos leves pro verão - Blog Havan_files/  # Arquivos estáticos originais
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
- Express.js (para servir a aplicação localmente)
- PHP (para servir a aplicação no Heroku)

## Executando Localmente

### Usando Node.js (recomendado para desenvolvimento)

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

### Usando PHP (similar ao ambiente Heroku)

1. Certifique-se de ter o PHP instalado
2. Clone este repositório
3. Inicie um servidor PHP:
   ```
   php -S localhost:8000
   ```
4. Acesse `http://localhost:8000` no seu navegador

## Deploy no Heroku

### Método 1: Usando PHP (recomendado)

Este método é mais confiável para lidar com caracteres especiais nos nomes de arquivos.

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
5. Certifique-se de que o Procfile está configurado para PHP:
   ```
   web: vendor/bin/heroku-php-apache2 ./
   ```
6. Faça o deploy:
   ```
   git add .
   git commit -m "Ready for Heroku deployment"
   git push heroku main
   ```
7. Abra a aplicação:
   ```
   heroku open
   ```

### Método 2: Usando Node.js

Se preferir usar Node.js, edite o Procfile para usar o servidor Node.js:

1. Edite o Procfile para:
   ```
   web: node server.js
   ```
2. Faça o deploy:
   ```
   git add .
   git commit -m "Switch to Node.js"
   git push heroku main
   ```

## Solução de Problemas

Se encontrar problemas com o deploy no Heroku:

1. **Arquivos não carregando**: Verifique os logs do Heroku:
   ```
   heroku logs --tail
   ```

2. **Problemas com caracteres especiais**: Use o método PHP que lida melhor com esses casos.

3. **Erro H10 (App crashed)**: Verifique se o Procfile está configurado corretamente.

## Observações

Esta landing page foi criada para a campanha de abaixo-assinado pela elegibilidade de Bolsonaro, oferecendo descontos exclusivos em produtos Havan para os participantes. 