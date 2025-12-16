"use client";

import { useState, useEffect } from 'react';
import api from '@/services/api';
import styles from './employees.module.css';
import { useRouter } from 'next/navigation';

// Define interfaces for data types
interface Employee {
  id_employe: number;
  nom: string;
  prenom: string;
  email: string;
  poste: string; // This might be an object if associated
  type: string;
  structure: string; // This might be an object
  Postes?: { titre_poste: string }[];
  TypeEmployes?: { nom_type: string }[];
  Structures?: { nom_structure: string }[];
  DirectionGenerales?: { nom_direction_generale: string }[];
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Fetch employees from the API
  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employes');
      setEmployees(response.data);
    } catch (error) {
      console.error('Failed to fetch employees', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter employees based on search input
  const filteredEmployees = employees.filter(emp => 
    emp.nom?.toLowerCase().includes(filter.toLowerCase()) ||
    emp.prenom?.toLowerCase().includes(filter.toLowerCase()) ||
    emp.email?.toLowerCase().includes(filter.toLowerCase())
  );
  // Sorting state
  const [sortConfig, setSortConfig] = useState<{ key: keyof Employee | null, direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  // Handle sorting when a column header is clicked
  const handleSort = (key: keyof Employee) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  // Sort employees based on sortConfig
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue == null) return 1;
    if (bValue == null) return -1;

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });
  // Handle employee deletion
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?');
    if (confirmed) {
      try {
        await api.delete(`/employes/${id}`);
        fetchEmployees();
      } catch (error) {
        console.error('Failed to delete employee', error);
      }
    }
  };
  // Render the component
  return (
    <div className={styles.pageContent}>
      <div className={styles.header}>
        <h1>Liste des employés</h1>
        <div className={styles.actions}>
          <input 
            type="text" 
            placeholder="Filtrer..." 
            className={styles.searchInput}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button className={styles.addButton} onClick={() => router.push('/employees/add')}>
            Ajouter un employé
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('nom')}>Nom {sortConfig.key === 'nom' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
              <th onClick={() => handleSort('prenom')}>Prénom {sortConfig.key === 'prenom' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
              <th onClick={() => handleSort('email')}>Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
              <th>Poste</th>
              <th>Type</th>
              <th>Structure</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6}>Chargement...</td></tr>
            ) : sortedEmployees.map((emp) => (
              <tr key={emp.id_employe}>
                <td>{emp.nom}</td>
                <td>{emp.prenom}</td>
                <td>{emp.email}</td>
                <td>{emp.Postes?.map(p => p.titre_poste).join(', ') || '-'}</td>
                <td>{emp.TypeEmployes?.map(t => t.nom_type).join(', ') || '-'}</td>
                <td>{emp.Structures?.map(s => s.nom_structure).join(', ') || '-'}</td>
                <td>
                  <button 
                    className={styles.viewButton}
                    onClick={() => router.push(`/employees/view/${emp.id_employe}`)}
                  >Afficher</button>
                  <button 
                    className={styles.editButton}
                    onClick={() => router.push(`/employees/edit/${emp.id_employe}`)}
                  >Modifier</button>
                  <button 
                    className={styles.deleteButton}
                    onClick={() => handleDelete(emp.id_employe)}
                  >Supprimer</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
