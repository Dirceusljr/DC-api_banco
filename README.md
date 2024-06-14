﻿![Fundo com uma mão digitando no notebook em preto e branco com os seguintes textos na cor branca: README, DESAFIO TÉCNICO - API BANCO, DESAFIO REALIZADO POR DIRCEU DOS SANTOS ](https://i.ibb.co/Lp11mzv/Banner-para-Docs-Gloss-rio-da-Equipe-de-Design-Estilo-Editorial-Preto-e-Branco.png)
# Desafio Técnico: API Banco

Bem-vindo ao repositório do desafio técnico. Este projeto consiste em uma API simples desenvolvida para o desafio técnico. Abaixo, você encontrará instruções sobre como configurar e executar o projeto localmente.

## Sumário

- [Texto do Desafio](#texto-do-desafio)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Uso](#uso)

## Texto do Desafio

Crie um sistema de gestão bancária por meio de uma API, composta por dois endpoints: "/conta" e "/transacao".

- O endpoint "/conta" deve criar e fornecer informações sobre o número da conta e o saldo.

- O endpoint "/transacao" será responsável por realizar diversas operações financeiras.

  
  

Os endpoints devem ter o seguintes padrões de entrada e saída no formato json:

  

**1. Use as seguintes siglas para as formas de pagamento:**

  

> P => Pix
> C => Cartão de Crédito
> D => Cartão de Débito

  

**2. POST /transacao**

input => 

```json
{
	"forma_pagamento":"D",
	 "conta_id": 1234, 
	 "valor":10
}
```

output => 

HTTP STATUS 201
```json
{
	"conta_id": 1234,
	"saldo": 189.70
}
```
HTTP STATUS 404 (Caso não tenha saldo disponível)

  

**3. POST /conta**

input => 

```json
{
	 "conta_id": 1234, 
	 "valor":200
}
```
  output => 

HTTP STATUS 201
```json
{
	"conta_id": 1234,
	"saldo": 200
}
```
 

**4. GET /conta?id=1234**

  
output => Caso não exista a conta deve retornar HTTP STATUS 404

Caso exista a conta retorna HTTP STATUS 200 e um JSON:

```json
{
	"conta_id": 1234,
	"saldo": 200
}
```
  

  
  

## Aqui estão as etapas do desafio:

  

Há três formas de transação disponíveis: débito, crédito e Pix, cada uma com taxas diferentes.

  

    Taxa de débito: 3% sobre a operação
    
    Taxa de crédito: 5% sobre a operação
    
    Taxa do Pix: Sem custo

  

Após criar a conta e definir as taxas, execute sua api com as seguintes operações:

  

1. Validar se uma conta existe

  

2. Criar uma conta com saldo inicial de R$ 500

  

3. Consultar o saldo dela

  

4. Efetue uma compra no valor de R$50 utilizando a opção de débito.

  

5. Execute uma compra de R$100 usando a opção de crédito.

  

6. Realize uma transferência via Pix no valor de R$75.

  

<hr/>

Importante lembrar que todas as contas não possuem limite de cheque especial, o que significa que não é permitido ter saldo negativo. Portanto, implementar as validações necessárias para garantir que as transações não excedam o saldo disponível.

  

As chamadas devem interferir no saldo da conta para as próximas operações.

  

Fica facultativo autenticação de sessão.

  

Após realizar o teste, disponibilize o código no github.

  

Adicione um readme de como executar sua aplicação.



## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Dirceusljr/DC-api_banco
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd nome-do-repositorio
    ```
3. Instale as dependências do projeto com o comando abaixo:

    ```bash
    npm i
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente conforme o exemplo abaixo:

    ```env
    DB_HOST=database
    DB_USER=''
    DB_PASSWORD=''
    DB_NAME=''
    DB_ROOT_PASSWORD=''
    ```

## Execução

1. Abra o docker e inicie os contêineres do Docker:

    ```bash
    docker-compose up
    ```

2. Abra outro terminal e use os seguintes comandos: 
    ```bash
    source .env
    docker exec -i database-banco mariadb -u root -p${DB_ROOT_PASSWORD} ${DB_NAME} < src/config/conta.sql
    docker exec -i database-banco mariadb -u root -p${DB_ROOT_PASSWORD} ${DB_NAME} < src/config/transacao.sql
    ```
    Esses comandos irão criar as tabelas conta e transacao no banco de dados bank_db. A tabela conta terá os seguintes valores iniciais:
    
    
	|id|conta_id|saldo|
	|--|--|--|
	| 1 | 9876  | 100.00  |
	| 2 |  3258 |200.00  |
	| 3 | 1109 | 300.00 |
	| 4 | 2301 | 400.00 |
	| 5 | 2212 | 500.00 |

	A tabela transacao não tem valores de entrada iniciais.
   
3. A API estará disponível em `http://localhost:3000`.


## Uso

A API possui os seguintes endpoints:

- `GET   /conta` - Lista todas as contas cadastradas.
- `GET  /conta?id=1234` - Lista a conta cujo conta_id = 1234.
- `POST /conta` - Cria uma nova conta.
- `GET  /transacao` - Lista todas as transações realizadas.
- `GET  /transacao?id=1234` - Lista as transações realizadas pela conta_id = 1234.
- `POST /transacao` - Realiza uma nova transação.


