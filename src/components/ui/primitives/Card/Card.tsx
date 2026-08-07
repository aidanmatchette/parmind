import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  ariaLabel?: string;
};

export function Card({
  children,
  ariaLabel = "Content",
}: CardProps) {
  return (
    <section
      className={styles.card}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}