const { where } = require('sequelize/dist');
const db = require('../models');
const Skill = db.Skill;
const User = db.User;
const UserSkill = db.UserSkill;
const Op = db.Sequelize.Op;

// Users have many skills
// Create a junction between user and skill
exports.create = (req, res) => {
    // Validate request: user must select a skill to complete the request
    if (!req.body.skillId) {
      res.status(400).send({
        message: "Skill id can not be empty!"
      });
      return;
    }
  
    // Create a User skill relationship
    const skillId = req.body.skillId;
    skillId.forEach(element => {
        const userSkill = {
            userId: req.body.userId,
            skillId: element  
        };
   
    UserSkill.create(userSkill)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User Skill relationship."
        });
      });
    });
    // Save relationship in the database
    
  };

  //update skills of user 
  exports.update = (req, res) => {
    const id = req.params.id;

    UserSkill.update(req.body, {
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

exports.getUsersBySkill = (req, res) => {
    const skillId = req.query.skillId;
    const userId = req.query.userId;

    //var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    var condition1 = skillId ? {id:  skillId } : null;
    var condition2 = userId ? { id: userId } : null;
    UserSkill.findAll({
        attributes: ['id'],
        include: [{
            model: Skill,
            attributes: ['name','description'],
            where:condition1
          }, {
            model: User,
            attributes: ['username','email'],
            where:condition2
          }],


    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
}