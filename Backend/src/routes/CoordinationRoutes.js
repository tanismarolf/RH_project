const express = require("express");
const router = express.Router();
const CoordinationController = require("../controllers/CoordinationController")

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Coordination:
 *       type: object
 *       properties:
 *         id_coordination:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: Coordinations
 *   description: Gestion des Coordinations
 */

/**
 * @swagger
 * /api/coordination:
 *   get:
 *     summary: Récupérer toutes les Coordinations
 *     tags: [Coordinations]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coordination'
 */
router.get("/", CoordinationController.getAll);

/**
 * @swagger
 * /api/coordination/{id}:
 *   get:
 *     summary: Récupérer une Coordination par ID
 *     tags: [Coordinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Coordination
 *     responses:
 *       200:
 *         description: Détails de la Coordination
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coordination'
 *       404:
 *         description: Coordination non trouvée
 */
router.get("/:id", CoordinationController.getById);

/**
 * @swagger
 * /api/coordination:
 *   post:
 *     summary: Créer une Coordination
 *     tags: [Coordinations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coordination'
 *     responses:
 *       201:
 *         description: Coordination créée avec succès
 */
router.post("/", CoordinationController.create);

/**
 * @swagger
 * /api/coordination/{id}:
 *   put:
 *     summary: Mettre à jour une Coordination
 *     tags: [Coordinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Coordination
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coordination'
 *     responses:
 *       200:
 *         description: Coordination mise à jour avec succès
 *       404:
 *         description: Coordination non trouvée
 */
router.put("/:id", CoordinationController.update);

/**
 * @swagger
 * /api/coordination/{id}:
 *   delete:
 *     summary: Supprimer une Coordination
 *     tags: [Coordinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Coordination
 *     responses:
 *       200:
 *         description: Coordination supprimée avec succès
 *       404:
 *         description: Coordination non trouvée
 */
router.delete("/:id", CoordinationController.delete);

module.exports = router;

