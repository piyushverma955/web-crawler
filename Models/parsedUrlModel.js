"use strict";

const mongoose = require('mongoose');
const ParsedUrlSchema = require('./schemas/parsedUrlSchema');

module.exports = mongoose.model('ParsedUrls', ParsedUrlSchema);