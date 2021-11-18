const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ') //for each string, with any words or numbers separated by spaces, creates an array with those words as elements
    const capitalizeWord = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); //make first letter capital of each word, then separately slice the word and add it to the capital letter
    const newTutorials = capitalizeWord.join(' ');//joins each element in a string, with each string separated by ' '
    return newTutorials;
  })
}

//need curly brackets for outermost arrow fn because we have more than one operation to perform.
//i.e. there is more than one expresison, we need curly brackets and a return

console.log(titleCased());