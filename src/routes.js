const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');


/**
 * no site do hapi, entrando no JOI através dos modules tu encontra as validacoes e como fazer
 * 
 * fazer validação da criação dos incidents juntando validação de HEADER e de BODY    FAAAAAAAZERRRRRRRRRRRR
 *          fazer rota incidents.get tambem     DAR UMA VERIFICADA
 */
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;