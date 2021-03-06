const { Schema, model } = require('mongoose');

const schema = new Schema({
    time: { type: String, required: true },
    companyName: { type: String, required: true },
    FullName: { type: String, required: true },
    contactPhone: { type: Number, required: true },
    comment: { type: String },
    ati: { type: Number, required: true },
})

module.exports = model('TableItem', schema);
