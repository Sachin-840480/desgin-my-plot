import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  accentLabel: string;
}

export default function FeatureCard({ title, description, accentLabel }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.accentDot} />
        <span className={styles.accentLabel}>{accentLabel}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
}
