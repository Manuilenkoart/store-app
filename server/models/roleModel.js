const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleScheme = new Schema({
    value: {type: String, unique: true, default: "USER"},
})

module.exports = mongoose.model('Role', RoleScheme)