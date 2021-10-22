import Toolbar from "../components/Toolbar";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.mainHome}>
      <Toolbar />
      <div className={styles.div}>
        <h1>Next News App</h1>
        <h3>
          Your one Stop Shop For Latest News Articles.
          <br /> Go to The Feed Tab to Get Top Headlines
        </h3>
      </div>
    </div>
  );
}
