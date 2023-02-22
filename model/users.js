const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});
const userModel = Mongoose.model("users", userSchema);
module.exports = { userModel };
