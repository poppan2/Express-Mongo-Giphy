const seedData = require('../../seed.json')
const Gif = require('../models/gif')

Gif.deleteMany({}).then(()=>{
    Gif.insertMany(seedData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Seed Done!')
        }
        process.exit()
    })
})