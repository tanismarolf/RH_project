const { Salaire } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const data = await Salaire.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Salaire.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Salaire introuvable" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Salaire.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Salaire.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Salaire introuvable" });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await Salaire.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Salaire introuvable" });
    await item.destroy();
    res.json({ message: "Salaire supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
