const { TypeEmploye } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const data = await TypeEmploye.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await TypeEmploye.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Type introuvable" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await TypeEmploye.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await TypeEmploye.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Type introuvable" });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await TypeEmploye.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Type introuvable" });
    await item.destroy();
    res.json({ message: "Type supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
