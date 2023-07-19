const mongoose = requrire('mongoose');
const Questions = requrire('./Questions');

const optionSchema = new mongoose.Schema({
    Text:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        default:0
    },
    link_to_vote:{
        type: String
    }

})
const Options = mongoose.module('Options', optionSchema);
module.exports = Options;