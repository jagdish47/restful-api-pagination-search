import User from "../model/user-model.js";

export const createUser = async (req, res) => {
  try {
    const { name, username, email, password, gender } = req.body;
    // checking all the data sended or not
    if (!name || !username || !email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter all data" });
    }

    //check weather email is valid or not
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid email address" });
    }

    // checking in model all the data
    const user = new User({ name, username, email, password, gender });
    // saving in database
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "Successfully stored user", user });
  } catch (error) {
    console.error("Error while storing user in database".bgRed, error);
    res.status(500).json({ error: "Error while storing user" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    //if user not found
    if (!users) {
      return res.status(200).send({ success: true, message: "No User Found" });
    }
    res
      .status(200)
      .send({ success: true, message: "User get successfully", users });
  } catch (error) {
    console.log("Error while getting users from database".bgRed, error);
    res.status(500).json({ error: "Error while getting users" });
  }
};
