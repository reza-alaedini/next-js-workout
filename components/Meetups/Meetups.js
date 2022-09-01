import Meetup from "./Meetup";

//Image
import image from "../../public/images/land.jpg";

export const DUMMY_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in. Vestibulum lectus mauris ultrices eros in cursus turpis.",
    image: image,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in. Vestibulum lectus mauris ultrices eros in cursus turpis.",
    image: image,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in. Vestibulum lectus mauris ultrices eros in cursus turpis.",
    image: image,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in. Vestibulum lectus mauris ultrices eros in cursus turpis.",
    image: image,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in. Vestibulum lectus mauris ultrices eros in cursus turpis.",
    image: image,
  },
];

const Meetups = () => {
  return (
    <div>
      {DUMMY_DATA.map((meet) => (
        <Meetup key={meet.id} meetData={meet} />
      ))}
    </div>
  );
};

export default Meetups;
