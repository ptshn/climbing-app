const router = require('express').Router();
let Holds = require('../models/holds.models');

router.route('/').get((req, res) => {
    Holds.find()
        .then(holds => res.json(holds))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const jugs = Number(req.body.jugs);
    const crimps = Number(req.body.crimps);
    const slopers = Number(req.body.slopers);
    const pinches = Number(req.body.pinches);

    const newHolds = new Holds({
        jugs,
        crimps,
        slopers,
        pinches
    });

    newHolds.save()
        .then(() => res.json('Holds successfully added'))
        .catch(err => res.status(400).json('Error ' + err));
});


router.route('/:id').get((req, res) => {
    Holds.findById(req.params.id)
        .then(holds => res.json(holds))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Holds.findByIdAndDelete(req.params.id)
        .then(() => res.json('Holds deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Holds.findById(req.params.id)
        .then(holds => {
            holds.jugs = req.body.jugs;
            holds.crimps = req.body.crimps;
            holds.slopers = req.body.slopers;
            holds.pinches = req.body.pinches;

            holds.save()
                .then(() => res.json('Holds updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
