const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token manquant" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // on garde l'utilisateur connecté en mémoire
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token invalide ou expiré" });
  }
};

module.exports = verifyToken;