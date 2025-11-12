const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../models/movie.model.js");

const movieRouter = express.Router();

/**
 * @route   POST /add-movie
 * @desc    Add a new movie
 */
movieRouter.post("/add-movie", async (req, res) => {
  try {
    const { title, director, releaseYear, genre } = req.body;

    // Basic validation
    if (!title || !director || !releaseYear || !genre) {
      return res.status(400).json({
        success: false,
        message: "All fields are required (title, director, releaseYear, genre)",
      });
    }

    const newMovie = new Movie({ title, director, releaseYear, genre });
    await newMovie.save();

    res.status(201).json({
      success: true,
      message: "New movie added successfully!",
      data: newMovie,
    });
  } catch (error) {
    console.error("Add Movie Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

/**
 * @route   PUT /update-movie/:id
 * @desc    Update a movie by ID
 */
movieRouter.put("/update-movie/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Movie ID" });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({
      success: true,
      message: "Movie updated successfully!",
      data: updatedMovie,
    });
  } catch (error) {
    console.error("Update Movie Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/**
 * @route   DELETE /delete-movie/:id
 * @desc    Delete a movie by ID
 */
movieRouter.delete("/delete-movie/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Movie ID" });
    }

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully!",
      data: deletedMovie,
    });
  } catch (error) {
    console.error("Delete Movie Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/**
 * @route   GET /all-movies
 * @desc    Get all movies
 */
movieRouter.get("/all-movies", async (req, res) => {
  try {
    const allMovies = await Movie.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      total: allMovies.length,
      data: allMovies,
    });
  } catch (error) {
    console.error("Fetch Movies Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/**
 * @route   GET /:id
 * @desc    Get a single movie by ID
 */
movieRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Movie ID" });
    }

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({
      success: true,
      message: "Movie fetched successfully!",
      data: movie,
    });
  } catch (error) {
    console.error("Fetch Movie Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = movieRouter;
