import { useRef } from "react";
import { toast } from "react-toastify";
//Styles
import styles from "./NewMeetup.module.css";

const NewMeetup = (props) => {
  const title = useRef();
  const desc = useRef();
  const image = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = title.current.value;
    const descValue = desc.current.value;
    const imageValue = image.current.value;
    if (!titleValue) {
      toast.error("Meetup Titile is empty!", {
        position: "top-right",
        theme: "colored",
      });
    } else if (!descValue) {
      toast.error("Meetup Description is empty!", {
        position: "top-right",
        theme: "colored",
      });
    } else if (!imageValue) {
      toast.error("Meetup Image URL is empty!", {
        position: "top-right",
        theme: "colored",
      });
    } else {
      const meetupData = {
        title: titleValue,
        image: imageValue,
        desc: descValue,
      };
      props.onAddMeetup(meetupData);
      // if (props.empty) {
      //   title.current.value = "";
      //   desc.current.value = "";
      //   image.current.value = "";
      // } else {
      //   null;
      // }
    }
  };
  const cancelHandler = () => {
    title.current.value = "";
    desc.current.value = "";
    image.current.value = "";
  };
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
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetup;
