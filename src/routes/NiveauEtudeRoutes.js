const express = require("express");
const router = express.Router();
const NiveauEtudeController = require("../controllers/NiveauEtudeController");

// Routes CRUD
/**
 * @swagger
 * components:
 *   schemas:
 *     NiveauEtude:
 *       type: object
 *       properties:
 *         id_niveau_etude:
 *           type: integer
 *         niveau:
 *           type: string
 *         description:
 *           type: string
 * tags:
 *   name: NiveauEtudes
 *   description: Gestion des Niveaux d'Étude
 */

/**
 * @swagger
 * /api/niveaux-etude:
 *   get:
 *     summary: Récupérer tous les Niveaux d'Étude
 *     tags: [NiveauEtudes]
 *     responses:
 *       200:
 *         description: Liste récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NiveauEtude'
 */
router.get("/", NiveauEtudeController.getAll);

/**
 * @swagger
 * /api/niveaux-etude/{id}:
 *   get:
 *     summary: Récupérer un Niveau d'Étude par ID
 *     tags: [NiveauEtudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Niveau d'Étude
 *     responses:
 *       200:
 *         description: Détails du Niveau d'Étude
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NiveauEtude'
 *       404:
 *         description: Niveau d'Étude non trouvé
 */
router.get("/:id", NiveauEtudeController.getById);

/**
 * @swagger
 * /api/niveaux-etude:
 *   post:
 *     summary: Créer un Niveau d'Étude
 *     tags: [NiveauEtudes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauEtude'
 *     responses:
 *       201:
 *         description: Niveau d'Étude créé avec succès
 */
router.post("/", NiveauEtudeController.create);

/**
 * @swagger
 * /api/niveaux-etude/{id}:
 *   put:
 *     summary: Mettre à jour un Niveau d'Étude
 *     tags: [NiveauEtudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Niveau d'Étude
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauEtude'
 *     responses:
 *       200:
 *         description: Niveau d'Étude mis à jour avec succès
 *       404:
 *         description: Niveau d'Étude non trouvé
 */
router.put("/:id", NiveauEtudeController.update);

/**
 * @swagger
 * /api/niveaux-etude/{id}:
 *   delete:
 *     summary: Supprimer un Niveau d'Étude
 *     tags: [NiveauEtudes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du Niveau d'Étude
 *     responses:
 *       200:
 *         description: Niveau d'Étude supprimé avec succès
 *       404:
 *         description: Niveau d'Étude non trouvé
 */
router.delete("/:id", NiveauEtudeController.delete);

module.exports = router;
