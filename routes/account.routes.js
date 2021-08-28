import express from "express";
import AccountController from "../controllers/account.controller.js";

const router = express.Router();

router.post("/", AccountController.createAccount)
router.get("/", AccountController.getAccounts)
router.get("/:id", AccountController.getAccountById)
router.delete("/:id", AccountController.deleteAccount)
router.put("/", AccountController.updateAccount)
router.patch("/updateBalance", AccountController.updateBalance)

router.use((err, req, {status}, next) => {
    const {baseUrl, method} = req;
    const {message} = err;
    LOGGER.error(`${method} ${baseUrl} - ${message}`);
    status(400).send({error: message})
})


export default router;