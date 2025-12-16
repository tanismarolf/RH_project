const express = require("express");
const router = express.Router();
const DirectionController = require("../controllers/DirectionController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Direction:
 *       type: object
 *       properties:
 *         id_direction:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: Directions
 *   description: Gestion des Directions
 */

/**
 * @swagger
 * /api/directions:
 *   get:
 *     summary: Récupérer toutes les Directions
 *     tags: [Directions]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Direction'
 */
router.get("/", DirectionController.getAll);

/**
 * @swagger
 * /api/directions/{id}:
 *   get:
 *     summary: Récupérer une Direction par ID
 *     tags: [Directions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Direction
 *     responses:
 *       200:
 *         description: Détails de la Direction
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Direction'
 *       404:
 *         description: Direction non trouvée
 */
router.get("/:id", DirectionController.getById);

/**
 * @swagger
 * /api/directions:
 *   post:
 *     summary: Créer une Direction
 *     tags: [Directions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Direction'
 *     responses:
 *       201:
 *         description: Direction créée avec succès
 */
router.post("/", DirectionController.create);

/**
 * @swagger
 * /api/directions/{id}:
 *   put:
 *     summary: Mettre à jour une Direction
 *     tags: [Directions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Direction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Direction'
 *     responses:
 *       200:
 *         description: Direction mise à jour avec succès
 *       404:
 *         description: Direction non trouvée
 */
router.put("/:id", DirectionController.update);

/**
 * @swagger
 * /api/directions/{id}:
 *   delete:
 *     summary: Supprimer une Direction
 *     tags: [Directions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Direction
 *     responses:
 *       200:
 *         description: Direction supprimée avec succès
 *       404:
 *         description: Direction non trouvée
 */
router.delete("/:id", DirectionController.delete);

module.exports = router;
