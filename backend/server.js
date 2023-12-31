import express from "express";

const app = express();

// app.get('/', (req,res) =>{
//     res.send('Server is ready');
// });

app.get("/api/records", (req, res) => {
  const records = [
    {
      UID: 4454,
      Name: "Yogesh",
      Address: "Rajasthan",
    },
    {
      UID: 4465,
      Name: "Harsh",
      Address: "South-Delhi",
    },
    {
      UID: 4424,
      Name: "Ayush",
      Address: "MadhyaPradesh",
    },
    {
      UID: 4430,
      Name: "Bhoma",
      Address: "Rajasthan",
    },
  ];

  res.send(records);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
