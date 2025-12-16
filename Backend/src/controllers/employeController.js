const { 
  Employe, 
  DirectionGenerale, 
  Structure, 
  Coordination, 
  Direction, 
  Service, 
  Section, 
  BAC, 
  Poste, 
  CorpsDeMetier, 
  TypeEmploye, 
  NiveauEtude 
} = require("../models");

const employeController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Employe.findAll({
        include: [
          { model: DirectionGenerale, as: 'DirectionGenerales' },
          { model: Structure, as: 'Structures' },
          { model: Coordination, as: 'Coordinations' },
          { model: Direction, as: 'Directions' },
          { model: Service, as: 'Services' },
          { model: Section, as: 'Sections' },
          { model: BAC, as: 'BACs' },
          { model: Poste, as: 'Postes' },
          { model: CorpsDeMetier, as: 'CorpsDeMetiers' },
          { model: TypeEmploye, as: 'TypeEmployes' },
          { model: NiveauEtude, as: 'NiveauEtudes' }
        ]
      });
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const item = await Employe.findByPk(req.params.id, {
        include: [
          { model: DirectionGenerale, as: 'DirectionGenerales' },
          { model: Structure, as: 'Structures' },
          { model: Coordination, as: 'Coordinations' },
          { model: Direction, as: 'Directions' },
          { model: Service, as: 'Services' },
          { model: Section, as: 'Sections' },
          { model: BAC, as: 'BACs' },
          { model: Poste, as: 'Postes' },
          { model: CorpsDeMetier, as: 'CorpsDeMetiers' },
          { model: TypeEmploye, as: 'TypeEmployes' },
          { model: NiveauEtude, as: 'NiveauEtudes' }
        ]
      });
      if (!item) return res.status(404).json({ message: "Employé introuvable" });
      res.json(item);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const item = await Employe.create(req.body);

      // Handle associations if IDs are provided in req.body
      // Expecting arrays of IDs, e.g., directions: [1, 2]
      if (req.body.direction_generales) await item.setDirectionGenerales(req.body.direction_generales);
      if (req.body.structures) await item.setStructures(req.body.structures);
      if (req.body.coordinations) await item.setCoordinations(req.body.coordinations);
      if (req.body.directions) await item.setDirections(req.body.directions);
      if (req.body.services) await item.setServices(req.body.services);
      if (req.body.sections) await item.setSections(req.body.sections);
      if (req.body.bacs) await item.setBACs(req.body.bacs);
      if (req.body.postes) await item.setPostes(req.body.postes);
      if (req.body.corps_de_metiers) await item.setCorpsDeMetiers(req.body.corps_de_metiers);
      if (req.body.type_employes) await item.setTypeEmployes(req.body.type_employes);
      if (req.body.niveau_etudes) await item.setNiveauEtudes(req.body.niveau_etudes);

      // Reload to get the associated data
      const reloadedItem = await item.reload({
        include: [
          { model: DirectionGenerale, as: 'DirectionGenerales' },
          { model: Structure, as: 'Structures' },
          { model: Coordination, as: 'Coordinations' },
          { model: Direction, as: 'Directions' },
          { model: Service, as: 'Services' },
          { model: Section, as: 'Sections' },
          { model: BAC, as: 'BACs' },
          { model: Poste, as: 'Postes' },
          { model: CorpsDeMetier, as: 'CorpsDeMetiers' },
          { model: TypeEmploye, as: 'TypeEmployes' },
          { model: NiveauEtude, as: 'NiveauEtudes' }
        ]
      });

      res.status(201).json(reloadedItem);
    } catch (err) {
      console.error("Error in create employe:", err);
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const item = await Employe.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Employé introuvable" });
      
      await item.update(req.body);

      if (req.body.direction_generales) await item.setDirectionGenerales(req.body.direction_generales);
      if (req.body.structures) await item.setStructures(req.body.structures);
      if (req.body.coordinations) await item.setCoordinations(req.body.coordinations);
      if (req.body.directions) await item.setDirections(req.body.directions);
      if (req.body.services) await item.setServices(req.body.services);
      if (req.body.sections) await item.setSections(req.body.sections);
      if (req.body.bacs) await item.setBACs(req.body.bacs);
      if (req.body.postes) await item.setPostes(req.body.postes);
      if (req.body.corps_de_metiers) await item.setCorpsDeMetiers(req.body.corps_de_metiers);
      if (req.body.type_employes) await item.setTypeEmployes(req.body.type_employes);
      if (req.body.niveau_etudes) await item.setNiveauEtudes(req.body.niveau_etudes);

      res.json(item);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const item = await Employe.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Employé introuvable" });
      await item.destroy();
      res.json({ message: "Employé supprimé avec succès" });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = employeController;
