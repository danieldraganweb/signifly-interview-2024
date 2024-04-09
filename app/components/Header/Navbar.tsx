import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-title-container"]}>
          <h1 className={styles["navbar-title"]}>
            Signifly Foosball Tournament
          </h1>
        </div>
        <div className={styles["navbar-spacer"]}>
          <ul>
            <li>
              <Link href="/scoreboard" key="scoreboard">
                Scoreboard
              </Link>
            </li>
            <li>
              <Link href="/" key="home">
                <Image
                  src="/football-stadium.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  priority={true}
                  style={{
                    objectFit: "contain",
                    borderRadius: "1em",
                  }}
                  className={styles["football-stadium-svg"]}
                />
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" key="leaderboard">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
