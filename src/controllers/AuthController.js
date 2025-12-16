const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Utilisateur } = require("../models");

// enregistrement
const register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Utilisateur.create({ username, password: hashedPassword, role });

    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (err) {
    next(err);
  }
};

// connexion
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Utilisateur.findOne({ where: { username } });

    if (!user) return res.status(404).json({ message: "Utilisateur introuvable" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Mot de passe incorrect" });

    // Ajout su role dans le token
    const token = jwt.sign(
      { id: user.id_utilisateur, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" } // le token dure 2 heures
    );

    res.json({ message: "Connexion réussie", token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    login,
    register
};