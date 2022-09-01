import Head from "next/head";
import Meetups from "../components/Meetups/Meetups";

//Styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meetups - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Meetups />
    </div>
  );
}
