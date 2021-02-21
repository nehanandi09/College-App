const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const College = mongoose.model("college", new Schema({}), "college");

module.exports = College;
