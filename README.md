# FrontendDesafio

O projeto aborda o backend de um blog, que implementa funcionalidades para adição, remoção e visualização de postagens.

## Tecnologias

Este projeto foi desenvolvido utilizando React, Vite, Chakra UI para componentes de interface do usuário, Axios para requisições HTTP, e React Hook Form para gerenciamento de formulários.

## Instalando o Projeto

1. Clonar o repositório:

    ```sh
    git clone https://github.com/SamsSouza22/FrontendDesafio.git
    cd FrontendDesafio/frontend
    ```

2. Instalar as dependências:

    ```sh
    npm install
    ```

3. Iniciar o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

    A aplicação será iniciada em `http://localhost:5173`.

## Estrutura do Projeto
```
FrontendDesafio/
    frontend/
        .gitignore
        eslint.config.js
        index.html
        package.json
        public/
        README.md
        src/
            components/
                authComponents/
                    AuthForm.jsx
                    AuthLayout.jsx
                postsComponents/
                    PostForm.jsx
                    PostList.jsx
                    PostModal.jsx
                    Pagination.jsx
            pages/
                auth/
                    Login.jsx
                    Register.jsx
                Home.jsx
            utils/
                auth.mjs
                errorHandler.mjs
                schemas.mjs
            AppContext.jsx
            main.jsx
            routes.jsx
        vite.config.js
```

- `src/`
  - `components/`: Contém componentes reutilizáveis.
    - `authComponents/`: Contém componentes relacionados à autenticação.
    - `postsComponents/`: Contém componentes relacionados aos posts.
  - `pages/`: Contém os componentes de página.
    - `auth/`: Contém as páginas de autenticação (Login e Register).
    - `Home.jsx`: A página principal da aplicação.
  - `utils/`: Contém funções utilitárias e schemas.
  - `AppContext.jsx`: Contém o contexto de autenticação.
  - `main.jsx`: O ponto de entrada da aplicação.
  - `routes.jsx`: As definições de rotas.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run preview`: Previsualiza a build de produção.
- `npm run lint`: Executa o ESLint para verificar erros de linting.

## Autenticação

A aplicação utiliza JWT para autenticação. O token JWT e o ID do usuário são armazenados no local storage.

## License

Este projeto está licenciado sob a licença ISC.