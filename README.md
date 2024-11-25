# Gestão de Profissionais

![image](https://github.com/user-attachments/assets/dbe535f9-3e4e-49d0-b7ac-eece3c6604b9)

Olá! 👋

Este projeto é uma aplicação para gerenciar os cadastro de profissionais da área da saúde. o projeto utiliza o padrão MVC (Model-View-Controller)
ASP.NET Core e estilização com Bootstrap.

---

## 🧑‍💻 Tecnologias Utilizadas
- C# (ASP.NET Core)
- Bootstrap (v5.3.2)
- HTML5 e CSS3
- Razor Views
- Entity Framework Core
- Git
- SQLite

---

## Configuração do Projeto

###Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:
- [SDK do .NET Core](https://dotnet.microsoft.com/download) (versão mínima 6.0)
- [Visual Studio](https://visualstudio.microsoft.com/) ou [VS Code](https://code.visualstudio.com/)
- Gerenciador de pacotes [NuGet](https://www.nuget.org/) configurado

---

### Como Executar o Projeto
1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/EwellynSantos/Gestao-Pessoas-Project.git

2. **Navegue até a Pasta do Projeto**
   ```bash
   cd CludeProject

3. **Restaure as Dependências**
   ```bash
   dotnet restore

4. **Compile o Projeto**
![image](https://github.com/user-attachments/assets/e2339e30-2668-49fc-985d-1ab9396351be)

---
## Dependências a serem instaladas

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Tools

---

## 📂 Estrutura do Projeto
A aplicação segue o padrão MVC, com a seguinte organização de pastas:

Projeto/
├── Controllers/        -> Controladores da aplicação
├── Models/             -> Modelos de domínio e regras de validação
├── Views/              -> Arquivos de interface (HTML com Razor)
│   ├── Shared/         -> Partes compartilhadas, como Layouts e Partials
├── wwwroot/            -> Arquivos estáticos (CSS, JS, Imagens)
│   ├── css/            -> Estilos personalizados
│   ├── js/             -> Scripts personalizados
│   └── lib/            -> Bibliotecas externas (Bootstrap, etc.)
├── appsettings.json    -> Configurações do projeto
└── Program.cs          -> Arquivo principal de configuração

---

## Funcionalidades
- Pagina inicial contendo a listagem de profissionais cadastrados
- Métodos para Criar, Deletar e Editar
- Filtro por Especialidade
  







