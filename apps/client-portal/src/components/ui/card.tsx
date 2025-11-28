import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./card.module.css";

interface CardProps {
  className?: string;
  dense?: boolean;
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function Card({ className, dense, children }: PropsWithChildren<CardProps>) {
  return (
    <section className={cn(styles.card, dense && styles.cardDense, className)}>{children}</section>
  );
}

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <header className={styles.cardHeader}>
      <div>
        <h2 className={styles.cardTitle}>{title}</h2>
        {subtitle ? <p className={styles.cardSubtitle}>{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}

export function CardDivider() {
  return <hr className={styles.cardDivider} />;
}


