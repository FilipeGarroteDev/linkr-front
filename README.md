# Linkr

O linkr foi um projeto realizado por mim e pelos colegas José Roman, Ronaldo Andrade, Carla Valle e Victor Hugo de Souza, durante as duas últimas semanas do "Módulo 4: Bancos de dados relacionais", do bootcamp da Driven Education. Trata-se de uma rede social totalmente desenvolvida por nós. O front-end da aplicação foi inteiramente desenvolvido em React.js, utilizando tecnologias/ferramentas como styled-components, axios, react-router-dom, react-tooltip, react-debounce-input, react-infinite-scroller, dentre outros. Já o back-end foi feito em Node.js, utilizando express, para conexão do servidor, bem como as libs JOI, para a validação de inputs; bcrypt, para o armazenamento de dados sensíveis com segurança; url-metadata, para captura de metadata dos links utilizados; JWT, para configuração de um token de acesso expirável. Foi utilizado, também, banco de dados relacional PostgreSQL, para armazenamento de dados dos usuários, posts, hashtags e mais.

<div align="center">
  <img src="https://i.postimg.cc/9FwPvpYY/linkr.png" />
</div>


Teste a aplicação através do link: https://linktr-bay.vercel.app/

## Sobre

Essa aplicação foi desenvolvida para quaisquer dispositivos, de forma responsiva, através da qual é possível realizar quaisquer funcionalidades encontradas em redes sociais. Listo, a seguir, as principais funcionalidades implementadas:

- Cadastro de usuário;
- Login;
- Um usuário pode publicar um link válido de sua preferência, através da caixa de postagem localizada na página principal, podendo ou não adicionar uma descrição/comentário. Essa descrição pode conter ou não hashtags que figurarão, possivelmente, na lista à direita;
- Página principal com a listagem de todos os posts realizados pelos usuários que você segue;
- Caso ainda não siga nenhum usuário, o usuário pode pesquisar pelo nome, por meio da barra de pesquisa situada no topo da página, que fará a busca no banco de dados, caso o usuário fique 500ms sem digitar nenhum outro caractere. Outro modo, é acessar a página de alguma hashtag do seu interesse e encontrar novos usuários por lá;
- Implementação do botão Follow/Unfollow, situado na página de cada usuário (menos na sua própria página), através do qual é possível seguir/deixar de seguir um usuário e, assim, ver os posts criados ou repostados por ele;
- Implementado a funcionalidade de like/unlike nos posts, com a possibilidade de o usuário saber quem curtiu aquela postagem ao passar o mouse sobre a quantidade de curtidas;
- Implementada a funcionalidade de compartilhamento de posts, por meio do ícone de repost, situado na parte esquerda de cada post. O post repostado fica com uma barra informativa na parte superior de um post;
- Implementada a funcionalidade de comentários nas publicações, seção acessada através do botão "comentários", abaixo do botão repost;
- É possível acessar a página de um usuaŕio específico, clicando em seu nome ou foto. Nela, é possível ver todos os posts feitos pelo usuário ou repostados por ele;
- É possível acessar a página de uma hashtag específica, clicando sobre ela, em um post ou em lista própria localizada nas páginas da aplicação;
- É permitido, apenas ao usuário que publicou um post, deletá-lo ou editá-lo, através dos botões localizados na parte superior do post;
- E muito mais!!!


## Tecnologias
As seguintes ferramentas, tecnologias e frameworks foram utilizadas na construção desse projeto:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-context%20api%20-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-infinite%20scroller%20-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-Tooltip-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-react%20icons-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-tagify-%2320232a.svg?&style=for-the-badge&logo=react"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-node%20js%20-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-express-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-JOI-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-bcrypt-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/node-url%20metadata-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/.env-%2320232a.svg?&style=for-the-badge&logo=.ENV"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JWT-JSON%20Web%20Tokens-%2320232a.svg?&style=for-the-badge&logo=JSON%20Web%20Tokens"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Postgres-%2320232a.svg?&style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
</p>

## Como rodar a aplicação:

1. Clone o repositório front-end através do endereço: https://github.com/FilipeGarroteDev/linkr-front
2. Instale as dependências:
```bash
npm i
```
3. Rode o front-end através do comando:
```bash
npm start
```
4. Opcionalmente, a build do projeto pode ser feita através do comando:
```bash
npm run build
```
5. Clone o repositório back-end através do endereço: https://github.com/FilipeGarroteDev/linkr-back
6. Instale as dependências:
```bash
npm i
```
7. Adicionae, no arquivo .env, na raiz do projeto, as seguintes linhas:
```bash
PORT = [PORTA DE SUA PREFERÊNCIA]
DATABASE_URL= [CONNECTION STRING DO SEU USUÁRIO POSTGRES]
JWT_SECRET= [QUALQUER PALAVRA PARA CONFIGURAÇÃO LOCAL DO JWT]
```
8. Rode o back-end através do comando:
```bash
node src/index.js
```
9. Finalmente, acesse http://localhost:3000 no seu browser favorito (a não ser que seja o Internet Explorer. Nesse caso, você precisa rever suas decisões)
