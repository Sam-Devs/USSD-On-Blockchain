const mongoose = require("mongoose");

async function mongoDB() {

  const uri = "mongodb+srv://USSDDB:USSDDB@ussd.xipcj.mongodb.net/USSD?retryWrites=true&w=majority";

  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log(" db connected")
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
}

mongoDB();

