const sequelize = require("../config/sequelize");

// modèles principaux
const Employe = require("./Employe");
const DirectionGenerale = require("./DirectionGenerale");
const Structure = require("./Structure");
const Coordination = require("./Coordination");
const Direction = require("./Direction");
const Service = require("./Service");
const Section = require("./Section");
const CorpsDeMetier = require("./CorpsDeMetier");
const Poste = require("./Poste");
const TypeEmploye = require("./TypeEmploye");
const Salaire = require("./Salaire");
const NoteEmploye = require("./NoteEmploye");
const BAC = require("./BAC");
const NiveauEtude = require("./NiveauEtude");
const Utilisateur = require("./utilisateur");

// modèles d'association
const EstAssigneADirectionGenerale = require("./EstAssigneADirectionGenerale");
const EstAssigneAStructure = require("./EstAssigneAStructure");
const EstAssigneACoordination = require("./EstAssigneACoordination");
const EstAssigneADirection = require("./EstAssigneADirection");
const EstAssigneAService = require("./EstAssigneAService");
const EstAssigneASection = require("./EstAssigneASection");
const EstAssigneABAC = require("./EstAssigneABAC");
const RegroupeDGStructure = require("./RegroupeDGStructure");
const SuperviseDGCoord = require("./SuperviseDGCoord");
const CoordonneCoordDir = require("./CoordonneCoordDir");
const CoordonneCoordBAC = require("./CoordonneCoordBAC");
const Contient = require("./Contient");
const Possede = require("./Possede");
const Occupe = require("./Occupe");
const ExerceCorpsDeMetier = require("./ExerceCorpsDeMetier");
const AppartientTypeEmploye = require("./AppartientTypeEmploye");
const AtteintNiveauEtude = require("./AtteintNiveauEtude");

/* -------------------------------------------------
   Associations 1-N
-------------------------------------------------*/
// Salaire <-> Employe
Employe.hasMany(Salaire, { foreignKey: "id_employe" });
Salaire.belongsTo(Employe, { foreignKey: "id_employe" });

// NoteEmploye <-> Employe
Employe.hasMany(NoteEmploye, { foreignKey: "id_employe" });
NoteEmploye.belongsTo(Employe, { foreignKey: "id_employe" });

/* -------------------------------------------------
   Associations N-N via tables d'association
   (on utilise les modèles d'association créés)
-------------------------------------------------*/

// Employe <-> DirectionGenerale
Employe.belongsToMany(DirectionGenerale, {
  through: EstAssigneADirectionGenerale,
  foreignKey: "id_employe",
  otherKey: "id_direction_generale",
  as: "DirectionGenerales"
});
DirectionGenerale.belongsToMany(Employe, {
  through: EstAssigneADirectionGenerale,
  foreignKey: "id_direction_generale",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> Structure
Employe.belongsToMany(Structure, {
  through: EstAssigneAStructure,
  foreignKey: "id_employe",
  otherKey: "id_structure",
  as: "Structures"
});
Structure.belongsToMany(Employe, {
  through: EstAssigneAStructure,
  foreignKey: "id_structure",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> Coordination
Employe.belongsToMany(Coordination, {
  through: EstAssigneACoordination,
  foreignKey: "id_employe",
  otherKey: "id_coordination",
  as: "Coordinations"
});
Coordination.belongsToMany(Employe, {
  through: EstAssigneACoordination,
  foreignKey: "id_coordination",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> Direction
Employe.belongsToMany(Direction, {
  through: EstAssigneADirection,
  foreignKey: "id_employe",
  otherKey: "id_direction",
  as: "Directions"
});
Direction.belongsToMany(Employe, {
  through: EstAssigneADirection,
  foreignKey: "id_direction",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> Service
Employe.belongsToMany(Service, {
  through: EstAssigneAService,
  foreignKey: "id_employe",
  otherKey: "id_service",
  as: "Services"
});
Service.belongsToMany(Employe, {
  through: EstAssigneAService,
  foreignKey: "id_service",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> Section
Employe.belongsToMany(Section, {
  through: EstAssigneASection,
  foreignKey: "id_employe",
  otherKey: "id_section",
  as: "Sections"
});
Section.belongsToMany(Employe, {
  through: EstAssigneASection,
  foreignKey: "id_section",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> BAC
Employe.belongsToMany(BAC, {
  through: EstAssigneABAC,
  foreignKey: "id_employe",
  otherKey: "id_bac",
  as: "BACs"
});
BAC.belongsToMany(Employe, {
  through: EstAssigneABAC,
  foreignKey: "id_bac",
  otherKey: "id_employe",
  as: "Employes"
});

// DirectionGenerale <-> Structure
DirectionGenerale.belongsToMany(Structure, {
  through: RegroupeDGStructure,
  foreignKey: "id_direction_generale",
  otherKey: "id_structure",
  as: "Structures"
});
Structure.belongsToMany(DirectionGenerale, {
  through: RegroupeDGStructure,
  foreignKey: "id_structure",
  otherKey: "id_direction_generale",
  as: "DirectionGenerales"
});

// DirectionGenerale <-> Coordination
DirectionGenerale.belongsToMany(Coordination, {
  through: SuperviseDGCoord,
  foreignKey: "id_direction_generale",
  otherKey: "id_coordination",
  as: "Coordinations"
});
Coordination.belongsToMany(DirectionGenerale, {
  through: SuperviseDGCoord,
  foreignKey: "id_coordination",
  otherKey: "id_direction_generale",
  as: "DirectionGenerales"
});

// Coordination <-> Direction
Coordination.belongsToMany(Direction, {
  through: CoordonneCoordDir,
  foreignKey: "id_coordination",
  otherKey: "id_direction",
  as: "Directions"
});
Direction.belongsToMany(Coordination, {
  through: CoordonneCoordDir,
  foreignKey: "id_direction",
  otherKey: "id_coordination",
  as: "Coordinations"
});

// Coordination <-> BAC
Coordination.belongsToMany(BAC, {
  through: CoordonneCoordBAC,
  foreignKey: "id_coordination",
  otherKey: "id_bac",
  as: "BACs"
});
BAC.belongsToMany(Coordination, {
  through: CoordonneCoordBAC,
  foreignKey: "id_bac",
  otherKey: "id_coordination",
  as: "Coordinations"
});

// Direction <-> Service
Direction.belongsToMany(Service, {
  through: Contient,
  foreignKey: "id_direction",
  otherKey: "id_service",
  as: "Services"
});
Service.belongsToMany(Direction, {
  through: Contient,
  foreignKey: "id_service",
  otherKey: "id_direction",
  as: "Directions"
});

// Service <-> Section
Service.belongsToMany(Section, {
  through: Possede,
  foreignKey: "id_service",
  otherKey: "id_section",
  as: "Sections"
});
Section.belongsToMany(Service, {
  through: Possede,
  foreignKey: "id_section",
  otherKey: "id_service",
  as: "Services"
});

// Employe <-> Poste
Employe.belongsToMany(Poste, {
  through: Occupe,
  foreignKey: "id_employe",
  otherKey: "id_poste",
  as: "Postes"
});
Poste.belongsToMany(Employe, {
  through: Occupe,
  foreignKey: "id_poste",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> CorpsDeMetier
Employe.belongsToMany(CorpsDeMetier, {
  through: ExerceCorpsDeMetier,
  foreignKey: "id_employe",
  otherKey: "id_corps_de_metier",
  as: "CorpsDeMetiers"
});
CorpsDeMetier.belongsToMany(Employe, {
  through: ExerceCorpsDeMetier,
  foreignKey: "id_corps_de_metier",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> TypeEmploye
Employe.belongsToMany(TypeEmploye, {
  through: AppartientTypeEmploye,
  foreignKey: "id_employe",
  otherKey: "id_type_employe",
  as: "TypeEmployes"
});
TypeEmploye.belongsToMany(Employe, {
  through: AppartientTypeEmploye,
  foreignKey: "id_type_employe",
  otherKey: "id_employe",
  as: "Employes"
});

// Employe <-> NiveauEtude
Employe.belongsToMany(NiveauEtude, {
  through: AtteintNiveauEtude,
  foreignKey: "id_employe",
  otherKey: "id_niveau_etude",
  as: "NiveauEtudes"
});
NiveauEtude.belongsToMany(Employe, {
  through: AtteintNiveauEtude,
  foreignKey: "id_niveau_etude",
  otherKey: "id_employe",
  as: "Employes"
});

module.exports = {
  sequelize,
  Employe,
  DirectionGenerale,
  Structure,
  Coordination,
  Direction,
  Service,
  Section,
  CorpsDeMetier,
  Poste,
  TypeEmploye,
  Salaire,
  NoteEmploye,
  BAC,
  NiveauEtude,
  Utilisateur,
  EstAssigneADirectionGenerale,
  EstAssigneAStructure,
  EstAssigneACoordination,
  EstAssigneADirection,
  EstAssigneAService,
  EstAssigneASection,
  EstAssigneABAC,
  RegroupeDGStructure,
  SuperviseDGCoord,
  CoordonneCoordDir,
  CoordonneCoordBAC,
  Contient,
  Possede,
  Occupe,
  ExerceCorpsDeMetier,
  AppartientTypeEmploye,
  AtteintNiveauEtude
};