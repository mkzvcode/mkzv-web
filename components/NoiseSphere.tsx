import styles from "./NoiseSphere.module.css";

type NoiseSphereProps = {
  compact?: boolean;
};

export function NoiseSphere({ compact = false }: NoiseSphereProps) {
  return (
    <div
      aria-label="Статичная сфера из шумовых частиц"
      className={`${styles.sphere} ${compact ? styles.compact : ""}`}
      role="img"
    />
  );
}
