const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./routes/userRoutes')(app);
require('./routes/skillRoutes')(app);
require('./routes/userSkillRoutes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
const db = require('./models');

//sync sequelize models 
//force:true to wipe out db on server re-start (required when data is re-modeled)
db.sequelize.sync()
  .then((result) => {
    //we start our server only once our db is connected 
    app.listen(PORT, () => {
      console.log('Server started');
    })
  })
  .catch((err) => {
    console.log(err);
  })