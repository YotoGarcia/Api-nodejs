const TABLA = 'usuarios';

module.exports = function (dbInyectada) {

    let db = dbInyectada;

    if(!db){
        db = require('../../DB/mysql');
    }

    function agregar(body) {
        return db.agregar(TABLA, body);
    }

    return {
        agregar,
    }
}