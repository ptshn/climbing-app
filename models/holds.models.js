const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holdsSchema = new Schema({
    jugs: { type: Number },
    crimps: { type: Number },
    slopers: { type: Number },
    pinches: { type: Number }
});

const Holds = mongoose.model('Holds', holdsSchema);

module.exports = Holds;