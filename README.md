<p align="center">
  <h1 align="center"><img src="https://foodexplorer-rocketseat.vercel.app/assets/logo-AgsKAfyZ.svg" width="25px"> Food Explorer - Rocketseat Explorer :rocket:</h1>
</p>

FrontEnd e BackEnd completo da aplicação <strong>Food Explorer</strong>, que foi desenvolvida para o desafio final do Explorer da <strong>Rocketseat</strong>.

___

## 💻 Sobre
O Food Explorer representa uma experiência online para restaurantes, proporcionando aos usuários a facilidade de cadastro e acesso a uma variedade de informações sobre pratos e bebidas oferecidos. Ao se cadastrar na plataforma, os usuários têm a oportunidade de explorar o menu, detalhes específicos de cada item, ingredientes e preços. Além disso, a aplicação inclui um prático campo de busca para facilitar ainda mais a navegação.

Para os administradores, o Food Explorer oferece recursos avançados, permitindo a criação e edição personalizada dos pratos de acordo com suas preferências. A flexibilidade da plataforma proporciona uma experiência dinâmica e adaptável, garantindo que o usuário desfrute de uma visualização otimizada em diversos dispositivos, graças à responsividade do projeto.

O repositório associado abriga os dados do Frontend, desenvolvido em React.js, e do BackEnd, construído em Node.js.

___

## 🎨 Layout
 
 - Página inicial desktop:

 <table>
  <tr>
    <td align="center"><img src="https://github.com/eltonneiferson/foodExplorer/blob/main/project-images/desktop.png?raw=true" alt="Desktop""></td>
    <td align="center"><img src="https://github.com/eltonneiferson/foodExplorer/blob/main/project-images/desktop-admin.png?raw=true" alt="Desktop Admin"></td>
  </tr>
</table>
 
 - Página inicial mobile:

  <table>
    <tr>
      <td><img src="https://github.com/eltonneiferson/foodExplorer/blob/main/project-images/mobile.jpg?raw=true"></td>
      <td><img src="https://github.com/eltonneiferson/foodExplorer/blob/main/project-images/mobile-admin.jpg?raw=true"></td>
    </tr>
  </table>

___

## 🛠 Tecnologias

Tecnologias utilizadas para a criação deste projeto:

<a href="https://pt-br.react.dev/" target="_blank"><img src="https://skillicons.dev/icons?i=react"/></a>
<a href="https://nodejs.org/en/" target="_blank"><img src="https://skillicons.dev/icons?i=nodejs"/></a>
<a href="https://pnpm.io/pt/" target="_blank"><img src="https://skillicons.dev/icons?i=pnpm"/></a>
<a href="https://vitejs.dev/" target="_blank"><img src="https://skillicons.dev/icons?i=vite"/></a>
<a href="https://expressjs.com" target="_blank"><img src="https://skillicons.dev/icons?i=express"/></a>
<a href="https://www.sqlite.org/" target="_blank"><img src="https://skillicons.dev/icons?i=sqlite"/></a>
<a href="https://styled-components.com/" target="_blank"><img src="https://skillicons.dev/icons?i=styledcomponents"/></a>

```bash
axios,
lucide-react,
react-router-dom,
swiper,
bcryptjs,
cors,
express-async-errors,
jsonwebtoken,
knex,
multer,
pm2,
```

___

#### 🚧 Executando o BackEnd
```bash
# Navegue até o diretório do BackEnd
$ cd backEnd

# Instale as dependências necessárias
$ npm i

# Agora inicie o servidor do BackEnd
$ npm run dev
```
___

#### 💻 Executando o FrontEnd
```bash
# Navegue até o diretório do FrontEnd
$ cd frontEnd

# Instale o PNPM (https://pnpm.io/pt/installation)
$ npm install -g pnpm

# Instale as dependências necessárias
$ pnpm i

# Agora inicie o servidor do FrontEnd
$ pnpm run dev

# Será exibido no terminal o endereço local onde a aplicação está sendo executada, acesse este endereço em seu navegador ou segure a tecla CTRL e clique no link.

#O endereço utilizado na criação do projeto foi:
$ http://localhost:5173/
```

#### 🔑 Para logar na aplicação utilize os usuários:

```bash
# Usuário Administrator
  e-mail: admin@foodexplorer.com
  senha: 123456

# Usuário comum
  e-mail: user@foodexplorer.com
  senha: 123456
```
___

O BackEnd da aplicação foi hospedado diretamente no [Render](https://render.com/) e o Frontend na [Vercel](https://vercel.com/).

Obs.: Por estar hospedado em um serviço gratuito, o BackEnd "hiberna" após 15 minutos sem utilização, ou seja, se você está tentando acessar o site e o BackEnd não responde, apenas aguarde, pois ele estará "inicializando" os serviços e esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.
___

[O resultado FINAL pode ser visto aqui](https://foodexplorer-rocketseat.vercel.app/)
