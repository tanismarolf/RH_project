const express = require("express");
const router = express.Router();
const PosteController = require("../controllers/PosteController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     Poste:
 *       type: object
 *       properties:
 *         id_poste:
 *           type: integer
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         date_debut:
 *           type: string
 *           format: date
 *         date_fin:
 *           type: string
 *           format: date
 *         termes_de_reference:
 *           type: string
 *         fiche_de_poste:
 *           type: string
 * tags:
 *   name: Postes
 *   description: Gestion des Postes
 */

/**
 * @swagger
 * /api/postes:
 *   get:
 *     summary: Récupérer tous les Postes
 *     tags: [Postes]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Poste'
 */
router.get("/", PosteController.getAll);

/**
 * @swagger
 * /api/postes/{id}:
 *   get:
 *     summary: Récupérer un Poste par ID
 *     tags: [Postes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Poste
 *     responses:
 *       200:
 *         description: Détails du Poste
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Poste'
 *       404:
 *         description: Poste non trouvé
 */
router.get("/:id", PosteController.getById);

/**
 * @swagger
 * /api/postes:
 *   post:
 *     summary: Créer un Poste
 *     tags: [Postes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poste'
 *     responses:
 *       201:
 *         description: Poste créé avec succès
 */
router.post("/", PosteController.create);

/**
 * @swagger
 * /api/postes/{id}:
 *   put:
 *     summary: Mettre à jour un Poste
 *     tags: [Postes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Poste
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poste'
 *     responses:
 *       200:
 *         description: Poste mis à jour avec succès
 *       404:
 *         description: Poste non trouvé
 */
router.put("/:id", PosteController.update);

/**
 * @swagger
 * /api/postes/{id}:
 *   delete:
 *     summary: Supprimer un Poste
 *     tags: [Postes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Poste
 *     responses:
 *       200:
 *         description: Poste supprimé avec succès
 *       404:
 *         description: Poste non trouvé
 */
router.delete("/:id", PosteController.delete);

module.exports = router;
