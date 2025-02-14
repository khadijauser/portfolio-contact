const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('leooo')
    });
    
// Route de test
route.get('/leo', (req, res) => {
Contact.find().then(users=>res.json(users)).catch(err=>res.json(err))
});

// Route pour sauvegarder un message
route.post('/msgs', async (req, res) => {
    console.log('📩 Requête reçue :', req.body);

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: '❌ All fields are required' });
        }

        const newMsg = new Contact({ name, email, message });
        const savedMsg = await newMsg.save();

        console.log('✅ Message sauvegardé :', savedMsg);
        res.status(201).json({ success: '✔️ Message saved successfully!', data: savedMsg });
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde :', error);
        res.status(500).json({ error: '❌ Server error' });
    }
});

module.exports = route;
 
