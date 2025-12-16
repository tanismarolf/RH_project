// Middleware de contrôle des rôles et permissions
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès refusé : réservé à l’administrateur" });
  }

  next(); // ✅ autorisé
};

const isManager = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  if (req.user.role !== "manager" && req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès refusé : réservé aux managers ou administrateurs" });
  }

  next();
};

const isUser = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  // ici tous les rôles connectés (admin, manager, user) peuvent continuer
  next();
};

// Middleware plus flexible : vérifie si l’utilisateur a l’un des rôles passés en paramètre
const hasRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Non authentifié" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Accès refusé : rôle requis (${allowedRoles.join(", ")})` 
      });
    }

    next();
  };
};

module.exports = {
  isAdmin,
  isManager,
  isUser,
  hasRole
};