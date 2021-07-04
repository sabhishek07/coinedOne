const express = require('express');
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    startTime: {
        type: String,
        required: "please enter date"
    },
    endTime: {
        type: String,
        required: "enter endtime"
    },
    day: {
        type: String,
        required: "enter day"
    }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);