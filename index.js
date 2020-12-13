const chalk = require('chalk');
var readlineSync = require('readline-sync');

function log(data){
  console.log(data);
}

function turnInBoldRed(msg){
  log(chalk.red.bold(msg));
}
function turnInBoldGreen(msg){
  log(chalk.green.bold(msg));
}
function turnInBoldYellow(msg){
  log(chalk.yellow.bold(msg));
}
function turnInBoldGrey(msg){
  log(chalk.hex('#DEADED').bold(msg));
}

function message(){
 log(chalk.redBright.italic.bold("    You are out of this game now !! "));
}

var score = 0 ;

//list ofquestions with correct answer
var questionlist = [
  {
    question:`Where do I live?      `,
    answer:`muzaffarnagar      `
  },
  {
    question:`What's my favourite food? Hint(chinese food)       `,
    answer:`noodles`
  },
  {
    question:`What's my favourite color ?      `,
    answer:`black`
  },
  {
    question:`Which country I would like to visit?      `,
    answer:`South Korea`
  },
   {
    question: `What is my nicknames?       `,
    answer:`praku`
  },
  {
    question:`What is my favourite series name ?     `,
    answer:`friends`
  },
  {
    question:`When's my bithday ?      `,
    answer:`1march`
  },
  {
    question:` Which season i like the most from summer and winter      `,
    answer:`winter`
  },
   {
    question:`What's my favourite song ?(Hint: Circles,Ride it)      `,
    answer:`circles`
  },
  {
    question:` Who is my favourite superhero?     `,
    answer:`flash`
  }
]


var name = readlineSync.question(turnInBoldYellow(` What's your Name ?`));

turnInBoldYellow(`!== HI `+ name +` Let's check how well you know Prakshi==!`);

var choice = readlineSync.question(turnInBoldYellow("\nPress e to exit or any other key if you want to play this quiz \n") );

if( choice === "e" || choice === "E"  ){
  message() ;
}
else{
  turnInBoldRed("<-----You can press e anytime in this quiz to exit----->");

for( var i = 0 ; i < questionlist.length ; i++ ){

  var current = questionlist[i];
  var index = readlineSync.question(turnInBoldYellow(current.question));

  if( index === "e" || index === "E"  ){
    message() ;
    i = questionlist.length ;
  }
  else if(index.toUpperCase() === (current.answer).toUpperCase()){
    score += 1 ; 
    turnInBoldGreen(" You have scored 1 more point"); 
  }
  else{
    turnInBoldRed(" You have given wrong answer");
  }
}
turnInBoldGreen("    Your score is : "+ score);
if( score >= 8 ){
    turnInBoldGrey("<=== You are so close to Prakshi ===>") ;
}
else if( score < 8 && score >= 4 ){
  turnInBoldGrey("<=== You know little bit about Prakshi ===>") ;
}
else{
  turnInBoldGrey("<=== You need to know more about Prakshi ===>") ;
}

}

