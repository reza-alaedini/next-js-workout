import Link from "next/link";

//Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>React Meetups</li>
        <div className={styles.rightNav}>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/add_meetup">Add new Meetup</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
