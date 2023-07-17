const thesaurus = require('thesaurus');
const stopword = require('stopword');
const catchAsync = require('../utils/catchAsync');
//const AppError = require('../utils/appError');
exports.getSynonyms = catchAsync(async (req, res, next) => {

  const text = req.body.text;
  let textArray = text.split(' '); // string change into array


  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].length > 3) {   // check words lenght
      const isStopWord = stopword.removeStopwords([textArray[i]]).length !== 1; // check the stopword
      if (!isStopWord) {

        let synonymsArray = thesaurus.find(textArray[i]);
        let num = 0; // Default value
        if (synonymsArray && synonymsArray.length > 0) {
          num = Math.floor(Math.random() * synonymsArray.length);   // select random synonyms         
          let syn = synonymsArray[num];
          textArray[i] = syn;

        }
      }



    }

  }
  let rewrittenTaxt = textArray.join(' ');

  data = {
    text: rewrittenTaxt,
  }
  res.status(200).json(data);

});








