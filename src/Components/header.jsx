import { Link } from "react-router-dom";
import styles from "./header.module.css";

function header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.fnt}>CoinTrack</h1>
      </Link>

      <input type="text" placeholder="Search Here" className={styles.input} />
      <div className={styles.navEle}>
        <button className={styles.btnClass}>Sign up</button>
        <button>
          <Link to="/portfolio">Portfolio</Link>
        </button>
      </div>
    </div>
  );
}

export default header;
