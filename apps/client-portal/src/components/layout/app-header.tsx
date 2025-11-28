import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./app-header.module.css";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brandArea}>
        <Link href="/" className={styles.logo} aria-label="Arealis Magnus home">
          <span className={styles.logoMark}>AM</span>
          Arealis Magnus
        </Link>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className={styles.breadcrumbCurrent}>Ingest Data</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className={styles.actions}>
        <div className={styles.profileChip} aria-label="Signed in as Priya Patel">
          <span className={styles.avatar}>PP</span>
          Priya Patel
        </div>
        <Button variant="ghost">Logout</Button>
      </div>
    </header>
  );
}


