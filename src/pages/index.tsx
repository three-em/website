import { CodeIcon, DownloadIcon } from "@iconicicons/react";
import codeImage from "../assets/code.svg";
import codeTerminalImage from "../assets/code-terminal.svg";
import asLogo from "../assets/language-icons/as.svg";
import goLogo from "../assets/language-icons/go.svg";
import jsLogo from "../assets/language-icons/js.svg";
import rustLogo from "../assets/language-icons/rust.svg";
import solidityLogo from "../assets/language-icons/solidity.svg";
import tsLogo from "../assets/language-icons/ts.svg";
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
          <img src={codeImage} draggable={false} />
        </div>
      </div>
      <div className={styles.LanguageSection}>
        <h1 className={styles.SecondaryTitle}>Permanent contracts.</h1>
        <h1>Any programming language.</h1>
        <p>
          Use your favorite programming language to write contracts and decide
          which fits your project better.
        </p>
        <div className={styles.LanguageIcons}>
          <img
            src={jsLogo}
            alt="js"
            className={styles.Language}
            draggable={false}
          />
          <img
            src={tsLogo}
            alt="ts"
            className={styles.Language}
            draggable={false}
          />
          <img
            src={rustLogo}
            alt="rust"
            className={styles.Language}
            draggable={false}
          />
          <img
            src={goLogo}
            alt="go"
            className={styles.Language}
            draggable={false}
          />
          <img
            src={asLogo}
            alt="as"
            className={styles.Language}
            draggable={false}
          />
          <img
            src={solidityLogo}
            alt="solidity"
            className={styles.Language}
            draggable={false}
          />
        </div>
        <img
          src={codeTerminalImage}
          alt="code-and-terminal"
          className={styles.CodeAndTerminal}
          draggable={false}
        />
      </div>
    </>
  );
}
