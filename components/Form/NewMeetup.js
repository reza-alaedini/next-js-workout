import { useRef } from "react";

//Styles
import styles from "./NewMeetup.module.css";

const NewMeetup = () => {
  const title = useRef();
  const desc = useRef();
  const image = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = title.current.value;
    const descValue = desc.current.value;
    const imageValue = image.current.value;
    if (!titleValue) {
      alert("Meetup Titile is empty!");
    } else if (!descValue) {
      alert("Meetup Description is empty!");
    } else if (!imageValue) {
      alert("Meetup Image URL is empty!");
    } else {
      console.log("Everything is OK!");
    }
  };
  const cancelHandler = () => {
    title.current.value = "";
    desc.current.value = "";
    image.current.value = "";
  }
  return (
    <div className={styles.formContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Meetup Titile :</label>
          <br />
          <input type="text" ref={title} />
        </div>
        <div>
          <label>Meetup Desc :</label>
          <br />
          <input type="text" ref={desc} />
        </div>
        <div>
          <label>Meetup Image URL :</label>
          <br />
          <input type="text" ref={image} />
        </div>
        <div className={styles.btnContainer}>
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetup;
