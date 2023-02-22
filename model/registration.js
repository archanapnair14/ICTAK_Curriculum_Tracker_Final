const Mongoose = require("mongoose");
const requirementSchema = Mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  category: {
    type: String,
  },
  organisation: {
    type: String,
  },
  hours:{
    type: Number,
  }
});
var requirementModelObj = Mongoose.model("requirements", requirementSchema);
module.exports = { requirementModelObj };
