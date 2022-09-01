import Navbar from "../Navbar/Navbar";

//Styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
