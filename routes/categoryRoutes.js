const express = require("express");
const router = express.Router();
const {Category,Toy} = require("../models/");


//find all
router.get("/", (req, res) => {
  Category.findAll({
    include:[Toy]
  })
    .then(dbCategorys => {
      res.json(dbCategorys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then(dbCategorys => {
      res.json(dbCategorys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Category.create(req.body)
    .then(newCategory => {
      res.json(newCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update user
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedCategory => {
    res.json(updatedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a user
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(delCategory => {
    res.json(delCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
