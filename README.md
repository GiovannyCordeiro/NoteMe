# NoteMe

Gerenciador de tarefas onde é possivel organizar sua rotina de forma clara
e concisa. Creditos do design ao [Ruy Monteiro](https://www.figma.com/@ruymonteiro).

## Funcionalidades

- Criação e gerenciamento de tarefas
- Autorização e autenticação Email e senha
- Autorização OAuth 2.0 (Google)

## Ferramentas

- Ruby on Rais 8
- Tailwind
- Stimullus
- Turbo Framework

## Requisitos

- Ruby
- Ruby on Rails 8
- Conta Config Oauth 2.0 Google

## Setup projeto

- Faca uma configuracao de um projeto no Google Cloud e crie Credenciais OAuth 2
- Coloque seu Client ID do Google no arquivo `.env` na variavel `GOOGLE_OAUTH_CLIENT_ID`
- Coloque seu Client Secret do Google no arquivo `.env` na variavel `GOOGLE_OAUTH_CLIENT_SECRET`

- Instale todas as dependencias por meio do comando `bundle install`
- Rode o projeto utilizando o comando `bin/dev`
