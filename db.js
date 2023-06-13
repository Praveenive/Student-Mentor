import { MongoClient } from "mongodb";
import Obj from "mongodb"

const MongoURL ="mongodb+srv://praveenive:Praveen6@cluster0.4iggedc.mongodb.net/?retryWrites=true&w=majority"

async function createConnection(){
    const client = new MongoClient(MongoURL)
    await client.connect()
    console.log("Mongodb connected successfully")
    return client
}

export var ObjectId = Obj.ObjectId;
export const client = await createConnection()