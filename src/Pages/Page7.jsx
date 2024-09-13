import Listele from "../Components/Listele";
import Header from "../Components/header";
import PageNav from "../Components/PageNav";
import useUrl from "../hooks/urlFetch";
import styles from "./Page7.module.css";
import Loading from "../Components/Loading";

function Page7() {
  const { data, loading } =
    useUrl(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=6&sparkline=false
`);

  console.log(data);

  return (
    <>
      {loading ? (
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
                <Listele ele={ele} key={ele.id} />
              ))}
            </ul>
          </div>
          <PageNav />
        </>
      )}
    </>
  );
}

export default Page7;
