const lo = require("lodash");
const axios = require("axios");

const textURL = "http://terriblytinytales.com/test.txt";

const getFrequencyList = list => {
  const wordMap = {};
  let wordList = [];
  list.forEach(word => {
    let w = word.replace(/n/g, "");
    w = w.toLowerCase();
    if (w in wordMap) wordMap[w] += 1;
    else wordMap[w] = 1;
  });
  for (const [word, frequency] of Object.entries(wordMap)) {
    wordList.push({ word, frequency });
  }
  const sortedList = lo.orderBy(wordList, ["frequency"], ["desc"]);
  return sortedList;
};

const fetchWordsWithFrequency = async () => {
  const response = await axios.get(textURL);
  const patternToRemoveAllButLettersAndSpace = /[^A-Za-z\s]/g;
  const patternToRemoveBackSlashChars = /(\r\n|\n|\r)/gm;
  const formatedData = response.data
    .replace(patternToRemoveAllButLettersAndSpace, " ")
    .replace(patternToRemoveBackSlashChars, "");
  const WordsListImpure = formatedData.split(" ");
  const WordsList = WordsListImpure.filter(w => w !== "");
  const frequencyList = await getFrequencyList(WordsList);
  return frequencyList;
};

module.exports = fetchWordsWithFrequency;
