const mongoose=require('mongoose');

const TvSeriesSchema=mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    number:{
        type: Number,
        default: 1
    },
    grade:{
        type: Number,
        default: 10
    },
    desc:{
        type: String
    }

});

module.exports=mongoose.model('tvSeries', TvSeriesSchema);