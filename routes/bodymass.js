const router = require('express').Router();
let bodymass = require('../models/bodymass.model');

router.route('/').get((req, res) => {
    bodymass.find()
    .then(mass => res.json(mass))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req)
  const name = req.body.name;
  const bmi = Number(req.body.bmi);
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
 const message = req.body.msg
  const newItem = new bodymass({
    name,
    weight,
    height,
    bmi,
    message
  });

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router