import Listele from "../Components/Listele";
import styles from "./Listspage.module.css";
import Header from "../Components/header";
import PageNav from "../Components/PageNav";
import Loading from "../Components/Loading";

function Listspage({ data, loading, starId, setStarId }) {
  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
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
        <ul>
          {data.map((ele) => (
            <Listele
              ele={ele}
              key={ele.id}
              starId={starId}
              setStarId={setStarId}
            />
          ))}
        </ul>
      </div>
      <PageNav />
    </>
  );
}

export default Listspage;
