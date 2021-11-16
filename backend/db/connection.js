const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gifs', {useNewUrlParser: true}, ()=>{
    console.log('We connected')
})

module.exports = mongoose;