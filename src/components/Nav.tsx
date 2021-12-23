import { DownloadIcon } from "@iconicicons/react";
import Link from "next/link";
import Button from "./Button";
import styles from "../styles/Components/Nav.module.sass";

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <Link href="/">
        <a className={styles.Logo}>
          <img src="/logo.svg" alt="3em" draggable={false} />
        </a>
      </Link>
      <div className={styles.Menu}>
        <a href="https://docs.3em.dev" className={styles.MenuItem}>
          Docs
        </a>
        <a href="https://chat.3em.dev" className={styles.MenuItem}>
          Chat
        </a>
        <Button className={styles.MenuItem} secondary>
          <DownloadIcon />
          Download
        </Button>
      </div>
    </div>
  );
}
