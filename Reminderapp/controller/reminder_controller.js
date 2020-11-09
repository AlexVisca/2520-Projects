let express = require('express');
let database = require("../database");
let app = express();

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    // Get reminder from id in request object
    // Add a comment
    // Search the database to see if cindy has a reminder matching that id
    // Send that result to res.render
    res.render('reminder/edit', { reminderItem: searchResult })

  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    // Get reminder from id in request object parameters
    // Search the database to see if cindy has a reminder matching that id
    // Update the values
    // Redirect back to /reminders
    // res.redirect("/")
    app.put('/reminder', function(req, res) {
      // Somecode
    })
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    // Get reminder from id in request object pararmeters
    // Search the database to find the reminder matching that id
    // Delete the reminder
    // Redirect back to /reminders
    // res.redirect
    app.delete('/reminders')
  }
}

module.exports = remindersController;
