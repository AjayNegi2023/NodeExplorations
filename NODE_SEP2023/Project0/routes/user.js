const express = require("express");
const router = express.Router();
const {
    getAllUser,
    getUserById,
    updateUserByID,
    deleteUserByID,
    createNewUser
} = require('../controllers/user')

router.get("/", getAllUser)
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.patch("/:id", updateUserByID);
router.delete("/:id", deleteUserByID);

module.exports = router