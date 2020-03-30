const express = require('express');
const routes = require('./routes')
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);

module.exports = app;

/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota apos o simbolo de interrogacao que servem para (filtros, paginacao).
 * Como usar o query: "localhost:3333/users?page=2&name=diego"
 * 
 * Route params: usados para identificar recursos
 * Como usar: "localhost:3333/users/id" e no app.GET (users/:id)
 * 
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos (sempre enviar no formato JSON no insomnia)
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: teble('users').select('*').where()     VAMOS UTILIZAR O KNEX
  */

  /**
   * NO CORS VOCE SELECIONA O FRONT-END QUE PODE ACESSAR SEU BACK-END 
   * EX: app.use(cors({
   *    origin: 'http://<meu app.com>
   * }));
   */


