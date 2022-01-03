import { ArrowRightIcon, CodeIcon, DownloadIcon } from "@iconicicons/react";
import { useEffect, useState } from "react";
import codeImage from "../assets/code.svg";
import codeTerminalImage from "../assets/code-terminal.svg";
import asLogo from "../assets/language-icons/as.svg";
import goLogo from "../assets/language-icons/go.svg";
import jsLogo from "../assets/language-icons/js.svg";
import rustLogo from "../assets/language-icons/rust.svg";
import solidityLogo from "../assets/language-icons/solidity.svg";
import tsLogo from "../assets/language-icons/ts.svg";
import th8taLogo from "../assets/partners/th8ta.svg";
import wasmFeaturePreview from "../assets/features/wasm.svg";
import sandboxFeaturePreview from "../assets/features/sandbox.svg";
import smartweaveFeaturePreview from "../assets/features/smartweave.svg";
import cliFeaturePreview from "../assets/features/cli.svg";
import deterministicFeaturePreview from "../assets/features/deterministic.svg";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import Typed from "typed.js";
import {
  calculateGlobalMean,
  calculateHundredPercent,
  GlobalMean
} from "../helpers/common";
import Head from "next/head";
import styles from "../styles/views/Home.module.sass";

export default function Home() {
  const [jsBenchmark, setJsBenchmark] = useState<GlobalMean>({
    js: 0,
    smartweaveJs: 0,
    highest: 0
  });
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    const strings: Record<string, string> = {
      Solidity: "https://soliditylang.org/",
      WASM: "https://webassembly.org/",
      Rust: "https://www.rust-lang.org/",
      "C++": "https://www.cplusplus.com/",
      JavaScript: "https://www.javascript.com/",
      C: "https://en.wikipedia.org/wiki/C_(programming_language)",
      AssemblyScript: "https://www.assemblyscript.org/",
      Zig: "https://ziglang.org/",
      Vyper: "https://vyper.readthedocs.io/en/stable/"
    };
    const options = {
      strings: Object.keys(strings),
      loop: true,
      loopCount: 2,

      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: false,

      preStringTyped(arrayPos: number) {
        setCurrentURL(strings[Object.keys(strings)[arrayPos]]);
      }
    };

    calculateGlobalMean("js", "smartweaveJs").then((result) => {
      setJsBenchmark(result);
    });

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>3em - The Web3 Execution Machine</title>
      </Head>
      <div className={styles.Landing}>
        <div className={styles.LandingContent}>
          <div className={styles.LandingText}>
            <h1>Smart Contracts.</h1>
            <h2>
              Write contracts in{" "}
              <div className={styles.ContractLanguage}>
                <a
                  href={currentURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="typed"
                />
                <div className={styles.Selector} />
              </div>
            </h2>
            <p>
              Deploy powerful contracts in a minute and make them permanent and
              free for your users.
            </p>
            <div className={styles.ButtonWrapper}>
              <Button secondary>
                <DownloadIcon />
                Get Started
              </Button>
              <Button
                onClick={() => window.open("https://docs.3em.dev", "_blank")}
              >
                <CodeIcon />
                Read more
              </Button>
            </div>
          </div>
          <img src={codeImage} draggable={false} />
        </div>
      </div>
      <div className={styles.LanguageSection}>
        <div className={styles.Gradient1} />
        <div className={styles.Gradient2} />
        <h1 className={styles.SecondaryTitle}>Immutable contracts.</h1>
        <h1>Language flexibility.</h1>
        <p>
          Use your favorite programming language to write secure smart
          contracts.
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
          <FeatureCard
            title="Sandboxed"
            subtitle="Secure runtime"
            image={sandboxFeaturePreview}
            description="A fully secure & modern runtime for smart contract evaluation using isolated environments where malicious code cannot be evaluated."
          />
          <div className={styles.FeatureSpacer} />
          <FeatureCard
            purple
            title="Deterministic"
            subtitle="Improved execution"
            image={deterministicFeaturePreview}
            description="Random seeding, polyfills, and more strategies applied to your execution, making it nearly impossible for contracts to have non-deterministic behavior."
          />
          <div className={styles.FeatureSpacer} />
          <FeatureCard
            title="SmartWeave Compatible"
            subtitle="Community standards"
            image={smartweaveFeaturePreview}
            description="There's no learning curve; with built-in support for all SmartWeave standards, backward compatability is guaranteed."
          />
          <div className={styles.FeatureSpacer} />
          <FeatureCard
            purple
            title="CLI and Library"
            subtitle="Multiple platforms"
            image={cliFeaturePreview}
            description="Not only for users but for developers, we prioritized our codebase to be used as an external library for JS, WASM, and Rust applications."
          />
          {/*<div className={styles.FeatureSpacer} />*/}
          {/*<FeatureCard />*/}
        </div>
      </div>
      <div className={styles.Explainer}>
        <div className={styles.Gradient3} />
        <div className={styles.Gradient4} />
        <div className={styles.Content}>
          <h3>Security First, Performance Second</h3>
          <h1>Fast contracts.</h1>
          <h2>Supercharged runtime.</h2>
          <p>
            Faster execution means faster responses for you, and your users. By
            prioritizing security, we can ensure evaluating states is something
            that happens in seconds without the risk of malicious code, no
            matter how many new interactions or foreign calls there may be.
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
        <div className={styles.Demonstrate + " " + styles.SpeedData}>
          <span>3em</span>
          <div className={styles.SpeedGraph}>
            <div
              className={styles.Filler}
              style={{
                width: `${calculateHundredPercent(
                  jsBenchmark.js,
                  jsBenchmark.highest
                )}%`
              }}
            />
          </div>
          <span>SmartWeave</span>
          <div className={styles.SpeedGraph}>
            <div
              className={styles.Filler}
              style={{
                width: `${calculateHundredPercent(
                  jsBenchmark.smartweaveJs,
                  jsBenchmark.highest
                )}%`
              }}
            />
          </div>
          <div className={styles.Datas}>
            <div className={styles.Cell}>
              <span>3EM</span>
              <h1>{jsBenchmark.js.toFixed(2)}s</h1>
            </div>
            <div className={styles.Separator} />
            <div className={styles.Cell}>
              <span>SmartWeave</span>
              <h1>{jsBenchmark.smartweaveJs.toFixed(2)}s</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Explainer}>
        <div className={styles.Demonstrate}>
          <img src="/tiles.png" alt="arweave" className={styles.ArTiles} />
        </div>
        <div className={styles.Content}>
          <h3>Arweave = home</h3>
          <h1>Contract Data,</h1>
          <h2>Made Permanent</h2>
          <p>
            With your source code and interactions being stored on the permaweb,
            it only means one thing: a secure, cheap, community-owned hard drive
            for lazy evaluation.
          </p>
          <a
            href="https://arweave.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more about $AR
            <ArrowRightIcon />
          </a>
        </div>
      </div>
      {/*<div className={styles.Partners}>*/}
      {/*  <h2>Who believe in us</h2>*/}
      {/*  <h1>Partners and friends.</h1>*/}
      {/*  <div className={styles.PartnersList}>*/}
      {/*    <a href="https://th8ta.org" target="_blank" rel="noopener noreferrer">*/}
      {/*      <img src={th8taLogo} alt="th8ta" />*/}
      {/*    </a>*/}
      {/*    <a href="https://th8ta.org" target="_blank" rel="noopener noreferrer">*/}
      {/*      <img src={th8taLogo} alt="th8ta" />*/}
      {/*    </a>*/}
      {/*    <a href="https://th8ta.org" target="_blank" rel="noopener noreferrer">*/}
      {/*      <img src={th8taLogo} alt="th8ta" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
