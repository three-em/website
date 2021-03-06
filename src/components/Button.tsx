import { MouseEventHandler, PropsWithChildren } from "react";
import styles from "../styles/components/Button.module.sass";

export default function Button({
  children,
  className,
  secondary,
  disabled = false,
  onClick
}: PropsWithChildren<Props>) {
  return (
    <button
      className={
        styles.Button +
        " " +
        ((secondary && styles.Secondary) || "") +
        " " +
        (className ?? "")
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface Props {
  secondary?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
