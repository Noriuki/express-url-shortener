import mongoose from 'mongoose';

const URL = new mongoose.Schema({
  hash: {type: String, required: true},
  originUrl: {type: String, required: true},
  shortUrl: {type: String, required: true}
})

const URLModel = mongoose.model('URL', URL); 

export default URLModel;