const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');

router.route('/')
  .get((req, res) => {
    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals);
    }).populate('owner')
  })
  .post((req, res) => {
    Animal.create(req.body, (err, animal) => {
      res.status(err ? 400 : 200).send(err || animal);
    })
  });

router.route('/:id')
  .get((req, res) => {
    Animal
      .findById(req.params.id)
      .populate('owner')
      .exec((err, animal) => {
        if(err || !animal) {
          return res.status(400).send(err || 'Animal not found.');
        }
      })
      res.send(animal);
  })
  .delete((req, res) => {
    Animal
      .findByIdAndRemove(req.params.id, (err, animal) => {
        res.status(err ? 400 : 200).send(err || animal.name + ' has been deleted');
      })
  })

  router.put('/:animalId/addOwner/:ownerId', (req, res) => {
    Animal.findById(req.params.animalId, (err, animal) => {
      if (err || !animal) {
        return res.status(400).send(err || 'Animal not found.');
      }
      //ownderId is a string because it comes from the url
      let ownerId = req.params.ownerId;

      animal.owner = ownerId;

      animal.save((err, savedAnimal) => {
        res.status(err ? 400 : 200).send(err || savedAnimal);
      });
    });
  });

module.exports = router;
