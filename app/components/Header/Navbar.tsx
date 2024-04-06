import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

// Navbar component
const Navbar = () => {
  return (
    <div>
      <nav className={styles["navbar"]}>
        <ul>
          <li>
            <Link href="/scoreboard" key={"scoreboard"}>
              Scoreboard
            </Link>
          </li>
          <li>
            <Link href="/" key={"scoreboard"}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/leaderboard" key={"leaderboard"}>
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
