const express = require("express");
const router = express.Router();
const StructureController = require("../controllers/StructureController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Structure:
 *       type: object
 *       properties:
 *         id_structure:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: Structures
 *   description: Gestion des Structures
 */

/**
 * @swagger
 * /api/structures:
 *   get:
 *     summary: Récupérer toutes les Structures
 *     tags: [Structures]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Structure'
 */
router.get("/", StructureController.getAll);

/**
 * @swagger
 * /api/structures/{id}:
 *   get:
 *     summary: Récupérer une Structure par ID
 *     tags: [Structures]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Structure
 *     responses:
 *       200:
 *         description: Détails de la Structure
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Structure'
 *       404:
 *         description: Structure non trouvée
 */
router.get("/:id", StructureController.getById);

/**
 * @swagger
 * /api/structures:
 *   post:
 *     summary: Créer une Structure
 *     tags: [Structures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Structure'
 *     responses:
 *       201:
 *         description: Structure créée avec succès
 */
router.post("/", StructureController.create);

/**
 * @swagger
 * /api/structures/{id}:
 *   put:
 *     summary: Mettre à jour une Structure
 *     tags: [Structures]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Structure
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Structure'
 *     responses:
 *       200:
 *         description: Structure mise à jour avec succès
 *       404:
 *         description: Structure non trouvée
 */
router.put("/:id", StructureController.update);

/**
 * @swagger
 * /api/structures/{id}:
 *   delete:
 *     summary: Supprimer une Structure
 *     tags: [Structures]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Structure
 *     responses:
 *       200:
 *         description: Structure supprimée avec succès
 *       404:
 *         description: Structure non trouvée
 */
router.delete("/:id", StructureController.delete);

module.exports = router;
