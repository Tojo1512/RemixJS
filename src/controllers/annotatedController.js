const express = require("express");
const { Controller, Get, Post } = require("../../framework/routes/routeDecorators");

@Controller('/annotated')
class AnnotatedController {
  @Get("/kk")
  async getAll(req, res) {
    console.log("Handling GET /items");
    res.json({ message: "Get all items" });
  }

  @Post("/")
  async create(req, res) {
    console.log("Handling POST /items");
    res.json({ message: "Create an item" });
  }
}

module.exports = AnnotatedController; 