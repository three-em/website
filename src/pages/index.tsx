import { CodeIcon, DownloadIcon } from "@iconicicons/react";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/views/Home.module.sass";

export default function Home() {
  return (
    <>
      <div className={styles.Landing}>
        <div className={styles.LandingContent}>
          <div className={styles.LandingText}>
            <h1>Smart Contracts.</h1>
            <h2>
              Write contracts in{" "}
              <div className={styles.ContractLanguage}>
                <span>Rust</span>
                <div className={styles.Selector} />
              </div>
            </h2>
            <p>
              Deploy powerful contracts in a minute and make them permanent and
              free for your users.
            </p>
            <div style={{ display: "flex" }}>
              <Button secondary>
                <DownloadIcon />
                Download
              </Button>
              <Button>
                <CodeIcon />
                Read more
              </Button>
            </div>
          </div>
          <img src="/terminal.svg" draggable={false} />
        </div>
      </div>
    </>
  );
}
