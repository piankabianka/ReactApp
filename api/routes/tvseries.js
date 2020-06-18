const express =  require('express'); //ok
const router= express.Router();  //ok

const TvSeries = require('../models/tvSeries');
const verify= require('./verifytoken');
const {tvseriesValidation}=require('../validation');


//GET ALL SERIES:

router.get('/', async(req, res)=>{
      
    try{
    const options = {};
     
    
    const tvseries=await TvSeries.find(options);

    /*
    if(req.query.epiosodesMoreThan){
        const filtered = tvseries.filter((oneSeries)=>{
            return oneSeries.episodes.length>=req.query.epiosodesMoreThan;
        })
        return res.json(filtered);
    }*/
    res.json(tvseries);


    }
    catch(err){
        res.json({message: err});
    }
});

//ADD TVSERIES:

router.post('/', /*verify,*/ async (req, res)=>{

    console.log(req.body)

    //const {error} = tvseriesValidation(req.body);
    //if(error) return res.status(400).send(error.details[0].message);

    const seriesExists= await TvSeries.findOne({title: req.body.title});
    if(seriesExists) return res.status(400).send('Series already exists in DB');
    const tvseries=new TvSeries({
        title: req.body.title,
        number: req.body.number,
        grade: req.body.grade,
        desc: req.body.desc
    });
    console.log(req.body);
    try{
    const savedTvSeries= await tvseries.save();
    res.json(savedTvSeries);
    }
    catch(err){
        res.json({message: err});
    }
});

//GET SPECYFIC SERIES BY ID:
router.get('/:seriesId', async (req, res)=>{
    try{
    const tvseries = await TvSeries.findById(req.params.seriesId);
    if(!tvseries) return res.status(404).send("TvSeries not found");
    res.json(tvseries);
    }
    catch(err){
        console.log(err);
        
        res.json({message: err});
    }
});


//DELETE SERIES BY ID

router.delete('/:seriesId', /*verify,*/  async (req, res)=>{
    try{
    const removedTVSeries = await TvSeries.deleteOne({_id: req.params.seriesId});
    res.json(removedTVSeries);
    }
    catch(err){
        res.json({message: err});
    }
});

//uPDATE NUMBER OF SEASONS BY ID
/*router.patch('/:seriesId', verify, async  (req, res)=>{
    
try{
    const updatedTvSeries = await TvSeries.updateOne({_id: req.params.postId}, { $set: {title: req.body.title}});
    res.json(updatedTvSeries);
}
catch(err){
    res.json({message: err});
}
});*/

module.exports=router; //ok
