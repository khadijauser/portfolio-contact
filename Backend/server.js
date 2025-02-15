const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./route'); 

const app = express();
const PORT = 8999;

app.use(cors());
app.use(express.json());
app.use("/api", route);



const mongoDBURL = 'mongodb://127.0.0.1:27017/khadija'; 

mongoose.connect(mongoDBURL,{ useNewUrlParser : true, useUnifiedTopology: true })
.then(() => console.log(' Connected to MongoDB'))
.catch(err => console.error(' Failed to connect to MongoDB:', err.message));


app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`); 
});
 
