# SmartstuffNodeJS

Projeto gerado com o NodeJs + Express + Config

## Install

Run `npm install` para instalação de dependências. 

## Development server

Run `node index.js` para rodar o servidor. http://localhost:8080. No arquivo config/default.json é possível alterar a porta do servidor.

##API

Request GET
<br>

`http://localhost:8080/customers` Lista todos os clientes, por default 10 por página
<br>
`http://localhost:8080/customers?page=NUMBER` Lista todos os clientes da página específica
<br>
`http://localhost:8080/customers?filter="a-z"` Lista todos os clientes em ordem alfabética
<br>
`http://localhost:8080/customers?filter="z-a"` Lista todos os clientes em ordem alfabética-invertida
<br>
`http://localhost:8080/customers?filter="maior-budget"` Lista todos os clientes com budget do maior para menor
<br>
`http://localhost:8080/customers?filter="menor-budget"` Lista todos os clientes com budget do menor para maior

## Escolha do framework

Facilidade no manuseio do arquivo .json, possibilidade de ampliar as funcionalidades

##Dificuldades

A paginação foi um desafio, mas depois de entender o conceito ficou mais fácil!

##Melhorias no Futuro

Testes unitários, implementação de token para acesso às informações, uso de um banco de dados para armazenamento dos cadastros
