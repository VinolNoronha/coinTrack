import styles from "./Homepage.module.css";
import Header from "../Components/header";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.hpCont}>
        <h1 className={styles.font}>Track Your Favourtie Cryptocurrency!!</h1>
        <div className={styles.btnbg}>
          <Link to="/list">
            <button className={styles.btn}>View Cryptocurrencies</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
