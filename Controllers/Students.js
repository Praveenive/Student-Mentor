import { ObjectId } from "mongodb";
import { client } from "../db.js";


export function addStudentData(data){
    return client
    .db("student-mentor=task")
    .collection("students")
    .insertOne(data)
}


export function addMentor(data){
    return client
    .db("student-mentor=task")
    .collection("mentors")
    .insertOne(data)
}

export function assigningMentor(id,updatedMentorData){
    return client 
    .db("student-mentor=task")
    .collection("mentors")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedMentorData})
}

export function getNotassignedStudents(req){
    return client
    .db("student-mentor=task")
    .collection("students")
    .find(req.query).toArray()
}
export function mentorAssign(id,updatedstudentData){
    return client 
    .db("student-mentor=task")
    .collection("students")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedstudentData})
}
export function getMentor(id)
{
    return client
    .db("student-mentor=task")
    .collection("mentors")
    .findOne({_id: new ObjectId(id)})
}
export function previousmentor(id){
    return client 
    .db("student-mentor=task")
    .collection("students")
    .find({_id: new ObjectId(id)}).toArray()


}