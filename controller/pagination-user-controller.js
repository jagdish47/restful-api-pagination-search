import User from "../model/user-model.js";

export const pagination = async (req, res) => {
  try {
    //getting page and limit
    let { page, limit } = req.query;

    // convert them into number if not than get 1 and 10
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    // if user enter invalid limit or page
    if (page <= 0 || limit <= 0) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid page or limit value" });
    }

    const skip = (page - 1) * limit;

    // find user and skip the user and setup the limit
    const users = await User.find().skip(skip).limit(limit);

    res
      .status(200)
      .send({ success: true, message: "User got successfully", users });
  } catch (error) {
    console.error("Error while getting user from database", error);
    res.status(500).json({ error: "Error while getting user" });
  }
};
