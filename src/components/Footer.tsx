import { MarkGithubIcon, CommentIcon } from "@primer/octicons-react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.sass";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.CurveFill} />
      <div className={styles.Links}>
        <div className={styles.Menu}>
          <img
            src="/logo.svg"
            alt="3em"
            draggable={false}
            className={styles.Logo}
          />
          <Link href="/">Home</Link>
          <a href="https://github.com/three-em/3em/blob/main/LICENSE">
            License
          </a>
        </div>
        <div className={styles.Social}>
          <a href="/">
            <CommentIcon />
          </a>
          <a href="https://github.com/three-em/3em">
            <MarkGithubIcon />
          </a>
        </div>
      </div>
      <div className={styles.Separate} />
      <p className={styles.Copyright}>
        Copyright (c) {new Date().getFullYear()}. The Web 3 Execution Machine.
        All rights reserved.
      </p>
    </div>
  );
}
