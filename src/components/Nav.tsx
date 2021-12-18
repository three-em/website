import { DownloadIcon } from "@iconicicons/react";
import Button from "./Button";
import styles from "../styles/Components/Nav.module.sass";

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.Logo}>
        <img src="/logo.svg" alt="3em" draggable={false} />
      </div>
      <div className={styles.Menu}>
        <a href="https://docs.3em.dev" className={styles.MenuItem}>
          Docs
        </a>
        <Button className={styles.MenuItem} secondary>
          <DownloadIcon />
          Download
        </Button>
      </div>
    </div>
  );
}
