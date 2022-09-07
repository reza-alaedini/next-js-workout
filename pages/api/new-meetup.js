import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const data = req.body;
      // const { title, image, description } = data;


      //Working With MONGODB
      const client = await MongoClient.connect(
        "mongodb+srv://parsaalaeipa:AOfNeMHEK5JDaw40@parsacluster.oezwfll.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();
      //End of MONGODB

      res.status(201).json({ success: "Meetup inserted!" });

    } catch (error) {
      console.log(error);
      res.status(400).json({ error: `error ${error}` });
    }
  }
};

export default handler;
