require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/sequelize"); // ✅ import direct

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à PostgreSQL réussie");
    app.listen(PORT, () => {
      console.log(`🚀 Le backend est démarré sur : http://localhost:${PORT}`);
      console.log(`📄 Documentation Swagger : http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error("❌ Impossible de se connecter à la base :", err.message);
    process.exit(1);
  }
})();
