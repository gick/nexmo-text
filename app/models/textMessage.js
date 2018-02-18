var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var textMessage = new Schema({

    "msisdn": String,
    "to": String,
    "messageId": String;
    "text": String,
    "type": String,
    "keyword": <<<<<<string,
    "message-timestamp": String,
    "timestamp": String,
    "nonce": String,
    "concat": String,
    "concat-ref": String,
    "concat-total": String,
    "concat-part": String,
    "data": String,
    "udh": String
  });

// Compile model from schema
module.exports = mongoose.model('TextMessage', textMessage);
