import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.mainContainer}>
      <div>{"<"}</div>
      <NavLink
        to="/list"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div>1</div>
      </NavLink>

      <NavLink
        to="/page2"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page2">2</div>
      </NavLink>

      <NavLink
        to="/page3"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page3">3</div>
      </NavLink>

      <NavLink
        to="/page4"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page4">4</div>
      </NavLink>

      <NavLink
        to="/page5"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page5">5</div>
      </NavLink>

      <NavLink
        to="/page6"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page6">6</div>
      </NavLink>

      <NavLink
        to="/page7"
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="page7">7</div>
      </NavLink>

      <div>{">"}</div>
    </div>
  );
}

export default PageNav;
