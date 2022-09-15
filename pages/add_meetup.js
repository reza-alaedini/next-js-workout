/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";

import NewMeetup from "../components/Form/NewMeetup";

const add_meetup = () => {
  const router = useRouter();

  const newMeetupHandler = async (meetupData) => {
    const statusToast = toast.loading("Adding Meetup... ⏳");

    //Fething to API
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //End of Fetching to API

    console.log(data);
    if (data.success) {
      toast.update(statusToast, {
        render: "Meetup Added ! ✅",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: true,
      });
      router.push("/");
    } else {
      toast.update(statusToast, {
        render: "Unable to Add Meetup ! 🚫",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: true,
      });
    }
  };
  // toast.promise(newMeetupHandler, {
  //   pending: "Adding meetup...",
  //   success: "Meetup Added ! ✅",
  //   error: "Unable to add meetup ! 🚫",
  // });
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add New Meetups to introduce other people nice places!"
        />
      </Head>
      <NewMeetup onAddMeetup={newMeetupHandler} />
    </Fragment>
  );
};

export default add_meetup;
