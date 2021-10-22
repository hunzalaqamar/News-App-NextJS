import { useRouter } from "next/router";
import styles from "../styles/toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.mainToolbar}>
      <nav className={styles.nav}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/feed/1")}>Feed</div>
        <div onClick={() => router.push("/eom")}>EOM</div>
        <div
          onClick={() =>
            window.open("https://github.com/hunzalaqamar", "_blank")
          }
        >
          Github
        </div>
      </nav>
    </div>
  );
};

export default Toolbar;
