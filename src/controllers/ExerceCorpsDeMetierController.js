const { ExerceCorpsDeMetier } = require("../models");

exports.getAllRelations = async (req, res, next) => {
  try {
    const data = await ExerceCorpsDeMetier.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addRelation = async (req, res, next) => {
  try {
    const newRelation = await ExerceCorpsDeMetier.create(req.body);
    res.status(201).json(newRelation);
  } catch (err) {
    next(err);
  }
};

exports.removeRelation = async (req, res, next) => {
  try {
    const { id_employe, id_corps_de_metier } = req.params;
    const relation = await ExerceCorpsDeMetier.findOne({
      where: { id_employe, id_corps_de_metier }
    });
    if (!relation) return res.status(404).json({ message: "Relation introuvable" });
    await relation.destroy();
    res.json({ message: "Relation supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
