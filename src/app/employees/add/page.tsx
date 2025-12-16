/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';
import styles from './add.module.css';

export default function AddEmployeePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    code: '',
    email: '',
    adresse: '',
    date_naissance: '',
    lieu_naissance: '',
    nom_du_dependant: '',
    groupe_sanguin: '',
    telephone: '',
    etat_matrimonial: '',
    nif: '',
    ninu: '',
    type: '',
    // Associations (IDs)
    direction_generales: [],
    structures: [],
    coordinations: [],
    directions: [],
    services: [],
    sections: [],
    bacs: [],
    postes: [],
    corps_de_metiers: [],
    type_employes: [],
    niveau_etudes: []
  });

  // State for dropdown options
  const [options, setOptions] = useState({
    direction_generales: [],
    structures: [],
    coordinations: [],
    directions: [],
    services: [],
    sections: [],
    bacs: [],
    postes: [],
    corps_de_metiers: [],
    type_employes: [],
    niveau_etudes: []
  });

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const [dg, str, coord, dir, serv, sec, bac, poste, cdm, typeEmp, nivEtude] = await Promise.all([
        api.get('/directions-generales'),
        api.get('/structures'),
        api.get('/coordination'),
        api.get('/directions'),
        api.get('/services'),
        api.get('/sections'),
        api.get('/bac'),
        api.get('/postes'),
        api.get('/corps-de-metier'),
        api.get('/type-employes'),
        api.get('/niveaux-etude')
      ]);

      setOptions({
        direction_generales: dg.data,
        structures: str.data,
        coordinations: coord.data,
        directions: dir.data,
        services: serv.data,
        sections: sec.data,
        bacs: bac.data,
        postes: poste.data,
        corps_de_metiers: cdm.data,
        type_employes: typeEmp.data,
        niveau_etudes: nivEtude.data
      });
    } catch (error) {
      console.error("Error fetching options", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => parseInt(option.value));
    setFormData(prev => ({ ...prev, [field]: selectedOptions }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/employes', formData);
      router.push('/employees');
    } catch (error) {
      console.error("Error creating employee", error);
      alert("Erreur lors de la création de l'employé");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Ajouter un employé</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.section}>
            <h3>Informations Personnelles</h3>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Nom *</label>
                <input name="nom" value={formData.nom} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label>Prénom *</label>
                <input name="prenom" value={formData.prenom} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Code</label>
                <input name="code" value={formData.code} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Adresse</label>
                <input name="adresse" value={formData.adresse} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label>Date de naissance *</label>
                <input type="date" name="date_naissance" value={formData.date_naissance} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Lieu de naissance *</label>
                <input name="lieu_naissance" value={formData.lieu_naissance} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label>Nom du dépendant</label>
                <input name="nom_du_dependant" value={formData.nom_du_dependant} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Groupe Sanguin *</label>
                <input name="groupe_sanguin" value={formData.groupe_sanguin} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label>Téléphone *</label>
                <input name="telephone" value={formData.telephone} onChange={handleChange} required />
              </div>
            </div>
             <div className={styles.row}>
              <div className={styles.group}>
                <label>Etat Matrimonial</label>
                <select name="etat_matrimonial" value={formData.etat_matrimonial} onChange={handleChange}>
                    <option value="">Sélectionner</option>
                    <option value="Célibataire">Célibataire</option>
                    <option value="Marié(e)">Marié(e)</option>
                    <option value="Divorcé(e)">Divorcé(e)</option>
                    <option value="Veuf(ve)">Veuf(ve)</option>
                </select>
              </div>
              <div className={styles.group}>
                <label>NIF</label>
                <input name="nif" value={formData.nif} onChange={handleChange} />
              </div>
            </div>
             <div className={styles.row}>
              <div className={styles.group}>
                <label>NINU</label>
                <input name="ninu" value={formData.ninu} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label>Type (Statut)</label>
                <input name="type" value={formData.type} onChange={handleChange} placeholder="Ex: Contractuel, Permanent..." />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Affectations & Poste</h3>
            <div className={styles.row}>
               <div className={styles.group}>
                <label>Poste</label>
                <select multiple name="postes" onChange={(e) => handleMultiSelectChange(e, 'postes')} className={styles.selectMultiple}>
                  {options.postes.map((opt: any) => (
                    <option key={opt.id_poste} value={opt.id_poste}>{opt.titre_poste}</option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label>Type d'employé *</label>
                 <select multiple name="type_employes" onChange={(e) => handleMultiSelectChange(e, 'type_employes')} className={styles.selectMultiple}>
                  {options.type_employes.map((opt: any) => (
                    <option key={opt.id_type_employe} value={opt.id_type_employe}>{opt.nom_type}</option>
                  ))}
                </select>
              </div>
            </div>

             <div className={styles.row}>
               <div className={styles.group}>
                <label>Direction Générale</label>
                <select multiple name="direction_generales" onChange={(e) => handleMultiSelectChange(e, 'direction_generales')} className={styles.selectMultiple}>
                  {options.direction_generales.map((opt: any) => (
                    <option key={opt.id_direction_generale} value={opt.id_direction_generale}>{opt.nom_direction_generale}</option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label>Structure</label>
                 <select multiple name="structures" onChange={(e) => handleMultiSelectChange(e, 'structures')} className={styles.selectMultiple}>
                  {options.structures.map((opt: any) => (
                    <option key={opt.id_structure} value={opt.id_structure}>{opt.nom_structure}</option>
                  ))}
                </select>
              </div>
            </div>

             <div className={styles.row}>
               <div className={styles.group}>
                <label>Direction</label>
                <select multiple name="directions" onChange={(e) => handleMultiSelectChange(e, 'directions')} className={styles.selectMultiple}>
                  {options.directions.map((opt: any) => (
                    <option key={opt.id_direction} value={opt.id_direction}>{opt.nom_direction}</option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label>Service</label>
                 <select multiple name="services" onChange={(e) => handleMultiSelectChange(e, 'services')} className={styles.selectMultiple}>
                  {options.services.map((opt: any) => (
                    <option key={opt.id_service} value={opt.id_service}>{opt.nom_service}</option>
                  ))}
                </select>
              </div>
            </div>
             <div className={styles.row}>
               <div className={styles.group}>
                <label>Niveau d'étude *</label>
                <select multiple name="niveau_etudes" onChange={(e) => handleMultiSelectChange(e, 'niveau_etudes')} className={styles.selectMultiple}>
                  {options.niveau_etudes.map((opt: any) => (
                    <option key={opt.id_niveau_etude} value={opt.id_niveau_etude}>{opt.nom_niveau}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>Annuler</button>
            <button type="submit" className={styles.submitBtn}>Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
}
