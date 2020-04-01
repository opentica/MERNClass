const mongoos =require('mongoose');
const config = require('config');

const db=config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoos.connect(db,
            {useNewUrlParser:true,
             useUnifiedTopology: true 
            });
        console.log('mongo db connected');
    } catch (err) {
        console.log(err.message);
        //Exit process with failure
        process.exit(1)

    }

}

module.exports = connectDB;