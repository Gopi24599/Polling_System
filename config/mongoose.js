const mong = requrire('mongoose');
requrire('dotenv').config();

mong.connect(process.env.mongooseUrl);

const db = mong.connection;
db.on ('error', console.error.bind(console,
       "Error Connecting DB"));
db.once('open',function(){
    console.log("Successfully Connected to DB!")
})

module.exports = db;
