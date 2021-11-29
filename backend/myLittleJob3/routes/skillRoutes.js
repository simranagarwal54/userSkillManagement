module.exports = app2 => {
    const skillController = require('../controllers/skillController');
  
    var router = require("express").Router();
  
    // Create a new Skill
    router.post("/", skillController.create);
  
    // Retrieve all Skill
    router.get("/", skillController.findAll);
  
    // Retrieve a single skill with id
    router.get("/:id", skillController.findOne);
  
    // Update a skill with id
    router.put("/:id", skillController.update);
  
    // Delete a skill with id
    router.delete("/:id", skillController.delete);

    app2.use('/api/skills', router);
  };