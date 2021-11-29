module.exports = app1 => {
    const userController = require('../controllers/userController');
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", userController.create);
  
    // Retrieve all Users
    router.get("/", userController.findAll);
  
    // Retrieve a single user with id
    router.get("/:id", userController.findOne);
  
    // Update a user with email
    router.put("/:id", userController.update);
  
    // Delete a user with email
    router.delete("/:id", userController.delete);

    app1.use('/api/users', router);
  };