const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/ServiceController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       properties:
 *         id_service:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: Services
 *   description: Gestion des Services
 */

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Récupérer tous les Services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */
router.get("/", ServiceController.getAll);

/**
 * @swagger
 * /api/services/{id}:
 *   get:
 *     summary: Récupérer un Service par ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Service
 *     responses:
 *       200:
 *         description: Détails du Service
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: Service non trouvé
 */
router.get("/:id", ServiceController.getById);

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Créer un Service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Service créé avec succès
 */
router.post("/", ServiceController.create);

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Mettre à jour un Service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service mis à jour avec succès
 *       404:
 *         description: Service non trouvé
 */
router.put("/:id", ServiceController.update);

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Supprimer un Service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Service
 *     responses:
 *       200:
 *         description: Service supprimé avec succès
 *       404:
 *         description: Service non trouvé
 */
router.delete("/:id", ServiceController.delete);

module.exports = router;
