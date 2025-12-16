const { DirectionGenerale } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const data = await DirectionGenerale.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await DirectionGenerale.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "DG introuvable" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await DirectionGenerale.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await DirectionGenerale.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "DG introuvable" });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await DirectionGenerale.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "DG introuvable" });
    await item.destroy();
    res.json({ message: "DG supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
