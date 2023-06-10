import express from "express"
import { studentRouter } from "./Routers/Student.js"


const app = express()

app.use(express.json());

app.use("/stu-men",studentRouter)



app.listen(9090,()=>console.log("server running:"))