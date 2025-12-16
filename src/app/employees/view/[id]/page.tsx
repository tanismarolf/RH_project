/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';
// Nou itilize menm stil CSS ak paj ajoute a pou konsistans
// On utilise le même style CSS que la page d'ajout pour la cohérence
import styles from '../../add/add.module.css';

export default function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    // Dechifre paramèt ID a (Next.js 13+)
    // Résolution des paramètres (Next.js 13+)
    const { id } = use(params);

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
        direction_generales: [] as number[],
        structures: [] as number[],
        coordinations: [] as number[],
        directions: [] as number[],
        services: [] as number[],
        sections: [] as number[],
        bacs: [] as number[],
        postes: [] as number[],
        corps_de_metiers: [] as number[],
        type_employes: [] as number[],
        niveau_etudes: [] as number[]
    });

    // Eta pou opsyon dropdown yo
    // État pour les options des listes déroulantes
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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Chaje opsyon yo ak done anplwaye a lè paj la monte
        // Charger les options et les données de l'employé au montage de la page
        const init = async () => {
            await fetchOptions();
            if (id) {
                await fetchEmployeeData(id);
            }
        };
        init();
    }, [id]);

    // Fonksyon pou rekipere tout opsyon pou dropdown yo
    // Fonction pour récupérer toutes les options pour les listes déroulantes
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
            console.error("Erreur lors de la récupération des options", error);
        }
    };

    // Fonksyon pou rekipere done anplwaye espesifik la
    // Fonction pour récupérer les données de l'employé spécifique
    const fetchEmployeeData = async (employeeId: string) => {
        try {
            const response = await api.get(`/employes/${employeeId}`);
            const emp = response.data;

            // Fòmate dat la pou input date la (YYYY-MM-DD)
            // Formater la date pour l'input date (AAAA-MM-JJ)
            const formatDate = (dateString: string) => {
                if (!dateString) return '';
                return new Date(dateString).toISOString().split('T')[0];
            };

            // Mete ajou fòm nan ak done yo resevwa
            // Mettre à jour le formulaire avec les données reçues
            setFormData({
                nom: emp.nom || '',
                prenom: emp.prenom || '',
                code: emp.code || '',
                email: emp.email || '',
                adresse: emp.adresse || '',
                date_naissance: formatDate(emp.date_naissance),
                lieu_naissance: emp.lieu_naissance || '',
                nom_du_dependant: emp.nom_du_dependant || '',
                groupe_sanguin: emp.groupe_sanguin || '',
                telephone: emp.telephone || '',
                etat_matrimonial: emp.etat_matrimonial || '',
                nif: emp.nif || '',
                ninu: emp.ninu || '',
                type: emp.type || '',
                // Map relasyon yo pou jwenn sèlman ID yo
                // Mapper les relations pour obtenir seulement les IDs
                direction_generales: emp.DirectionGenerales?.map((i: any) => i.id_direction_generale) || [],
                structures: emp.Structures?.map((i: any) => i.id_structure) || [],
                coordinations: emp.Coordinations?.map((i: any) => i.id_coordination) || [],
                directions: emp.Directions?.map((i: any) => i.id_direction) || [],
                services: emp.Services?.map((i: any) => i.id_service) || [],
                sections: emp.Sections?.map((i: any) => i.id_section) || [],
                bacs: emp.Bacs?.map((i: any) => i.id_bac) || [],
                postes: emp.Postes?.map((i: any) => i.id_poste) || [],
                corps_de_metiers: emp.CorpsDeMetiers?.map((i: any) => i.id_corps_de_metier) || [],
                type_employes: emp.TypeEmployes?.map((i: any) => i.id_type_employe) || [],
                niveau_etudes: emp.NiveauEtudes?.map((i: any) => i.id_niveau_etude) || []
            });
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'employé", error);
            alert("Impossible de charger les données de l'employé");
            setLoading(false);
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

    

    if (loading) return <div>Chargement...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                <h2 className={styles.title}>Details de l'employe {formData.nom} {formData.prenom}</h2>
                <form className={styles.form}>
                    <div className={styles.section}>
                        <h3>Informations Personnelles</h3>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Nom *</label>
                                <input name="nom" value={formData.nom} disabled />
                            </div>
                            <div className={styles.group}>
                                <label>Prénom *</label>
                                <input name="prenom" value={formData.prenom} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Code</label>
                                <input name="code" value={formData.code} disabled />
                            </div>
                            <div className={styles.group}>
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Adresse</label>
                                <input name="adresse" value={formData.adresse} disabled />
                            </div>
                            <div className={styles.group}>
                                <label>Date de naissance *</label>
                                <input type="date" name="date_naissance" value={formData.date_naissance} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Lieu de naissance *</label>
                                <input name="lieu_naissance" value={formData.lieu_naissance} disabled />
                            </div>
                            <div className={styles.group}>
                                <label>Nom du dépendant</label>
                                <input name="nom_du_dependant" value={formData.nom_du_dependant} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Groupe Sanguin *</label>
                                <input name="groupe_sanguin" value={formData.groupe_sanguin} disabled/>
                            </div>
                            <div className={styles.group}>
                                <label>Téléphone *</label>
                                <input name="telephone" value={formData.telephone} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Etat Matrimonial</label>
                                <select name="etat_matrimonial" value={formData.etat_matrimonial} disabled>
                                    <option value="">Sélectionner</option>
                                    <option value="Célibataire">Célibataire </option>
                                    <option value="Marié(e)">Marié(e)</option>
                                    <option value="Divorcé(e)">Divorcé(e)</option>
                                    <option value="Veuf(ve)">Veuf(ve)</option>
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>NIF</label>
                                <input name="nif" value={formData.nif} disabled />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>NINU</label>
                                <input name="ninu" value={formData.ninu} disabled />
                            </div>
                            <div className={styles.group}>
                                <label>Type (Statut)</label>
                                <input name="type" value={formData.type} disabled placeholder="Ex: Contractuel, Permanent..." />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Affectations & Poste</h3>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Poste</label>
                                <select multiple name="postes" value={formData.postes.map(String)} disabled className={styles.selectMultiple}>
                                    {options.postes.map((opt: any) => (
                                        <option key={opt.id_poste} value={opt.id_poste}>{opt.titre_poste}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>Type d'employé *</label>
                                <select multiple name="type_employes" value={formData.type_employes.map(String)} disabled className={styles.selectMultiple}>
                                    {options.type_employes.map((opt: any) => (
                                        <option key={opt.id_type_employe} value={opt.id_type_employe}>{opt.nom_type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Direction Générale</label>
                                <select multiple name="direction_generales" value={formData.direction_generales.map(String)} disabled className={styles.selectMultiple}>
                                    {options.direction_generales.map((opt: any) => (
                                        <option key={opt.id_direction_generale} value={opt.id_direction_generale}>{opt.nom_direction_generale}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>Structure</label>
                                <select multiple name="structures" value={formData.structures.map(String)} disabled className={styles.selectMultiple}>
                                    {options.structures.map((opt: any) => (
                                        <option key={opt.id_structure} value={opt.id_structure}>{opt.nom_structure}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Direction</label>
                                <select multiple name="directions" value={formData.directions.map(String)} disabled className={styles.selectMultiple}>
                                    {options.directions.map((opt: any) => (
                                        <option key={opt.id_direction} value={opt.id_direction}>{opt.nom_direction}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>Service</label>
                                <select multiple name="services" value={formData.services.map(String)} disabled className={styles.selectMultiple}>
                                    {options.services.map((opt: any) => (
                                        <option key={opt.id_service} value={opt.id_service}>{opt.nom_service}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>Niveau d'étude *</label>
                                <select multiple name="niveau_etudes" value={formData.niveau_etudes.map(String)} disabled className={styles.selectMultiple}>
                                    {options.niveau_etudes.map((opt: any) => (
                                        <option key={opt.id_niveau_etude} value={opt.id_niveau_etude}>{opt.nom_niveau}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>Fermer</button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
}
