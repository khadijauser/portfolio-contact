const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./route'); 

const app = express();
app.use(cors());
app.use(express.json());

// Définition de la route principale pour l'API
app.use('/api', route);

const mongoDBURL = 'mongodb://127.0.0.1:27017/khadija'; 

mongoose.connect(mongoDBURL)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Failed to connect to MongoDB:', err.message));

const PORT = 8999;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`); 
});
 
