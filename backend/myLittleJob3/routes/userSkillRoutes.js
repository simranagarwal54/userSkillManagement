module.exports = app3 => {
    const userSkillController = require('../controllers/userSkillController');
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", userSkillController.create);

    router.get("/getUsersBySkill", userSkillController.getUsersBySkill);
  
    // Retrieve a single user with id
    //router.get("/:id", userSkillController.findOne);
  
    // Update a user with email
    router.put("/:id", userSkillController.update);
  
    // Delete a user with email
    //router.delete("/:email", userSkillController.delete);

    app3.use('/api/userSkill', router);
  };