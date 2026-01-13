//crear hora
module.exports = (req, res, next) => {
    const now = new Date();
    const minute = now.getMinutes().toString().padStart(2, '0');
    req.horaActual = now.getHours();
    req.horaTotal = `Son las: ${req.horaActual}:${minute}`;
    
    next();
} ;

