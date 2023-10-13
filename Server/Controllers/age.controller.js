import { AgeFilter } from "../models/ageFilter.js";




export const getAges = async(_req, res) => {
  try {
    const Ages = await AgeFilter.findAll({
      attributes: ["id", "age_range"],
    });
    res.json(Ages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
