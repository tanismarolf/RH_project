const express = require("express");
const router = express.Router();
const SectionController = require("../controllers/SectionController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Section:
 *       type: object
 *       properties:
 *         id_section:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: Sections
 *   description: Gestion des Sections
 */

/**
 * @swagger
 * /api/sections:
 *   get:
 *     summary: Récupérer toutes les Sections
 *     tags: [Sections]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Section'
 */
router.get("/", SectionController.getAll);

/**
 * @swagger
 * /api/sections/{id}:
 *   get:
 *     summary: Récupérer une Section par ID
 *     tags: [Sections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Section
 *     responses:
 *       200:
 *         description: Détails de la Section
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Section'
 *       404:
 *         description: Section non trouvée
 */
router.get("/:id", SectionController.getById);

/**
 * @swagger
 * /api/sections:
 *   post:
 *     summary: Créer une Section
 *     tags: [Sections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Section'
 *     responses:
 *       201:
 *         description: Section créée avec succès
 */
router.post("/", SectionController.create);

/**
 * @swagger
 * /api/sections/{id}:
 *   put:
 *     summary: Mettre à jour une Section
 *     tags: [Sections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Section'
 *     responses:
 *       200:
 *         description: Section mise à jour avec succès
 *       404:
 *         description: Section non trouvée
 */
router.put("/:id", SectionController.update);

/**
 * @swagger
 * /api/sections/{id}:
 *   delete:
 *     summary: Supprimer une Section
 *     tags: [Sections]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la Section
 *     responses:
 *       200:
 *         description: Section supprimée avec succès
 *       404:
 *         description: Section non trouvée
 */
router.delete("/:id", SectionController.delete);

module.exports = router;
