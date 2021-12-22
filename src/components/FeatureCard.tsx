import sampleFeatureImage from "../assets/sample-feature.svg";
import styles from "../styles/components/FeatureCard.module.sass";

export default function FeatureCard({ purple = false }: Props) {
  return (
    <div className={styles.Card + " " + (purple ? styles.Purple : "")}>
      <img
        src={sampleFeatureImage}
        alt="feature preview"
        className={styles.FeaturePreview}
      />
      <div className={styles.GradientBackground} />
      <div className={styles.Content}>
        <div className={styles.Title}>
          <h1>Test title</h1>
          <p>Test subtitle</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptatum doloribus modi deserunt. Vel reiciendis numquam aut ullam
          alias exercitationem odit, odio inventore, amet ipsam magni dicta sit
          dolorem optio?
        </p>
      </div>
    </div>
  );
}

interface Props {
  purple?: boolean;
}
