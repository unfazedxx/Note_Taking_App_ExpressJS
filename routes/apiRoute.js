const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(dbJSON);
});

router.post('/api/notes', (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    const feedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    dbJSON.push(feedback);
    fs.writeFileSync('./db/db.json', JSON.stringify(dbJSON));
    res.json(dbJSON);
});

module.exports = router;