import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";

import SingleMeetup from "../../components/singleMeetup/SingleMeetup";

//Data

const meetupId = (props) => {
  return (
    <Fragment>
      <SingleMeetup meetupData={props.meetupData} />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://parsaalaeipa:AOfNeMHEK5JDaw40@parsacluster.oezwfll.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    "mongodb+srv://parsaalaeipa:AOfNeMHEK5JDaw40@parsacluster.oezwfll.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        description: selectedMeetup.desc,
        image: selectedMeetup.image,
      },
    },
  };
};

export default meetupId;
