const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://deepthi262:admin123@deepthimongodbatlasclus.nvo4w3l.mongodb.net/?retryWrites=true&w=majority"

async function insertTODb(url){

  try {
  const client = await MongoClient.connect(url)
  const dbo = client.db("mydb");

  const myobj = { name: "Company Inc", address: "Highway 37" };
  const insertOneResult = await dbo.collection("customers").insertOne(myobj);
  console.log("insertOneResult: ", insertOneResult.insertedId);

  const result = await client.db("mydb").collection("customers").find({});
  console.log("result", await result.toArray());
    //db.close();
  // await client.close();
  
  } catch (error) {
    console.log("error", error);
  }
}

insertTODb(url)
