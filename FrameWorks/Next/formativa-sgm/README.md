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