import styles from "./Listele.module.css";
import Star from "../Components/Star";

function Listele({ ele, starId, setStarId }) {
  return (
    <div className={styles.mainCont}>
      <div className={styles.divEle}>
        <li className={styles.list}>
          <div className={styles.img}>
            <img src={ele.image} alt={`Logo of ${ele.name}`} />
            <div className={styles.name}>
              <p>{ele.name.length <= 25 ? ele.name : ""}</p>
              <p className={styles.symbol}>{ele.symbol.toUpperCase()}</p>
            </div>
          </div>
          <div className={styles.price}>
            <p>{`$${ele.current_price}`}</p>
          </div>
          <div className={styles.marketCap}>
            <p>{`$${ele.market_cap}`}</p>
          </div>
          <div className={styles.highLow}>
            <p>{ele.ath_change_percentage}</p>
          </div>
          <div className={styles.supply}>
            <p>{ele.circulating_supply}</p>
          </div>
          <div className={styles.star} onClick={() => setStarId(ele.id)}>
            <Star id={starId} />
          </div>
        </li>
      </div>
    </div>
  );
}

export default Listele;
