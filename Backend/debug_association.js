const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected.');

    // Insert dummy data
    try {
        await sequelize.query("INSERT INTO poste (id_poste, titre) VALUES (1, 'Directeur') ON CONFLICT DO NOTHING");
        await sequelize.query("INSERT INTO direction_generale (id_direction_generale, description) VALUES (1, 'DG') ON CONFLICT DO NOTHING");
        console.log("Dummy data inserted.");
        
        // Now try to insert into Occupe
        try {
             await sequelize.query('INSERT INTO occupe (id_employe, id_poste) VALUES (99999, 1)');
        } catch (err) {
             console.log('Insert Occupe result:', err.message);
        }
        
    } catch (err) {
        console.error("Insert failed:", err.message);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
})();
