import styles from "./Star.module.css";
import { useState, useEffect } from "react";
import fullStar from "../../public/star-svgrepo-com.svg";
import emptyStar from "../../public/star-empty-svgrepo-com.svg";

function Star({ id }) {
  const [star, setStar] = useState(function () {
    const storedVal = localStorage.getItem(`bookmarked-${id}`);
    console.log(`For id: ${id}, stored value: ${storedVal}`);
    return storedVal === null ? false : JSON.parse(storedVal);
  });

  useEffect(
    function () {
      console.log(`Updating localStorage for id: ${id}, star: ${star}`);
      localStorage.setItem(`bookmarked-${id}`, JSON.stringify(star));
    },
    [star, id]
  );

  const toggleStar = () => {
    setStar((prevStar) => !prevStar);
  };

  return (
    <>
      {star ? (
        <div className={styles.filledStar} onClick={() => toggleStar()}>
          <img src={fullStar} alt="pic of sull star" />
        </div>
      ) : (
        <div className={styles.emptyStar} onClick={() => toggleStar()}>
          <img src={emptyStar} alt="empty star" />
        </div>
      )}
    </>
  );
}

export default Star;
