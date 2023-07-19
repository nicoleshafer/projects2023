const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/realtor',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


.then(() => console.log("Established a connection to the database"))
.catch(err =>console.log("Something went wrong with the connection to the database ",err))