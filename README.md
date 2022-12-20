<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/vitorfontenele/projeto-react-apis">
    <img src="public/pokeball-colored.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">projeto-react-apis</h3>
  <a href="https://github.com/vitorfontenele/projeto-react-apis">https://github.com/vitorfontenele/projeto-react-apis</a>
</div>

<!-- Conteúdo -->
<details>
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#instalação">Instalação</a>
    </li>
    <li><a href="#requisitos">Requisitos</a></li>
    <li><a href="#utilização">Utilização</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#contribuições">Contribuições</a></li>
  </ol>
</details>

<!-- SOBRE O PROJETO -->
## Sobre o projeto

O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. Este projeto possui como fonte de dados para a sua criação a [Poke API](https://pokeapi.co/ "Poke Api"), uma API pública e muito conhecida.

Este projeto é parte dos projetos realizados como atividade durante o bootcamp da Labenu.

Os conteúdos principais trabalhados nesse projeto são:

- Integração de APIs
- React Router
- Estado Global

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

### Feito com


* [![React][React.js]][React-url]
* [![Styled Components][styled-components]][styled-components-url]
* [![React Router][react-router]][react-router-url]

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- INSTALAÇÃO -->
## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/vitorfontenele/eleicoes-brasil.git
   ```
2. Instale os pacotes NPM:
   ```sh
   npm install
   ```
3. Para executar o projeto em modo de desenvolvimento:
   ```sh
   npm run dev
   ```
   
<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- REQUISITOS -->
## Requisitos

- **Gerais:**
	- [ ] O site deve ter 3 páginas: Home, Pokedex e Detalhes;
	- [ ] Projeto deve seguir o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- [ ] O fluxo de trocas de páginas devem ser semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");
- **Página Home:**
	- [ ]  Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
	- [ ] Cada Pokemon será representado por um Card;
	- [ ] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
	- [ ] Header dessa página terá um botão para acessar a página da Pokedex
- **Página Pokédex**
	- [ ] Renderizar a lista de pokémons adicionados na pokedex;
	- [ ] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
	- [ ] Header deve ter um botão para voltar para a Home
	- [ ] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
- **Página de Detalhes**
	- [ ] Mostrar os detalhes do Pokemon selecionado, com informações descritas
	- [ ] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.
- [ ] [Criar um readme](https://www.youtube.com/watch?v=1QKwP0SJK-c "Crie um readme") para o projeto;

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- UTILIZAÇÃO -->
## Utilização

Este projeto possui uma página Home com 20 pokémons, em que é possível adicionar esses pokémons a Pokédex (que também possui sua página própria). Na página da Pokédex, é possível excluir pokémons da Pokédex. Na página de Detalhes, é possível consultar os stats de um pokémon e adicionar ou excluir o pokémon da Pokédex.

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Reprodução do design do Figma com Styled Components
- [x] Organização das rotas com React Router
- [x] Integração com a PokeAPI
- [x] Desenvolvimento do código em React
- [x] Deploy do projeto no Github Pages

Veja [open issues](https://github.com/vitorfontenele/projeto-react-apis/issues) para modificações propostas (e issues conhecidos).

 <p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- LICENSE -->
## Licença

Distribuído sob a MIT License. Veja `LICENSE.txt` para mais informações.

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
 
 <!-- CONTATO -->
 ## Contato

[![Github][github-shield]][github-url][![Linkedin][linkedin-shield]][linkedin-url]

Link do Projeto: [https://github.com/vitorfontenele/projeto-react-apis](https://github.com/vitorfontenele/projeto-react-apis)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

 <!-- CONTRIBUIÇÕES -->
 ## Contribuições

* [Vite](https://vitejs.dev)
* [Github Pages](https://pages.github.com/)
* [Poke API](https://pokeapi.co/)
* [Single Page Apps for GitHub Pages](https://github.com/rafgraph/spa-github-pages)
* [CSS Loaders](https://cssloaders.github.io/)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/vitor-fontenele/
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/vitorfontenele
[styled-components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[styled-components-url]: https://styled-components.com/
[react-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/en/main
