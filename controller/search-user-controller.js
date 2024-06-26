import User from "../model/user-model.js";

export const searchUser = async (req, res) => {
  try {
    // getting username from query params
    const username = req.query.username;

    if (!username) {
      return res
        .status(400)
        .send({ success: false, message: "Provide username" });
    }

    // check weather username is there or not options 'i' using for case sensitive
    const users = await User.find({
      username: { $regex: username, $options: "i" },
    });

    //user not found
    if (!users || users.length === 0) {
      return res.status(404).send({ message: "No such user available" });
    }

    res
      .status(200)
      .send({ success: true, message: "User found successfully", users });
  } catch (error) {
    console.error("Error while searching user in database".bgRed, error);
    res.status(500).json({ error: "Error while searching user API" });
  }
};
