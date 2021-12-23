import { ArrowRightIcon, CodeIcon, DownloadIcon } from "@iconicicons/react";
import { useEffect } from "react";
import codeImage from "../assets/code.svg";
import codeTerminalImage from "../assets/code-terminal.svg";
import asLogo from "../assets/language-icons/as.svg";
import goLogo from "../assets/language-icons/go.svg";
import jsLogo from "../assets/language-icons/js.svg";
import rustLogo from "../assets/language-icons/rust.svg";
import solidityLogo from "../assets/language-icons/solidity.svg";
import tsLogo from "../assets/language-icons/ts.svg";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import Typed from "typed.js";
import styles from "../styles/views/Home.module.sass";

export default function Home() {
  useEffect(() => {
    const options = {
      strings: [
        "WASM",
        "Rust",
        "Solidity",
        "Go",
        "JavaScript",
        "TypeScript",
        "AssemblyScript"
      ],
      loop: true,
      loopCount: 2,

      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: false
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.Landing}>
        <div className={styles.LandingContent}>
          <div className={styles.LandingText}>
            <h1>Smart Contracts.</h1>
            <h2>
              Write contracts in{" "}
              <div className={styles.ContractLanguage}>
                <span id="typed" />
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
      <div className={styles.Features}>
        <div className={styles.FeaturesWrapper}>
          <FeatureCard />
          <div className={styles.FeatureSpacer} />
          <FeatureCard purple />
          <div className={styles.FeatureSpacer} />
          <FeatureCard />
          <div className={styles.FeatureSpacer} />
          <FeatureCard purple />
          <div className={styles.FeatureSpacer} />
          <FeatureCard />
        </div>
      </div>
      <div className={styles.Explainer}>
        <div className={styles.Content}>
          <h3>Performance first</h3>
          <h1>Fast contracts.</h1>
          <h2>Supercharged runtime.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            neque non excepturi, itaque dolore dolorum deleniti illum et
            adipisci explicabo praesentium repellendus? Suscipit, autem atque
            soluta perferendis repudiandae debitis est.
          </p>
          <a
            href="https://docs.3em.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build a contract
            <ArrowRightIcon />
          </a>
        </div>
        <div className={styles.Demonstrate}></div>
      </div>
    </>
  );
}
