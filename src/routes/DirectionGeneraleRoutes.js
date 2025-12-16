const express = require("express");
const router = express.Router();
const DirectionGeneraleController = require("../controllers/DirectionGeneraleController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     DirectionGenerale:
 *       type: object
 *       properties:
 *         id_direction_generale:
 *           type: integer
 *         description:
 *           type: string
 * tags:
 *   name: DirectionGenerales
 *   description: Gestion des Directions Générales
 */

/**
 * @swagger
 * /api/directions-generales:
 *   get:
 *     summary: Récupérer toutes les Directions Générales
 *     tags: [DirectionGenerales]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DirectionGenerale'
 */
router.get("/", DirectionGeneraleController.getAll);

/**
 * @swagger
 * /api/directions-generales/{id}:
 *   get:
 *     summary: Récupérer une Direction Générale par ID
 *     tags: [DirectionGenerales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la DG
 *     responses:
 *       200:
 *         description: Détails de la DG
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DirectionGenerale'
 *       404:
 *         description: DG non trouvée
 */
router.get("/:id", DirectionGeneraleController.getById);

/**
 * @swagger
 * /api/directions-generales:
 *   post:
 *     summary: Créer une Direction Générale
 *     tags: [DirectionGenerales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DirectionGenerale'
 *     responses:
 *       201:
 *         description: DG créée avec succès
 */
router.post("/", DirectionGeneraleController.create);

/**
 * @swagger
 * /api/directions-generales/{id}:
 *   put:
 *     summary: Mettre à jour une Direction Générale
 *     tags: [DirectionGenerales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la DG
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DirectionGenerale'
 *     responses:
 *       200:
 *         description: DG mise à jour avec succès
 *       404:
 *         description: DG non trouvée
 */
router.put("/:id", DirectionGeneraleController.update);

/**
 * @swagger
 * /api/directions-generales/{id}:
 *   delete:
 *     summary: Supprimer une Direction Générale
 *     tags: [DirectionGenerales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la DG
 *     responses:
 *       200:
 *         description: DG supprimée avec succès
 *       404:
 *         description: DG non trouvée
 */
router.delete("/:id", DirectionGeneraleController.delete);

module.exports = router;
