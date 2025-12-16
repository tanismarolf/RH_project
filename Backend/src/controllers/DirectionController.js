const { Direction } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const data = await Direction.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Direction.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Direction introuvable" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Direction.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Direction.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Direction introuvable" });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await Direction.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Direction introuvable" });
    await item.destroy();
    res.json({ message: "Direction  supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
