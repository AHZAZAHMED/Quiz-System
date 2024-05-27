import inquirer from "inquirer";

// 5 question
// score
// correct incorrect  score print

let score :number = 0;
console.log("### Your quiz is being started ###");


let Quiz = await inquirer.prompt([
    {
        message:"What is the capital of France?",
        name : "Q1",
        type : "list",
        choices : ["Berlin","Madrid","Rome","Paris"]
    },
    {
        message:"Who wrote Romeo and Juliet?",
        name : "Q2",
        type : "list",
        choices : ["Charles Dickens","Mark Twain","Jane Austen","William Shakespeare"]
    },
    {
        message:"What is the chemical symbol for water?",
        name : "Q3",
        type : "list",
        choices : ["CO₂","O₂","H₂","H₂O"]
    },
    {
        message:"What is the longest river in the world?",
        name : "Q4",
        type : "list",
        choices : ["Amazon","Mississippi","Yangtze","Nile"]
    },
    {
        message:"What is the smallest prime number?",
        name : "Q5",
        type : "list",
        choices : ["1","4","6","2"]
    },
]);

// we can use both switch or if else statement 

switch(Quiz.Q1){
    case "Paris" :
      console.log("1. Correct ");
      score++;
      break;
      default :
      console.log("1. Incorrect ");
      
}
switch(Quiz.Q2){
    case "William Shakespeare" :
      console.log("2. Correct ");
      score++;
      break;
      default :
      console.log("2. Incorrect ");
      
}
switch(Quiz.Q3){
    case "H₂O" :
      console.log("3. Correct ");
      score++;
      break;
      default :
      console.log("3. Incorrect ");
      
}
switch(Quiz.Q4){
    case "Nile" :
      console.log("4. Correct ");
      score++;
      break;
      default :
      console.log("4. Incorrect ");
      
}
switch(Quiz.Q5){
    case "2" :
      console.log("5. Correct ");
      score++;
      break;
      default :
      console.log("5. Incorrect ");
      
}

console.log(`Your Score is : ${score}`);
