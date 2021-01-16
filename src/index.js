const express = require("express");
// Setting up a db connection in this file
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// Initiaiting the app
const app = express();
// Setting up the port for heoku and local
const port = process.env.PORT;

// Express to convert responses to json format
app.use(express.json());
// Connecting the routers
app.use(userRouter);
app.use(taskRouter);

// Starting the server and listening to the port
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
