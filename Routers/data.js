
   db.students.insertMany ([{
      name: 'Praveen',
      stud_Id: 1,
      email:"praveenhb77@gmail.com",
      taskcompletion:89,
      mentor_Id: [109,101]
    },
    {
      name: 'jeeva',
      stud_Id: 2,
      email:"naveenhb77@gmail.com",
      taskcompletion:59,
      mentor_Id: [104,109]
    },
    {
      name: 'Yuva',
      stud_Id: 4,
      email:"yuva77@gmail.com",
      taskcompletion:83,
      mentor_Id: [101]
    },
    {
      name: 'Yogesh',
      stud_Id: 6,
      email:"yogunhb77@gmail.com",
      taskcompletion:69,
      mentor_Id: [109]
    },
    {
      name: 'Priya',
      stud_Id: 10,
      email:"priya77@gmail.com",
      taskcompletion:29,
      mentor_Id: [104,101]
    },
  ]
   )


db.mentors.insertMany([
    {
      mentor_id: 101,
      Name: 'Sanjay',
      Students: [1,6,10]
    },
    {
      mentor_id: 109,
      Name: 'Sai mohan',
      Students: [2,6]
    },
    {
      mentor_id: 102,
      Name: 'Sathish',
      Students: [4,7]
    }
  ])