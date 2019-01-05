const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: 'There is no related user to this reminder'
	},
  name: String,
  market: String,
  image: String,
  link: String,
  upc: String,
  price: String,
  priceNum: Number,
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Item', ItemSchema);