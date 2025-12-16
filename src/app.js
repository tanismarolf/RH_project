const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const app = express();

//importation des Routes principales
const employeRoutes = require("./routes/employeRoutes");
const CoodinationRoutes = require("./routes/CoordinationRoutes");
const DirectionGeneraleRoutes = require("./routes/DirectionGeneraleRoutes");
const StructureRoutes = require("./routes/StructureRoutes");
const DirectionRoutes = require("./routes/DirectionRoutes");
const ServiceRoutes = require("./routes/ServiceRoutes");
const SectionRoutes = require("./routes/SectionRoutes");
const CorpsDeMetierRoutes = require("./routes/CorpsDeMetierRoutes");
const PosteRoutes = require("./routes/PosteRoutes");
const TypeEmployeRoutes = require("./routes/TypeEmployeRoutes");
const SalaireRoutes = require("./routes/SalaireRoutes");
const NoteEmployeRoutes = require("./routes/NoteEmployeRoutes");
const BACRoutes = require("./routes/BACRoutes");
const NiveauEtudeRoutes = require("./routes/NiveauEtudeRoutes");
const AuthRoutes = require("./routes/AuthRoutes");

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");


//importation des routes des entites associations

const EstAssigneADirectionGeneraleRoutes = require("./routes/associationRoutes/EstAssigneADirectionGeneraleRoutes");
const EstAssigneAStructureRoutes = require("./routes/associationRoutes/EstAssigneAStructureRoutes");
const EstAssigneADirectionRoutes = require("./routes/associationRoutes/EstAssigneADirectionRoutes");
const EstAssigneAServiceRoutes = require("./routes/associationRoutes/EStAssigneAServiceRoutes");
const EstAssigneASectionRoutes = require("./routes/associationRoutes/EstAssigneASectionRoutes");
const EstAssigneABACRoutes = require("./routes/associationRoutes/EstAssigneABACRoutes");
const RegroupeDGStructureRoutes = require("./routes/associationRoutes/RegroupeDGStructureRoutes");
const SuperviseDGCoordRoutes = require("./routes/associationRoutes/SuperviseDGCoordRoutes");
const CoordonneCoordDirRoutes = require("./routes/associationRoutes/CoordonneCoordDirRoutes");
const CoordonneCoordBACRoutes = require("./routes/associationRoutes/CoordonneCoordBACRoutes");
const ContientRoutes = require("./routes/associationRoutes/ContientDirServiceRoutes");
const PossedeRoutes = require("./routes/associationRoutes/PossedeServiceSectionRoutes");
const OccupeRoutes = require("./routes/associationRoutes/OccupePosteRoutes");
const ExerceCorpsDeMetierRoutes = require("./routes/associationRoutes/ExerceCorpsDeMetierRoutes");
const AppartientTypeEmployeRoutes = require("./routes/associationRoutes/AppartientTypeEmployeRoutes");
const AtteintNiveauEtudeRoutes = require("./routes/associationRoutes/AtteintNiveauEtudeRoutes");
const EstAssigneACoordinationRoutes = require("./routes/associationRoutes/EstAssigneACoordination");

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



// utilisation des routes principales
app.use("/api/employes", employeRoutes);
app.use("/api/bac", BACRoutes);
app.use("/api/services", ServiceRoutes);
app.use("/api/coordination", CoodinationRoutes);
app.use("/api/directions", DirectionRoutes);
app.use("/api/sections", SectionRoutes);
app.use("/api/structures", StructureRoutes);
app.use("/api/corps-de-metier", CorpsDeMetierRoutes);
app.use("/api/postes", PosteRoutes);
app.use("/api/type-employes", TypeEmployeRoutes);
app.use("/api/salaires", SalaireRoutes);
app.use("/api/notes", NoteEmployeRoutes);
app.use("/api/niveaux-etude", NiveauEtudeRoutes);
app.use("/api/directions-generales", DirectionGeneraleRoutes);
app.use("/api/auth",AuthRoutes);

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Optional: serve raw OpenAPI JSON at /api-docs.json
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});


//utilisation des Routes des entites associations
// Routes des associations
app.use("/api/relations/est-assigne-direction-generale", EstAssigneADirectionGeneraleRoutes);
app.use("/api/relations/est-assigne-structure", EstAssigneAStructureRoutes);
app.use("/api/relations/est-assigne-coordination", EstAssigneACoordinationRoutes);
app.use("/api/relations/est-assigne-direction", EstAssigneADirectionRoutes);
app.use("/api/relations/est-assigne-service", EstAssigneAServiceRoutes);
app.use("/api/relations/est-assigne-section", EstAssigneASectionRoutes);
app.use("/api/relations/est-assigne-bac", EstAssigneABACRoutes);
app.use("/api/relations/regroupe", RegroupeDGStructureRoutes);
app.use("/api/relations/supervise", SuperviseDGCoordRoutes);
app.use("/api/relations/coordonne-dir", CoordonneCoordDirRoutes);
app.use("/api/relations/coordonne-bac", CoordonneCoordBACRoutes);
app.use("/api/relations/contient", ContientRoutes);
app.use("/api/relations/possede", PossedeRoutes);
app.use("/api/relations/occupe", OccupeRoutes);
app.use("/api/relations/exerce", ExerceCorpsDeMetierRoutes);
app.use("/api/relations/appartient",AppartientTypeEmployeRoutes);
app.use("/api/relations/atteint", AtteintNiveauEtudeRoutes);


// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// Error handler (middleware centralisé)
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);


module.exports = app;