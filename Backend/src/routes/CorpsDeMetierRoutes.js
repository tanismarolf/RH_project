const express = require("express");
const router = express.Router();
const CorpsDeMetierController = require("../controllers/CorpsDeMetierController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     CorpsDeMetier:
 *       type: object
 *       properties:
 *         id_corps_de_metier:
 *           type: integer
 *         nom:
 *           type: string
 *         description:
 *           type: string
 *         date_debut:
 *           type: string
 *           format: date
 *         date_fin:
 *           type: string
 *           format: date
 * tags:
 *   name: CorpsDeMetiers
 *   description: Gestion des Corps de Métier
 */

/**
 * @swagger
 * /api/corps-de-metier:
 *   get:
 *     summary: Récupérer tous les Corps de Métier
 *     tags: [CorpsDeMetiers]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CorpsDeMetier'
 */
router.get("/", CorpsDeMetierController.getAll);

/**
 * @swagger
 * /api/corps-de-metier/{id}:
 *   get:
 *     summary: Récupérer un Corps de Métier par ID
 *     tags: [CorpsDeMetiers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Corps de Métier
 *     responses:
 *       200:
 *         description: Détails du Corps de Métier
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CorpsDeMetier'
 *       404:
 *         description: Corps de Métier non trouvé
 */
router.get("/:id", CorpsDeMetierController.getById);

/**
 * @swagger
 * /api/corps-de-metier:
 *   post:
 *     summary: Créer un Corps de Métier
 *     tags: [CorpsDeMetiers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CorpsDeMetier'
 *     responses:
 *       201:
 *         description: Corps de Métier créé avec succès
 */
router.post("/", CorpsDeMetierController.create);

/**
 * @swagger
 * /api/corps-de-metier/{id}:
 *   put:
 *     summary: Mettre à jour un Corps de Métier
 *     tags: [CorpsDeMetiers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Corps de Métier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CorpsDeMetier'
 *     responses:
 *       200:
 *         description: Corps de Métier mis à jour avec succès
 *       404:
 *         description: Corps de Métier non trouvé
 */
router.put("/:id", CorpsDeMetierController.update);

/**
 * @swagger
 * /api/corps-de-metier/{id}:
 *   delete:
 *     summary: Supprimer un Corps de Métier
 *     tags: [CorpsDeMetiers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Corps de Métier
 *     responses:
 *       200:
 *         description: Corps de Métier supprimé avec succès
 *       404:
 *         description: Corps de Métier non trouvé
 */
router.delete("/:id", CorpsDeMetierController.delete);

module.exports = router;
