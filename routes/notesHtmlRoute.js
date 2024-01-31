const path = require ('path');
const router = require ('express').Router();

 

//route to send the user to the notes route 
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//root path will go back to index.html route
router.get ('/', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html' ))
);


module.exports = router;