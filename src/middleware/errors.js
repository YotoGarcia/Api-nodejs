function error (messaje, code){
    let e = new Error(messaje);

    if(code){
        e.statusCode = code;
    }

    return e;
}

module.exports = error;