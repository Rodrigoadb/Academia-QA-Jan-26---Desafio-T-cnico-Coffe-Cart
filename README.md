# ☕ Desafio Técnico – Coffee Cart
## Cypress | BDD | Page Object Model (POM)

Este projeto é um **desafio técnico desenvolvido durante a Academia de Testes QA Accenture 2025/2026**, com foco em **automação de testes End-to-End (E2E)** utilizando **Cypress**, **BDD (Cucumber)** e **Page Object Model (POM)**.

O objetivo do projeto é validar **fluxos de compra de cafés**, contemplando **cenários de sucesso e erro**, aplicando boas práticas de automação, organização de código e separação de responsabilidades.

---


## 🧱 Padrões e Boas Práticas Utilizadas

### 🔹 BDD (Behavior Driven Development)
- Cenários escritos em linguagem natural (`.feature`)
- Facilita a comunicação entre QA, desenvolvedores e negócio

### 🔹 Page Object Model (POM)
- Cada página possui sua própria classe
- Centraliza ações e interações da aplicação

### 🔹 Separação de Responsabilidades
- `.feature` → cenários de teste
- `step-definitions` → implementação dos passos BDD
- `pages` → lógica de interação com a aplicação

### 🔹 Boas Práticas Técnicas
- Uso de `baseUrl` no `cypress.config.js`
- Asserções utilizando `.should()`
- Evita uso de `cy.wait()` fixo e desnecessário
- Código reutilizável e organizado

---

## 📦 Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- **Node.js**
- **npm**

---

## 🚀 Instalação

 ### 1) Clonar o repositório
 git clone https://github.com/Rodrigoadb/Academia-QA-Jan-26---Desafio-T-cnico-Coffe-Cart.git

 ### 2) Acessar o diretório do projeto
 cd DESAFIO-COFFE-CART

 ### 3) Instalar as dependências
 npm install

## 1. Abrir o Cypress em modo interativo

npx cypress open

### 2. Selecione o tipo de teste E2E Testing

### 3. Selecione o navegador que vai carregar seus testes e clique em 'Start E2E Testing'

### 4. Pronto! Agora é so selecionar a feature que você quer testar primeiro

 compraCoffeCart.feature | 
 ErroCompraCoffeCart.feature


# Estrutura do Projeto

````
DESAFIO-COFFE-CART/
├── cypress/
│   ├── e2e/
│   │   ├── compraCoffeCart.feature
│   │   └── ErroCompraCoffeCart.feature
│   └── support/
│       ├── pages/
│       │   ├── cartCoffe.page.js
│       │   ├── navBar.page.js
│       │   ├── pay.page.js
│       │   └── selectCoffeCart.page.js
│       ├── step-definitions/
│       │   └── portalCoffeCart.cy.js
│       ├── commands.js
│       └── e2e.js
├── node_modules/
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
````

## 📁 Estrutura de Pastas

| Pasta | Descrição |
|------|----------|
| `cypress/` | Pasta principal onde ficam todos os arquivos relacionados aos testes. |
| `cypress/downloads/` | Armazena arquivos baixados durante os testes, caso existam. |
| `cypress/e2e/` | Contém os testes end-to-end (E2E), organizados por categoria (sucesso, erro). |
| `cypress/e2e/Erro/` | Agrupa os testes que validam cenários de erro ou comportamento inesperado. |
| `cypress/e2e/Sucesso/` | Agrupa os testes que validam os cenários bem-sucedidos da aplicação. |
| `cypress/e2e/elements/` | Contém os arquivos de mapeamento dos elementos da interface (page elements). |
| `cypress/fixtures/` | Guarda arquivos estáticos, como imagens e dados de exemplo para os testes. |
| `cypress/support/` | Armazena comandos customizados, configurações globais e estruturas auxiliares. |
| `cypress/support/pages/` | Contém a lógica das interações com cada página (Page Object Model). |
| `cypress/support/step-definitions/` | Onde ficam os testes implementados usando os métodos e elementos definidos. |
| `node_modules/` | Diretório automático que contém todas as dependências instaladas via npm. |
