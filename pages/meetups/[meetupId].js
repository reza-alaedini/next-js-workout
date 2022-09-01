import { useRouter } from "next/router";

//Data
import { DUMMY_DATA } from "../../components/Meetups/Meetups";

const meetupId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { meetupId } = router.query;

//   console.log(DUMMY_DATA[meetupId])

//   console.log(router);
  return (
    <div>
      <h2>DUMMY_DATA.id[meetupId].title</h2>
    </div>
  );
};

export default meetupId;
