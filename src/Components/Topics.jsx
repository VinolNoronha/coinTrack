import styles from "./Topics.module.css";

function Topics() {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <ul className={styles.title}>
          <div className={styles.name}>
            <p>Name</p>
          </div>
          <div className={styles.price}>
            <p>Price</p>
          </div>
          <div className={styles.marketCap}>Market Cap</div>
          <div className={styles.alhChange}>
            <p>ATH Percentage Change</p>
          </div>
          <div className={styles.supply}>
            <p>Circulating Supply</p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Topics;
