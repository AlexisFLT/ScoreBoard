const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/PlayerControllers");

router.get("/player", PlayerControllers.browse);
router.get("/player/:id", PlayerControllers.read);
router.put("/player/:id", PlayerControllers.edit);
router.post("/player", PlayerControllers.add);
router.delete("/player/:id", PlayerControllers.destroy);

module.exports = router;
