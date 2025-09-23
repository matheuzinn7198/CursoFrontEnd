# Sistema de Gestão de Manutenção

## Briefing

### Visão Geral do Projeto
O projeto consite mo desenvolvimento de um sistema de gestão de manutenção (SGM) no formato de uma aplicação web.

## Escopo

- ### Objetivos:
    - Técnicos de Manutenção
    - Gestores de Manutenção
    - Administradores do Sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de Classes
Este Diagrama modela as principais entidades do sistema:
- Usuários (user/Usuarios);
- Máquinas/Equipamentos (Equipment);
- Ordem de Serviço(Service);

```mermaid

classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +create()
        +read()
        +update()
        +delete()
    }

    class Equipamento{
        +String id
        +String nome
        +String modelo
        +String numeroSerie
        +String localizacao
        +String status
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemServico{
        +String id
        +String titulo
        +String descricao
        +String tipoManutencao
        +String status
        +String idTecnico
        +String idEquipamento
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "1+" OrdemServico : "é responsável por"
    Equipamento "1" -- "1+" OrdemServico : "associado a"

```
#### Explicação do Diagrama de Classe
- Um Usuário (Técnico) por ser responsável por várias Ordens de Serviço
- Um Equipamento por estar associado a várias Ordens de Serviço

2. ### Diagrama de Caso de Uso
Ilustrar as interações dos diferentes tipos de usuários (atores) com as funcionalidades do sistema

#### Explicação do Diagrama de Classe
- Atores: Técnico, Gestor, Admin

- Casos de Usos:
    - Técnico: Gerenciar Ordens de Servico e acessar o DashBoard
    - Gestor: Gerenciar Ordens de Servico (CRUD), Gerenciar Equipamento (CRUD)
    - Admin: Gerenciar Usuário, acessar o DashBoard

    Fazer o Login -> Antes de Qualquer Ação

```mermaid
graph TD
    subgraph "SGM"
        caso1([Fazer Login])
        caso2([Gerenciar Ordens de Serviço - CRUD])
        caso3([Gerenciar Equipamentos - CRUD])
        caso4([Gerenciar Usuário])
        caso5([Acessar o DahBoard])
    end

    Tecnico([Técnico de Manutenção])
    Gestor([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> caso1
    Tecnico --> caso3
    Tecnico --> caso5

    Gestor --> caso1
    Gestor --> caso2
    Gestor --> caso3
    Gestor --> caso5

    Admin --> caso1
    Admin --> caso4
    Admin --> caso5

    caso2 -.-> caso1
    caso3 -.-> caso1
    caso4 -.-> caso1
    caso5 -.-> caso1

```