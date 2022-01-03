import sampleFeatureImage from "../assets/sample-feature.svg";
import styles from "../styles/components/FeatureCard.module.sass";

export default function FeatureCard({
  purple = false,
  title,
  description,
  subtitle = ""
}: Props) {
  return (
    <div className={styles.Card + " " + (purple ? styles.Purple : "")}>
      {/*<img*/}
      {/*  src={sampleFeatureImage}*/}
      {/*  alt="feature preview"*/}
      {/*  className={styles.FeaturePreview}*/}
      {/*/>*/}
      <div className={styles.GradientBackground} />
      <div className={styles.Content}>
        <div className={styles.Title}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

interface Props {
  purple?: boolean;
  title: string;
  description: string;
  subtitle?: string;
}
