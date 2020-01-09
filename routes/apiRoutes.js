const router = require("express").Router();
const fs = require('fs');
const db = require('../models');
const path = require('path');

module.exports = function(router) {
    router.get('/api/workouts', (req, res) => {
        db.Workout.find({})
          .then (data => res.send(data))
          .catch (err => res.send(err));
    });
    router.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body}})
        .then(data => res.send(data))
        .catch( err => res.send(err));
    });
    router.post('/api/workouts', (req, res) => {
        db.Workout.create({})
        .then(data => res.send(data))
        .catch( err => res.send(err));
    });
    router.get('/api/workouts/range', (req, res)=>{
        db.Workout.find({})
        .then(data=> res.send(data))
        .catch(err=> res.send(err));
    });
};
