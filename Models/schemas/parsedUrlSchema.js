var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parsedUrlSchema = new Schema({
    url: {
        type: String
    },
    referenceCount: {
        type: Number,
        default: 0.0
    },
    parameters: [
        { type: String }
    ],
    parsedAt:{
        type: Date,
        default:Date.now()
    }
}, { versionKey: false,autoIndex:true });

module.exports = parsedUrlSchema