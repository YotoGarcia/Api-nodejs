const express = require('express');
const respuesta = require('../../red/respuestas')

const router = express.Router();

router.get('/', function(req,res){
    respuesta.success(req,res, 'Todo o desde clientes', 200)
});

module.exports = router;