"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './layout.module.css';

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>ODVA RH</div>
        </div>
        <nav className={styles.nav}>
          <Link 
            href="/employees" 
            className={`${styles.navLink} ${pathname === '/employees' ? styles.activeLink : ''}`}
          >
            Liste des employés
          </Link>
          <Link 
            href="/employees/add" 
            className={`${styles.navLink} ${pathname === '/employees/add' ? styles.activeLink : ''}`}
          >
            Ajouter un employé
          </Link>
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Déconnexion
        </button>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
