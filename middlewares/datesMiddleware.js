//middleware para las fechas

function date(req, res, next) {
  req.date = new Date().toLocaleDateString();
  next();
}

module.exports = date;
