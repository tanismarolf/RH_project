const express = require("express");
const router = express.Router();
const employeController = require("../controllers/employeController");
const verifyToken = require("../middlewares/AuthMiddleware");
const { isAdmin, isManager, hasRole } = require("../middlewares/RoleMiddleware");

/**
 * @swagger
 * components:
 *   schemas:
 *     Employe:
 *       type: object
 *       required:
 *         - nom
 *         - prenom
 *         - email
 *       properties:
 *         id_employe:
 *           type: integer
 *           description: ID auto-généré de l'employé
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         code:
 *           type: string
 *         email:
 *           type: string
 *         adresse:
 *           type: string
 *         date_naissance:
 *           type: string
 *           format: date
 *         lieu_naissance:
 *           type: string
 *         nom_du_dependant:
 *           type: string
 *         groupe_sanguin:
 *           type: string
 *         telephone:
 *           type: string
 *         etat_matrimonial:
 *           type: string
 *         nif:
 *           type: string
 *         ninu:
 *           type: string
 *         type:
 *           type: string
 * tags:
 *   name: Employes
 *   description: Gestion des employés
 */

/**
 * @swagger
 * /api/employes:
 *   get:
 *     summary: Récupérer la liste de tous les employés
 *     tags: [Employes]
 *     responses:
 *       200:
 *         description: Liste des employés récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employe'
 */
router.get(
  "/", 
  // verifyToken, 
  employeController.getAll
);

/**
 * @swagger
 * /api/employes/{id}:
 *   get:
 *     summary: Récupérer un employé par son ID
 *     tags: [Employes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'employé
 *     responses:
 *       200:
 *         description: Détails de l'employé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employe'
 *       404:
 *         description: Employé non trouvé
 */
router.get("/:id", 
  // verifyToken, 
  employeController.getById);

/**
 * @swagger
 * /api/employes:
 *   post:
 *     summary: Créer un nouvel employé
 *     tags: [Employes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employe'
 *     responses:
 *       201:
 *         description: Employé créé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post(
  "/", 
  // verifyToken, 
  // isAdmin, 
  employeController.create
);

/**
 * @swagger
 * /api/employes/{id}:
 *   put:
 *     summary: Mettre à jour un employé existant
 *     tags: [Employes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'employé
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employe'
 *     responses:
 *       200:
 *         description: Employé mis à jour avec succès
 *       404:
 *         description: Employé non trouvé
 */
router.put(
  "/:id", 
  // verifyToken, 
  // isAdmin, 
  employeController.update
);

/**
 * @swagger
 * /api/employes/{id}:
 *   delete:
 *     summary: Supprimer un employé
 *     tags: [Employes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'employé
 *     responses:
 *       200:
 *         description: Employé supprimé avec succès
 *       404:
 *         description: Employé non trouvé
 */
router.delete(
  "/:id", 
  // verifyToken, 
  // isAdmin, 
  employeController.delete
);

// Exemple : route réservée aux managers OU admins
router.get("/rapport/mois", verifyToken, hasRole("admin", "manager"), (req, res) => {
  res.json({ message: "Rapport mensuel accessible" });
});

module.exports = router;


