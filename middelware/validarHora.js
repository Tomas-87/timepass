//Módulo que contiene la lógica de validación de la hora
const hora = 11;

module.exports = (req, res, next) => {
if (req.horaActual < hora) {
    res.locals.mensaje = `Aun no son las ${hora}:00 NO puedes entrar`;
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje))  
}
next();
};

