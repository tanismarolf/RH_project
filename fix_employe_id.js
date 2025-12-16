const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected.');

    // Check if id_employe is already auto-increment (identity or default)
    // This query is specific to Postgres to check for sequences/identity
    const checkQuery = `
      SELECT column_default, is_identity 
      FROM information_schema.columns 
      WHERE table_name = 'employe' AND column_name = 'id_employe';
    `;
    const [results] = await sequelize.query(checkQuery);
    console.log('Column info:', results);

    if (results.length > 0) {
        const { column_default, is_identity } = results[0];
        if (!column_default && is_identity === 'NO') {
            console.log('Fixing id_employe to be SERIAL/IDENTITY...');
            // Create sequence and attach it
            await sequelize.query(`CREATE SEQUENCE IF NOT EXISTS employe_id_seq;`);
            
            // Get max id to set sequence
            const [maxIdRes] = await sequelize.query(`SELECT MAX(id_employe) as max_id FROM "employe"`);
            const maxId = maxIdRes[0].max_id || 0;
            console.log(`Setting sequence to ${maxId + 1}`);
            
            await sequelize.query(`ALTER SEQUENCE employe_id_seq RESTART WITH ${maxId + 1};`);
            await sequelize.query(`ALTER TABLE "employe" ALTER COLUMN "id_employe" SET DEFAULT nextval('employe_id_seq');`);
            console.log('Success: id_employe is now auto-incrementing.');
        } else {
            console.log('id_employe seems to already have a default or identity.');
        }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
})();
