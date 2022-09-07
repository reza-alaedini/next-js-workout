import Navbar from "../Navbar/Navbar";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.children}>{children}</div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
