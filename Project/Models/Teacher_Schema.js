const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true, // for validation
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // Remove the unique constraint to allow duplicate values
  },
  address: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
