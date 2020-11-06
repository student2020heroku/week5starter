const express = require('express');
const fs = require('fs');

const app = require('./app.js')(express, fs);

app.listen(4321);