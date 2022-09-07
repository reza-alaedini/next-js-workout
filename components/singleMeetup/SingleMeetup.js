import Head from "next/head";

const SingleMeetup = ({ meetupData }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Head>
        <title>{meetupData.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meetupData.description} />
      </Head>
      <img src={meetupData.image} alt="meetup image" />
      <h1>{meetupData.title}</h1>
      <h3>{meetupData.description}</h3>
      {/* <h1>Meetup Datas</h1> */}
    </div>
  );
};

export default SingleMeetup;
