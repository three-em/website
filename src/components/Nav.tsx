import { DownloadIcon } from "@iconicicons/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import styles from "../styles/components/Nav.module.sass";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  function scrollListener() {
    setScrolled(window.scrollY > 100);
  }

  return (
    <>
      <div className={styles.Gradient1} />
      <div className={styles.Gradient2} />
      <div className={styles.Nav + " " + ((scrolled && styles.Scrolled) || "")}>
        <Link href="/">
          <a className={styles.Logo}>
            <img src="/logo.svg" alt="3em" draggable={false} />
          </a>
        </Link>
        <div className={styles.Menu}>
          <a href="https://docs.3em.dev" className={styles.MenuItem}>
            Docs
          </a>
          <a href="https://discord.gg/HTkc6CZ2xv" className={styles.MenuItem}>
            Chat
          </a>
          <Button className={styles.MenuItem} secondary>
            <DownloadIcon />
            Download
          </Button>
        </div>
      </div>
    </>
  );
}
