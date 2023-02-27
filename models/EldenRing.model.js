const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const eldenRingSchema = new Schema(
  {
    name: String,
    vigor: Number,
    mind: Number,
    endurance: Number,
    strength: Number,
    dexterity: Number,
    intelligence: Number,
    faith: Number,
    arcane: Number,
    weapon: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const EldenRing = model("EldenRing", eldenRingSchema);

module.exports = EldenRing;
