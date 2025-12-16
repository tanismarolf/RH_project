const express = require("express");
const router = express.Router();
const TypeEmployeController = require("../controllers/TypeEmployeController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     TypeEmploye:
 *       type: object
 *       properties:
 *         id_type_employe:
 *           type: integer
 *         type:
 *           type: string
 *         date_embauchage:
 *           type: string
 *           format: date
 * tags:
 *   name: TypeEmployes
 *   description: Gestion des Types d'Employé
 */

/**
 * @swagger
 * /api/type-employes:
 *   get:
 *     summary: Récupérer tous les Types d'Employé
 *     tags: [TypeEmployes]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TypeEmploye'
 */
router.get("/", TypeEmployeController.getAll);

/**
 * @swagger
 * /api/type-employes/{id}:
 *   get:
 *     summary: Récupérer un Type d'Employé par ID
 *     tags: [TypeEmployes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Type d'Employé
 *     responses:
 *       200:
 *         description: Détails du Type d'Employé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeEmploye'
 *       404:
 *         description: Type d'Employé non trouvé
 */
router.get("/:id", TypeEmployeController.getById);

/**
 * @swagger
 * /api/type-employes:
 *   post:
 *     summary: Créer un Type d'Employé
 *     tags: [TypeEmployes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeEmploye'
 *     responses:
 *       201:
 *         description: Type d'Employé créé avec succès
 */
router.post("/", TypeEmployeController.create);

/**
 * @swagger
 * /api/type-employes/{id}:
 *   put:
 *     summary: Mettre à jour un Type d'Employé
 *     tags: [TypeEmployes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Type d'Employé
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeEmploye'
 *     responses:
 *       200:
 *         description: Type d'Employé mis à jour avec succès
 *       404:
 *         description: Type d'Employé non trouvé
 */
router.put("/:id", TypeEmployeController.update);

/**
 * @swagger
 * /api/type-employes/{id}:
 *   delete:
 *     summary: Supprimer un Type d'Employé
 *     tags: [TypeEmployes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Type d'Employé
 *     responses:
 *       200:
 *         description: Type d'Employé supprimé avec succès
 *       404:
 *         description: Type d'Employé non trouvé
 */
router.delete("/:id", TypeEmployeController.delete);

module.exports = router;
