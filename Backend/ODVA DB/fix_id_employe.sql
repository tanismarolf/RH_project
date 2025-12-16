-- Exécutez ce script dans DBeaver pour corriger l'erreur "null value in column id_employe"

-- 1. Créer la séquence pour l'auto-incrémentation
CREATE SEQUENCE IF NOT EXISTS employe_id_seq;

-- 2. Mettre à jour la séquence pour qu'elle commence après le dernier ID existant
SELECT setval('employe_id_seq', COALESCE((SELECT MAX(id_employe) FROM employe), 0) + 1, false);

-- 3. Configurer la colonne id_employe pour utiliser cette séquence par défaut
ALTER TABLE employe ALTER COLUMN id_employe SET DEFAULT nextval('employe_id_seq');

-- 4. Donner les permissions à l'utilisateur odva_user
GRANT ALL ON SEQUENCE employe_id_seq TO odva_user;
