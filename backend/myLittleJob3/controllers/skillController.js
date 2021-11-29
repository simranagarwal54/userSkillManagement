const db = require('../models');
const Skill = db.Skill;

const Op = db.Sequelize.Op;

// Create and Save a new Skill 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Email can not be empty!"
    });
    return;
  }

  // Create a skill
  const skill = {
    name: req.body.name,
    description: req.body.description
  };
  // Save User in the database
  Skill.create(skill)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Skill."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.name; //req.query.title to get query string from the Request and consider it as condition for findAll() method.
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Skill.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving skill."
        });
      });
  };

// Find a single User with a id  
    exports.findOne = (req, res) => {
        const id = req.params.id;
        Skill.findByPk(id)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find User with id=${id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving User with id=" + id
            });
          });
      };

// Find a single User with a skill  ==> associations
exports.findOne = (req, res) => {
  
};

// Update a user by the email in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Skill.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Skill was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Skill with id=${id}. Maybe Id was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Skill with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Skill.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Skill was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Skill with email=${id}. Maybe Skill was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Skill with id=" + id
        });
      });
};
