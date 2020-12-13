const chalk = require('chalk');
var readlineSync = require('readline-sync');

function log(data){
  console.log(data);
}

function turnInBoldGrey(msg){
  log(chalk.hex('#DEADED').bold(msg));
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

function message(){
 log(chalk.redBright.italic.bold("    You are out of this game now !! "));
}

var score = 0 ;

//list ofquestions with correct answer
var questionlist = [
  {
question :
`What lands Jake's dad in the hospital when his and Amy's parents meet?
 1. Cuts his thumb off trying to cut a turkey
 2. Cuts his finger off pretending to stab Amy's dad
 3. He drunkenly falls over the fireplace
 4. He falls of his chair     `,
answer : "1" },
{
question :
`Where did Terry once live when pursuing a college education?
 1. Australia
 2. Sweden
 3. Alaska
 4. Japan        `,
answer : "4" },
{
question :
`Which member of the squad likes to stay in the office rather than in the line of fire?
 1. Terry
 2. Jake
 3. Amy
 4. Rosa      `,
answer : "1" },
{
  question :
`Who disappeared after the pilot of the show and was never seen again?
 1. Gina
 2. Amy
 3. Detective Daniels
 4. Raymond     `,
answer : "3" },
{
question :
 `What is Jake's favorite movie?
 1. "Casablanca"
 2. "The Terminator"
 3. "Rocky"
 4. "Die Hard"    `,
answer : "4" },
{
question :
 `What happened at Jake and Amy's wedding in Season Five?
 1. There was an earthquake.
 2. There was an objection.
 3. There was a bomb threat.
 4. There was an injury.     `,
answer : "3" },
  {
question :
`What is Terry's favourite food?
 1. Cheese
 2. Milk
 3. Yogurt
 4. Protein powder        `,
answer : "3" },
{
question :
 `Which precinct of the NYPD is Brooklyn 99 set in?
  1. 10
  2. 11
  3. 12
  4. 99       `,
answer : "4" },
{
question :
 `Which character does Joe Lo Truglio play?
 1. Pimento
 2. Captain Ray Holt
 3. Jake Peralta
 4. Charles Boyle        `,
answer : "4" },
{
question :
`Which two character's parents get married?
 1. Boyle's and Linetti's
 2. Boyle's and Peralta's
 3. Peralta's and Santiago's
 4. Peralta's and Linetti's        `,
answer : "1" },
{
question :
`What is Nutriboom?
 1. A drug the gang try to take down
 2. A pyramid scheme
 3. A nickname for Terry
 4. A nickname for Boyle         `,
answer : "2" },
{
question :
 `What does Jake attempt to steal from Holt in the first Halloween episode?
 1. Watch
 2. Medal of Valour
 3. Cummerbund
 4. Crown        `,
answer : "2" },
{
question :
`What does Jake attempt to steal in the second Halloween   episode?
 1. Watch
 2. Medal of Valour
 3. Cummerbund
 4. Crown       `,
answer : "1" },
{
question :
`Who is Jake Peralta's ex-girlfriend?
 1. Sophia Perez
 2. Isabella Martinez
 3. Gabriella Noche
 4. Lara Hilton         `,
answer : "1" },
{
question :
`What is the Vulture's real name?
 1. Keith Pembroke
 2. Teddy Wells
 3. Jason Stentley
 4. Doug Judy           `,
answer : "1" }
]

//list to store highscore
var highscore=[
  {
    name: "Prakshi",
    score: "1"
  },
   {
    name: "Mikansha" ,
    score: "1"
  }
]


turnInBoldGrey(` !==  Welcome to Brooklyn nine nine show quiz ==!`);

var choice = readlineSync.question(turnInBoldGrey("\nPress e to exit or any other key if you want to play this quiz \n") );

if( choice === "e" || choice === "E"  ){
  message() ;
}
else{
  turnInBoldRed("<-----You can press e anytime in this quiz to exit----->");

for( var i = 0 ; i < questionlist.length ; i++ ){

  var current = questionlist[i];
  var index = readlineSync.question(chalk.rgb(255,198,203)(current.question));

  // if-else ladder to check selected answer is right or not or to exit the quiz
  if( index === "e" || index === "E"  ){
    message() ;
    i = questionlist.length ;
  }
  else if(index === current.answer){
    score += 1 ; 
    turnInBoldGreen(" You have scored 1 more point"); 
  }
  else if( index === "1" || index === "2" || index === "3" || index === "4" ){
    turnInBoldRed(" You have selected wrong answer");
  }
  else{
    turnInBoldRed(" !! Invalid Choice !! Please select valid option ");
    i-- ;
  }

  //for level1 and level2 completion in quiz
  if( score == 5 && index === current.answer ){
    turnInBoldYellow(" Congratulations !! you have completed Level 1 ");
  }
  else if( score == 10 && index === current.answer ){
    turnInBoldYellow(" Congratulations !! you have completed Level 2 ");
  }

}
turnInBoldGreen("    Your score is : "+ score);

//to check if user score has beaten the record or not
for( var scorecheck= 0 ; scorecheck < highscore.length ; scorecheck++ ){
  
  if( highscore[scorecheck].score < score  ){
    turnInBoldYellow("\n<=== Congratulations !! you have beaten our high score !!===> \n Please share screenshot with us to upate your score");
    break;
  }
     
}
}