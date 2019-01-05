const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: 'There is no related user to this reminder'
	},
  search: String,
  items: []
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Search', SearchSchema);