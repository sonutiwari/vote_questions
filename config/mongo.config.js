// Import libraaries required.
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost:27017/questions'
                                      , { 
                                          useUnifiedTopology: true,
                                          useNewUrlParser   : true,
                                          useCreateIndex: true
                                        }
                            );
// Get connection object.
const dbConnection = mongoose.connection;
// Set up success or failure message.
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
    console.log("Successfully connected to mongodb colection questions")
});

// Import the module.
module.exports = dbConnection;
