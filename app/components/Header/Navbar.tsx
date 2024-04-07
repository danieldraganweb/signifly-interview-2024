import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles["navbar-container"]}>
      <h1 className={styles["navbar-title"]}>Signifly Foosball Tournament</h1>
      <nav className={styles["navbar"]}>
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
                width={100}
                height={100}
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
      </nav>
    </div>
  );
};

export default Navbar;
