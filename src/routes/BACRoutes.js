const express = require("express");
const router = express.Router();
const BACController = require("../controllers/BACController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     BAC:
 *       type: object
 *       properties:
 *         id_bac:
 *           type: integer
 *         nom:
 *           type: string
 *         address:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: BACs
 *   description: Gestion des BACs
 */

/**
 * @swagger
 * /api/bac:
 *   get:
 *     summary: Récupérer tous les BACs
 *     tags: [BACs]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BAC'
 */
router.get("/", BACController.getAll);

/**
 * @swagger
 * /api/bac/{id}:
 *   get:
 *     summary: Récupérer un BAC par ID
 *     tags: [BACs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du BAC
 *     responses:
 *       200:
 *         description: Détails du BAC
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BAC'
 *       404:
 *         description: BAC non trouvé
 */
router.get("/:id", BACController.getById);

/**
 * @swagger
 * /api/bac:
 *   post:
 *     summary: Créer un BAC
 *     tags: [BACs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BAC'
 *     responses:
 *       201:
 *         description: BAC créé avec succès
 */
router.post("/", BACController.create);

/**
 * @swagger
 * /api/bac/{id}:
 *   put:
 *     summary: Mettre à jour un BAC
 *     tags: [BACs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du BAC
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BAC'
 *     responses:
 *       200:
 *         description: BAC mis à jour avec succès
 *       404:
 *         description: BAC non trouvé
 */
router.put("/:id", BACController.update);

/**
 * @swagger
 * /api/bac/{id}:
 *   delete:
 *     summary: Supprimer un BAC
 *     tags: [BACs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du BAC
 *     responses:
 *       200:
 *         description: BAC supprimé avec succès
 *       404:
 *         description: BAC non trouvé
 */
router.delete("/:id", BACController.delete);

module.exports = router;
