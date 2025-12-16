
-- Database: Ressource_ODVA

DROP DATABASE IF EXISTS "base_odva";

CREATE DATABASE "base_odva"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;



	-- Table Employé
CREATE TABLE Employe (
    id_employe INT PRIMARY KEY,
    nom VARCHAR(25),
    prenom VARCHAR(50),
    code VARCHAR(50),
    email VARCHAR(255),
    adresse VARCHAR(255),
    date_naissance DATE,
    lieu_naissance VARCHAR(255),
    nom_du_dependant VARCHAR(255),
    groupe_sanguin VARCHAR(50),
    telephone VARCHAR(20),
    Etat_matrimonial VARCHAR(50),
    NIF VARCHAR(50),
    NINU VARCHAR(50),
    type VARCHAR(50)
);

-- Table Direction_Generale
CREATE TABLE Direction_Generale (
    id_direction_generale INT PRIMARY KEY,
    description TEXT
);

-- Table Structure
CREATE TABLE Structure (
    id_structure INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT
);

-- Table Coordination
CREATE TABLE Coordination (
    id_coordination INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT
);

-- Table Direction
CREATE TABLE Direction (
    id_direction INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT
);

-- Table Service
CREATE TABLE Service (
    id_service INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT
);

-- Table Section
CREATE TABLE Section (
    id_section INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT
);

-- Table Corps_de_metier
CREATE TABLE Corps_de_metier (
    id_corps_de_metier INT PRIMARY KEY,
    nom VARCHAR(50),
    description TEXT,
    date_debut DATE,
    date_fin DATE
);

-- Table Poste
CREATE TABLE Poste (
    id_poste INT PRIMARY KEY,
    titre VARCHAR(50),
    description TEXT,
    date_debut DATE,
    date_fin DATE,
    termes_de_reference TEXT,
    fiche_de_poste TEXT
);

-- Table Type_employe
CREATE TABLE Type_employe (
    id_type_employe INT PRIMARY KEY,
    type VARCHAR(50),
    date_embauchage DATE
);

-- Table Salaire
CREATE TABLE Salaire (
    id_salaire INT PRIMARY KEY,
    id_employe INT REFERENCES Employe(id_employe), -- FK vers Employe
    annee_fiscale INT,
    salaire_brut DECIMAL(10, 2),
    salaire_net DECIMAL(10, 2),
    prime DECIMAL(10, 2)
);

-- Table Note_employe (une seule note par employé par année fiscale)
CREATE TABLE Note_employe (
    id_note_employe INT PRIMARY KEY,
    id_employe INT REFERENCES Employe(id_employe),
    annee_fiscale INT,
    note DECIMAL(4, 2),
    mention VARCHAR(50),
    description TEXT,
    UNIQUE (id_employe, annee_fiscale) -- Contrainte d'unicité
);

-- Table BAC (Bureau Agricole Communale)
CREATE TABLE BAC (
    id_BAC INT PRIMARY KEY,
    nom VARCHAR(50),
    address VARCHAR(50),
    description TEXT
);

-- Table niveau_etude
CREATE TABLE niveau_etude (
    id_niveau_etude INT PRIMARY KEY,
    niveau VARCHAR(50),
    description TEXT
);

-- Table Utilisateur
CREATE TABLE utilisateur (
    id_utilisateur SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'employe'
);



-- TABLES D'ASSOCIATION POUR LES RELATIONS

-- Relation Employe Est_assigné_à Direction_Generale (1,N - 1,N)
CREATE TABLE Est_assigne_a_Direction_Generale (
    id_employe INT REFERENCES Employe(id_employe),
    id_direction_generale INT REFERENCES Direction_Generale(id_direction_generale),
    PRIMARY KEY (id_employe, id_direction_generale)
);

-- Relation Employe Est_assigné_à Structure (1,N - 1,N)
CREATE TABLE Est_assigne_a_Structure (
    id_employe INT REFERENCES Employe(id_employe),
    id_structure INT REFERENCES Structure(id_structure),
    PRIMARY KEY (id_employe, id_structure)
);

-- Relation Employe Est_assigné_à Coordination (1,N - 0,N)
CREATE TABLE Est_assigne_a_Coordination (
    id_employe INT REFERENCES Employe(id_employe),
    id_coordination INT REFERENCES Coordination(id_coordination),
    PRIMARY KEY (id_employe, id_coordination)
);

-- Relation Employe Est_assigné_à Direction (1,N - 0,N)
CREATE TABLE Est_assigne_a_Direction (
    id_employe INT REFERENCES Employe(id_employe),
    id_direction INT REFERENCES Direction(id_direction),
    PRIMARY KEY (id_employe, id_direction)
);

-- Relation Employe Est_assigné_à Service (1,N - 0,N)
CREATE TABLE Est_assigne_a_Service (
    id_employe INT REFERENCES Employe(id_employe),
    id_service INT REFERENCES Service(id_service),
    PRIMARY KEY (id_employe, id_service)
);

-- Relation Employe Est_assigné_à Section (1,N - 0,N)
CREATE TABLE Est_assigne_a_Section (
    id_employe INT REFERENCES Employe(id_employe),
    id_section INT REFERENCES Section(id_section),
    PRIMARY KEY (id_employe, id_section)
);

-- Relation Employe Est_assigné_à BAC (1,N - 1,1)
CREATE TABLE Est_assigne_a_BAC (
    id_employe INT REFERENCES Employe(id_employe),
    id_BAC INT REFERENCES BAC(id_BAC),
    PRIMARY KEY (id_employe, id_BAC)
);


-- Relation Regroupe (Direction_Generale à Structure)
CREATE TABLE Regroupe_DG_Structure (
    id_direction_generale INT REFERENCES Direction_Generale(id_direction_generale),
    id_structure INT REFERENCES Structure(id_structure),
    PRIMARY KEY (id_direction_generale, id_structure)
);

-- Relation Supervise (Direction_Generale à Coordination)
CREATE TABLE Supervise_DG_Coord (
    id_direction_generale INT REFERENCES Direction_Generale(id_direction_generale),
    id_coordination INT REFERENCES Coordination(id_coordination),
    PRIMARY KEY (id_direction_generale, id_coordination)
);

-- Relation Coordonne (Coordination à Direction)
CREATE TABLE Coordonne_Coord_Dir (
    id_coordination INT REFERENCES Coordination(id_coordination),
    id_direction INT REFERENCES Direction(id_direction),
    PRIMARY KEY (id_coordination, id_direction)
);

-- Relation Coordonne (Coordination à BAC)
CREATE TABLE Coordonne_Coord_BAC (
    id_coordination INT REFERENCES Coordination(id_coordination),
    id_BAC INT REFERENCES BAC(id_BAC),
    PRIMARY KEY (id_coordination, id_BAC)
);

-- Relation Contient (Direction à Service)
CREATE TABLE Contient (
    id_direction INT REFERENCES Direction(id_direction),
    id_service INT REFERENCES Service(id_service),
    PRIMARY KEY (id_direction, id_service)
);

-- Relation Possede (Service à Section)
CREATE TABLE Possede (
    id_service INT REFERENCES Service(id_service),
    id_section INT REFERENCES Section(id_section),
    PRIMARY KEY (id_service, id_section)
);

-- Relation Occupe (Employe à Poste)
CREATE TABLE Occupe (
    id_employe INT REFERENCES Employe(id_employe),
    id_poste INT REFERENCES Poste(id_poste),
    PRIMARY KEY (id_employe, id_poste)
);

-- Relation Exerce (Employe à Corps_de_metier)
CREATE TABLE Exerce_Corps_de_Metier (
    id_employe INT REFERENCES Employe(id_employe),
    id_corps_de_metier INT REFERENCES Corps_de_metier(id_corps_de_metier),
    PRIMARY KEY (id_employe, id_corps_de_metier)
);

-- Relation Appartient (Employe à Type_employe)
CREATE TABLE Appartient_Type_Employe (
    id_employe INT REFERENCES Employe(id_employe),
    id_type_employe INT REFERENCES Type_employe(id_type_employe),
    PRIMARY KEY (id_employe, id_type_employe)
);

-- Relation Atteint (Employe à Niveau_etude)
CREATE TABLE Atteint_Niveau_Etude (
    id_employe INT REFERENCES Employe(id_employe),
    id_niveau_etude INT REFERENCES niveau_etude(id_niveau_etude),
    PRIMARY KEY (id_employe, id_niveau_etude)
);


 select * from employe
