import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Place your bets</h1>
      <div className="button-wrapper">
        <button className={styles.button}>+</button>
        <button className={styles.button}>-</button>
      </div>
      <button className={styles.button}>Reset</button>
    </main>
  );
}
