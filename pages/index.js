import Head from "next/head";
import { MongoClient } from "mongodb";

import Meetups from "../components/Meetups/Meetups";
//Styles
import styles from "../styles/Home.module.css";

export default function Home({ meetups }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Meetups - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="React Meetups - Find Amazing places to go!" />
      </Head>

      <Meetups meetups={meetups} />
    </div>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://parsaalaeipa:AOfNeMHEK5JDaw40@parsacluster.oezwfll.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        description: meetup.desc,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
