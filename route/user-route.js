import express from "express";
import { createUser, getUsers } from "../controller/user-controller.js";
import { searchUser } from "../controller/search-user-controller.js";
import { pagination } from "../controller/pagination-user-controller.js";
const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-users", getUsers);
router.get("/search-user", searchUser);
router.get("/", pagination);

export default router;
