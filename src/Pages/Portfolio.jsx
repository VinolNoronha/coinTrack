import Header from "../Components/header";
import Listele from "../Components/Listele";
import Topics from "../Components/Topics";
import styles from "./Portfolio.module.css";

function Portfolio({ finalArray }) {
  return (
    <div className={styles.page}>
      <Header />
      <Topics />
      <ul>
        {finalArray.map((ele) => (
          <Listele ele={ele} key={ele.id} />
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
