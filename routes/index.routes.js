const EldenRing = require("../models/EldenRing.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Get Characters
router.get("/eldenring/characters", async (req, res, next) => {
  try {
    const characters = await EldenRing.find();
    res.json(characters);
  } catch (error) {
    console.log("Error fetching characters: ", error);
  }
});

// Get one character
router.get("/eldenring/characters/details/:charId", async (req, res, next) => {
  try {
    const characters = await EldenRing.findById(req.params.charId);
    res.json(characters);
  } catch (error) {
    console.log("Error fetching character: ", error);
  }
});

// Create Characters
router.post("/eldenring/characters/new", async (req, res, next) => {
  try {
    const newCharacterDetails = req.body;
    const newCharacter = await EldenRing.create(newCharacterDetails);
    res.json(newCharacter);
  } catch (error) {
    console.log("Error creating character: ", error);
  }
});

// Update Characters
router.put("/eldenring/characters/update/:characterId", async (req, res, next) => {
  try {
    const characterId = req.params.characterId;
    const updatedCharacterDetails = req.body;
    const updatedCharacter = await EldenRing.findByIdAndUpdate(characterId, updatedCharacterDetails, { new: true });
    res.json(updatedCharacter);
  } catch (error) {
    console.log("Error updating character: ", error);
  }
});

// Delete Characters
router.delete("/eldenring/characters/delete/:characterId/", async (req, res, next) => {
  try {
    const characterId = req.params.characterId;
    const deletedCharacter = await EldenRing.findByIdAndDelete(characterId);
    res.json(deletedCharacter);
  } catch (error) {
    console.log("Error deleting the character: ", error);
  }
});

module.exports = router;
