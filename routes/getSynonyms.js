const express=require('express');
const router = express.Router();

const synonyms=require('../controllers/synonyms');

// get synonyms
router
.route('/getSynonyms')
.post(synonyms.getSynonyms);










module.exports = router;