# 🧪 Cypress Learning Lab

Projeto de estudos em automação de testes E2E (End-to-End), desenvolvido durante o curso **Automação Web com Cypress**, da QAzando.

Utiliza a aplicação [Automation Practice](https://www.automationpratice.com.br/) para explorar testes de cadastro e login, organização com Page Objects e integração contínua (CI/CD).

Inclui cenários desenvolvidos de forma independente para aprofundar os conhecimentos adquiridos.

## 🛠️ Tecnologias utilizadas

- **Cypress** — automação de testes E2E.
- **JavaScript** — desenvolvimento dos testes.
- **Faker** — geração de dados fictícios.
- **Page Objects** — organização e reutilização do código.
- **Mochawesome** — relatórios de execução.
- **GitHub Actions** — execução automatizada dos testes.
- **Cypress Cloud** — acompanhamento das execuções.
- **Slack** — notificações dos resultados.

## ✅ Cenários automatizados

O projeto contempla **11 cenários de teste E2E**, distribuídos entre duas funcionalidades.

### Cadastro de usuário
- Cadastro com sucesso.
- Validação de nome vazio.
- Validação de e-mail vazio.
- Validação de e-mail inválido.
- Validação de senha vazia.
- Validação de senha inválida (menos de 6 caracteres).

### Login
- Login com sucesso.
- Validação de e-mail vazio.
- Validação de e-mail inválido.
- Validação de senha vazia.
- Validação de senha inválida (menos de 6 caracteres).

## 📁 Estrutura do projeto

```text
cypress_learning_lab/
├── .github/
│   └── workflows/
│       ├── cypress-pipeline.yml
│       └── cypress-scheduled.yml
├── cypress/
│   ├── e2e/
│   │   ├── cadastro_usuario.cy.js
│   │   └── login.cy.js
│   └── support/
│       ├── pages/
│       |   ├── cadastro_usuario_page.js
│       |   ├── commom_page.js
│       |   └── login_page.js
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── CI_VALIDATION.md
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
Os testes estão organizados por funcionalidade, enquanto os **Page Objects** centralizam seletores e métodos reutilizáveis, facilitando a manutenção do código.

Os arquivos de suporte permitem configurar e compartilhar comportamentos dos testes. Os workflows automatizam as execuções, e o `CI_VALIDATION.md` documenta as validações realizadas no pipeline.

## 🚀 Como executar o projeto

**Pré-requisitos:** Node.js e npm instalados.

**1. Clonar o repositório**

```bash
git clone https://github.com/Natalia-Gomes07/cypress-learning-lab.git
```

**2. Acessar a pasta do projeto**

```bash
cd cypress-learning-lab
```

**3. Instalar as dependências**

```bash
npm install
```

**4. Executar os testes**

Pelo terminal:

```bash
npm test
```

Ou abrir a interface interativa do Cypress:

```bash
npx cypress open
```

O comando `npm test` executa os testes E2E e gera o relatório Mochawesome.

## ⚙️ CI/CD e relatórios

O projeto utiliza **GitHub Actions** para automatizar a execução dos testes Cypress por meio de dois workflows:

- **Pull Request:** executa os testes ao abrir ou atualizar um PR direcionado à `main`.
- **Execução agendada:** configurada para segunda a sexta-feira, às 18h (horário de Brasília).

### 📊 Relatórios e monitoramento

- **Mochawesome:** gera relatórios HTML com os resultados dos testes, disponibilizados como artefatos no GitHub Actions.
- **Cypress Cloud:** centraliza o histórico das execuções automatizadas.
- **Slack:** recebe notificações dos resultados por meio da integração com Cypress Cloud.

O pipeline de Pull Request foi validado com **11 testes aprovados**. Também foi realizado um experimento de falha intencional para verificar o comportamento do pipeline e dos relatórios.

## 📚 Aprendizados e limitações

Durante o desenvolvimento do projeto, foram praticados conceitos de automação E2E, organização com Page Objects, geração de dados dinâmicos e integração contínua.

Também foram explorados versionamento com Git, Pull Requests, execução automatizada e análise de falhas por meio de relatórios.

**Limitação identificada:** a aplicação utilizada para estudos permite realizar login sem exigir cadastro prévio. Por isso, o cenário de login positivo valida o comportamento apresentado pela interface, mas não comprova uma autenticação real.

Este projeto representa uma etapa prática de aprendizado e evolução em automação de testes.