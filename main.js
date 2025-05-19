//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
};
//declaring conversion formulas
const weight = Math.round(300/14) + ' stone';
const temperature =  Math.round(((94-32)*5)/9) + ' centigrade';

//2. RAW TEXT STRINGS
const insertXarray = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"];

const insertYarray = ["the soup kitchen",
"Disneyland",
"the White House"];

const insertZarray = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];

const storyText = "It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.";


3//. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result); 
//my mistake was writingn result() as if i was passing something and not just calling it 
function result() {
let newStory = storyText;

 const xItem = randomValueFromArray(insertXarray);
 const yItem = randomValueFromArray(insertYarray);
 const zItem = randomValueFromArray(insertZarray);


 //newStory is inmutable so here we are basically writinng newStory now has this replaced, then newStory now has this replaced, and so on
 //before i had stuff like "let replaceX = storyText.replaceAll("insertX, xItem);
newStory = newStory.replaceAll("insertx", xItem);
newStory = newStory.replace("inserty", yItem);
newStory = newStory.replace("insertz", zItem);
if(customName.value !== '') {
    newStory  = newStory.replace("Bob", customName.value);
    
  }
  if(document.getElementById("uk").checked) {
   
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  };
  story.textContent = newStory;

};

 
  

  story.style.visibility = 'visible';
