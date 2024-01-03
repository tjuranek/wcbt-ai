import express from "express";
import { parseShifts } from "./parser";

export const router = express.Router();

router.post("/shifts/parse", async (req, res) => {
  const eventDescription = req.body.eventDescription;

  if (!eventDescription && typeof eventDescription !== "string") {
    res.status(500).send("Event description required on request body.");
  }

  res.json(await parseShifts(eventDescription));
});
