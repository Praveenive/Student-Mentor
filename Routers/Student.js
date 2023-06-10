import express from "express"
import { addMentor, addStudentData, assigningMentor, getMentor, getNotassignedStudents, mentorAssign, previousmentor  } from "../Controllers/Students.js";

const router = express.Router();
// QNO)1

router.post("/mentors", async(req,res)=>{
    try {
        const newMentor = req.body;
        if(!newMentor){
            res.status(400).json({data:"Mentor not found"})
        }
        console.log(newMentor)
        const result = await addMentor(newMentor)
        res.status(200).json({data:result,message:"Mentor added successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({data:"Server error "})
    }
})
// QNO)2
router.post("/students", async(req,res)=>{
   try {
       const newStudent = req.body;
   if(!newStudent){
    res.status(400).json({data:"New student not found"})
   }
   const result = await addStudentData(newStudent)
   res.status(200).json({result:result,message:"added success"}) 
   } catch (error) {
    console.log(error)
    res.status(500).json({data:"Server issues"})
   }
})


// QN0 3)
router.put("/assign-mentor/:mentor_id/stud/:id", async (req, res)=> {
        try {
            if(req.query.mentor_Id){
                req.query.mentor_Id = +req.query.mentor_Id;
            }
         const {  mentor_id,id } =req.params;
         const updatedMentorData = req.body;
         if(!id || !mentor_id){
            res.status(400).json({data:"404"})
         }
         const result = await assigningMentor(id,updatedMentorData)
         res.status(200).json({result:result,message:"Added succesfully"})
        } catch (error) {
           return res.status(500).json({ message: "505" });
        }
    })

router.get("/notassignstudents", async(req,res)=>{
    try {
        const notAssigned = await getNotassignedStudents(req);
        // const notAssigned = await getNotassignedStudents(req)
        console.log(notAssigned);
        let studentsWithoutMentor = [];
        for (let i = 0; i < notAssigned.length; i++) {
            if (!notAssigned[i].mentor_Id || notAssigned[i].mentor_Id.length === 0) {
              studentsWithoutMentor.push(notAssigned[i]);
            }
          }
      
          if (studentsWithoutMentor.length > 0) {
            return res.status(200).json({ data: studentsWithoutMentor });
          } else {
            return res.status(400).json({ data: "All students have a mentor" });
          }
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"server issues"})
    }
})
    // QN04)
    router.put("/pickstudent/:id", async (req,res)=>{
        try {
            const { id } = req.params;
            const updatedStudentData = req.body;
    
            if(!id | !updatedStudentData)
            {
                res.status(400).json({message : "Student not found"})
            }
            const result = await mentorAssign(id,updatedStudentData)
            res.status(200).json({data:result,message:"mentor changed"})
        } catch (error) {
            return res.status(500).json({data:"Server error"})
        }
    })
    // QNO)5
    router.get("/showstudentlist/:id", async(req,res)=>{
        try {
             const { id } =req.params;
             const mentor = await getMentor(id)
             if(!mentor)
             {
                res.status(400).json({data:"Mentor not found"})
             }
             res.status(200).json({data:mentor})
             console.log(mentor)
            
        } catch (error) {
            return res.status(500).json({data:"server busy"})
        }
    })

    // QNO6)
    router.get("/previousmentor/:id" , async(req,res)=>{
        try {
            const { id } = req.params;
            const student = await previousmentor(id)
            console.log(student)
            let menid =student[0].mentor_Id.length;
            const previousmentors = student[0].mentor_Id[menid-2];
            if(!previousmentors)
            {
              return   res.status(400).json({data:"Previous mentor not found"})
            }            
           return res.status(200).json({data:previousmentors})
        } catch (error) {
            console.log(error)
            return res.status(500).json({data:"server busy"})
        }
    })
  
export const studentRouter = router ;