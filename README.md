# Sistema de Gerenciamento do Refeitório do IFMS

## Descrição do Projeto

O Sistema de Gerenciamento do Refeitório do Instituto Federal de Mato Grosso do Sul foi desenvolvido como atividade prática da disciplina de Construção para Web.

O sistema tem como objetivo facilitar o acesso dos estudantes às informações relacionadas ao refeitório da instituição, disponibilizando o cardápio semanal, os horários de funcionamento e recursos para personalização da experiência do usuário por meio da funcionalidade de favoritos.

A aplicação foi construída utilizando a biblioteca React e segue uma arquitetura baseada em componentes, proporcionando uma interface organizada, moderna e responsiva.


## Objetivos

Os principais objetivos do projeto são:

* Disponibilizar o cardápio semanal do refeitório de forma simples e organizada;
* Permitir que os usuários visualizem as refeições disponíveis durante a semana;
* Possibilitar o armazenamento de dias favoritos utilizando persistência local de dados;
* Aplicar os conceitos estudados na disciplina de Construção para Web;
* Desenvolver uma aplicação com navegação entre páginas e interface responsiva;
* Implementar uma aplicação seguindo os princípios de uma Progressive Web Application (PWA).


## Tecnologias Utilizadas

Para o desenvolvimento da aplicação foram utilizadas as seguintes tecnologias:

* React;
* Vite;
* JavaScript;
* HTML5;
* CSS3;
* React Router DOM;
* React Toastify;
* Framer Motion;
* LocalStorage;
* Progressive Web Application (PWA).


## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text
src
│
├── assets
│
├── components
│   ├── Footer.jsx
│   ├── MealCard.jsx
│   ├── Navbar.jsx
│   └── StatCard.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Cardapio.jsx
│   ├── Favoritos.jsx
│   └── Configuracoes.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── services
│   ├── LocalStorageService.js
│   └── menuData.js
│
├── styles
│   └── global.css
│
├── App.jsx
└── main.jsx
```


## Funcionalidades Desenvolvidas

### Página Inicial

A página inicial apresenta uma visão geral do sistema, contendo informações sobre o funcionamento do refeitório, horários de atendimento e informações institucionais.

### Cardápio Semanal

A página de cardápio permite a visualização das refeições disponíveis para cada dia da semana. Cada refeição é apresentada por meio de cartões informativos contendo imagem ilustrativa e descrição dos alimentos.

Também foi implementado um campo de pesquisa para facilitar a localização dos dias desejados.

### Sistema de Favoritos

Os usuários podem marcar seus dias preferidos utilizando a funcionalidade de favoritos.

As informações são armazenadas localmente no navegador utilizando LocalStorage, permitindo que permaneçam salvas mesmo após o encerramento da aplicação.

### Configurações

A página de configurações permite:

* Alternar entre tema claro e tema escuro;
* Limpar os dados armazenados localmente;
* Visualizar informações sobre a aplicação.


## Responsividade

A interface foi desenvolvida utilizando técnicas de responsividade para garantir o correto funcionamento em diferentes dispositivos, incluindo computadores, tablets e smartphones.

O layout adapta automaticamente os elementos da página de acordo com o tamanho da tela do usuário.


## Experiência do Usuário

Com o objetivo de melhorar a experiência de utilização da aplicação, foram implementados recursos adicionais, tais como:

* Mensagens de feedback visual através de notificações;
* Animações suaves durante a navegação;
* Interface intuitiva e organizada;
* Sistema de pesquisa para o cardápio semanal.


## Armazenamento de Dados

A aplicação utiliza o recurso LocalStorage do navegador para armazenar os dias favoritos selecionados pelo usuário.

Dessa forma, os dados permanecem disponíveis mesmo após o fechamento do navegador ou atualização da página.


## Execução do Projeto

Para executar o projeto em ambiente de desenvolvimento, siga os passos abaixo.

Instalação das dependências:

```bash
npm install
```

Execução da aplicação:

```bash
npm run dev
```

Geração da versão de produção:

```bash
npm run build
```

Visualização da versão de produção:

```bash
npm run preview
```


## Conceitos Aplicados

Durante o desenvolvimento deste projeto foram aplicados os seguintes conceitos estudados na disciplina:

* Componentização;
* Reutilização de componentes;
* Navegação entre páginas;
* Gerenciamento de estado com React Hooks;
* Persistência de dados utilizando LocalStorage;
* Responsividade;
* Desenvolvimento de Progressive Web Applications;
* Organização de código e arquitetura de projetos React.


## Considerações Finais

O Sistema de Gerenciamento do Refeitório do IFMS foi desenvolvido com o objetivo de aplicar os conhecimentos adquiridos durante a disciplina de Construção para Web, utilizando tecnologias modernas para a criação de uma aplicação funcional, organizada e responsiva.

O projeto busca oferecer uma solução simples para consulta do cardápio semanal e gerenciamento de preferências dos usuários, demonstrando a aplicação prática dos conceitos de desenvolvimento front-end estudados ao longo do semestre.


Desenvolvido para fins acadêmicos.

Instituto Federal de Mato Grosso do Sul – IFMS.

Disciplina: Construção para Web.

Ano: 2026.
