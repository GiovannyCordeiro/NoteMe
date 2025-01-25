# 📌 NoteMe

Gerenciador de tarefas onde é possível organizar sua rotina de forma clara e concisa.
Créditos do design ao [Ruy Monteiro](https://www.figma.com/@ruymonteiro).

## ✅ Funcionalidades

- [x]  Criação e gerenciamento de tarefas
- [x] Autorização e autenticação Email e senha
- [x] Autorização OAuth 2.0 (Google)

## ⚙️ Ferramentas

- Ruby v3.3.6
- Ruby on Rais v8
- Tailwind
- Stimullus
- Turbo Framework

## 📋 Requisitos

- Ruby v3.3.6 Instalado
- Ruby on Rails v8
- Conta para configuração do Oauth 2.0 Google

## 🎯 Setup do projeto

- Faça a configuração de um projeto no Google Cloud e crie credenciais OAuth 2.
- Coloque seu Client ID do Google no arquivo .env, na variável GOOGLE_OAUTH_CLIENT_ID.
- Coloque seu Client Secret do Google no arquivo .env, na variável GOOGLE_OAUTH_CLIENT_SECRET.
- Instale todas as dependências utilizando o comando `bundle install`.
- Execute o projeto utilizando o comando `bin/dev`.