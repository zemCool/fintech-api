const { Schema, model } = require('mongoose')

const Request = new Schema({
  card_name: { 
    type: String, 
    enum: ['VISA', 'MasterCard'],
    required: true 
  }, 
  request_owner_id: {type: String}, 
  money_count: {type: Number, required: true},
  date_of_request: {type: Date}
})

module.exports = model('Request', Request)