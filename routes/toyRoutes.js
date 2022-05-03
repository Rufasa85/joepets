const express = require("express");
const router = express.Router();
const {Toy} = require("../models/");


//find all
router.get("/", (req, res) => {
  Toy.findAll({

  })
    .then(dbToys => {
      res.json(dbToys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Toy.findByPk(req.params.id)
    .then(dbToys => {
      res.json(dbToys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Toy.create(req.body)
    .then(newToy => {
      res.json(newToy);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update user
router.put("/:id", (req, res) => {
  Toy.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedToy => {
    res.json(updatedToy);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a user
router.delete("/:id", (req, res) => {
  Toy.destroy({
    where: {
      id: req.params.id
    }
  }).then(delToy => {
    res.json(delToy);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
