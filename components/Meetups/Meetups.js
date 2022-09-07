import Meetup from "./Meetup";

//Image
import image from "../../public/images/land.jpg";

const Meetups = ({ meetups }) => {
  return (
    <div>
      {meetups.map((meet) => (
        <Meetup key={meet.id} meetData={meet} />
      ))}
    </div>
  );
};

export default Meetups;
