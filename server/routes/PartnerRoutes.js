import express from "express";//this is how we import express module
import { createPartner, getPartners } from "../controllers/partnerController.js"; // importing the createPartner function from partnerController.js
const router = express.Router(); // router use hota hai different routes ko handle karne ke liye
router.post("/apply", createPartner);// yeh ri\oute handle karega jab client "/apply" endpoint pe POST request bhejega
router.get("/", getPartners); // GET route to retrieve all partner applications
export default router; // we are exporting the router so that we can use it in other files