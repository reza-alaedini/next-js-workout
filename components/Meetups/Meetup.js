import { useRouter } from "next/router";

//Styles
import styles from "./Meetup.module.css";

const Meetup = ({ meetData }) => {
  const router = useRouter();

  // const shorten = (text) => {
  //   const splited = text.split(" ");
  //   let finalText = "";
  //   for (let i = 0; i <= 5; i++) {
  //     if (i == 5) {
  //       finalText += splited[i] + " ...";
  //     } else {
  //       finalText += splited[i] + " ";
  //     }
  //   }
  //   return finalText;
  // };

  const showMoreHandler = () => {
    router.push(`/meetups/${meetData.id}`);
  };
  return (
    <div className={styles.cardContainer}>
      <img src={meetData.image} alt="meetup image" />
      <h1>{meetData.title}</h1>
      {/* <p>{shorten(meetData.description)}</p> */}
      <p>{meetData.description}</p>
      <button onClick={showMoreHandler}>More Details</button>
    </div>
  );
};

export default Meetup;
