//crear fecha
const getHora = (req, res, next) => {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    const formatTime = `${hour}:${minute}:${second}`;

    req.dateType = `La hora actual es: ${formatTime}`;
    next();            
}

module.exports = getHora;