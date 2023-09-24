const User = require("../models/user");

const getAllUser = async (req, res) => {
    const allUsers = await User.find({});
    return res.json(allUsers);
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not found!"
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({
            message: "Server Error!"
        });
    }
}

const createNewUser = async (req, res) => {
    const data = req.body;
    if (!data || !data.first_name || !data.last_name || !data.gender || !data.Job_title) {
        return res.status(400).json({
            message: "All Fields are required ! "
        }); //400 -> Bad Request 
    }

    const result = await User.create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        gender: data.gender,
        Job_title: data.Job_title,
    })

    console.log(result);
    return res.status(201).json({
        msg: "User Created ",
        id: result._id
    });

}

const updateUserByID = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        last_name: "Changed"
    })
    return res.json({
        status: "Success"
    });
}
const deleteUserByID = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({
        status: "Deleted"
    })
}

module.exports = {
    getAllUser,
    getUserById,
    updateUserByID,
    deleteUserByID,
    createNewUser
}