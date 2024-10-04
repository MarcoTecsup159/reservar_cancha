var Area = require("./modelos/area");

exports.getAreas = function (req, res) {
  Area.find().exec()
    .then(areas => {
      res.json(areas)
    })
    .catch(err => {
      res.send(err);
    });
};

exports.setArea = (req, res) => {
  return new Promise((resolve, reject) => {
    Area.create(req.body)
      .then(nuevaArea => {
        res.status(201).json({ success: true, data: nuevaArea });
        resolve(nuevaArea);
      })
      .catch(error => {
        res.status(400).json({ success: false, error: error.message });
        reject(error);
      });
  });
};

exports.updateArea = function (req, res) {
  return new Promise((resolve, reject) => {
    Area.updateOne(
      { _id: req.params.area_id },
      {
        $set: {
          Nombre: req.body.Nombre,
          Abreviatura: req.body.Abreviatura,
          Estado: req.body.Estado
        }
      }
    )
      .then(() => {
        return Area.find();

      })
      .then(areas => {
        res.json(areas);
        resolve();

      })
      .catch(err => {
        reject(err);

      });
  });
};

exports.removeArea = function (req, res) {
  return new Promise((resolve, reject) => {
    Area.deleteOne({ _id: req.params.area_id })
      .then(() => {
        return Area.find();
      })
      .then(areas => {
        resolve(areas);
        res.json(areas);
      })
      .catch(err => {
        reject(err);
      });
  });
};
