var name = prompt("Player 1: Please enter your name");
    console.log("Welcome" + " " + name + " " + "to Amaros's World Series of Rock, Paper, Scissors, best of 7 wins!!");
    var uscore = 0;
    var cscore = 0;
for (var i = 0; i < 7; i++) {
    var user = prompt("Please choose ROCK, PAPER or SCISSORS").toUpperCase();
    var comp = Math.random();
        if (comp < 0.33) {
            comp = "Rock";
        } else if ( comp < 0.67){
            comp = "PAPER";
        } else {
            comp = "SCISSORS";
        }
    

console.log(name + " " + "chooses" + " " + user);
console.log("Computer chooses: " + comp);


var uScoreMsg = name + "Score: " + uscore;
var cScoreMsg = "Computer Score: " + cscore;
var breaker = " ";

var lossmsg = "Computer Wins";
var winmsg = name + " " + "Wins!!";
 if (user === comp) {
     console.log("You both chose the same thing...Tie!!!");
    }else {
        switch(user) {
            case 'ROCK':
            if  (comp === "SCISSORS") {
                console.log(winmsg);
                uscore++
                console.log(uScoreMsg);
                console.log(cScoreMsg);
                console.log(breaker);
            }
            break;

        case 'PAPER':
            if (comp === "ROCK"){
                comp.log(winmsg);
            uscore++;
            console.log(uScoreMsg);
            console.log(cScoreMsg);
            console.log(breaker);
        } else {
            console.log(lossmsg);
            cscore++;
            console.log(uScoreMsg);
            console.log(cScoreMsg);
            console.log(breaker);
        }
        break;

    case 'SCISSORS':
        if (comp ==="PAPER") {
            console.log(winmsg);
            uscore++;
            console.log(uScoreMsg);
            console.log(cScoreMsg);
            console.log(breaker);
        } else {
            console.log(lossmsg);
            cscore++;
            console.log(uScoreMsg);
            console.log(cScoreMsg);
            console.log(breaker);
        }
        break;
        default:
            console.log(user + " " + "isn't an option. Computer Wins");
            cscore++;
            console.log(uScoreMsg);
            console.log(cScoreMsg);
            console.log(breaker);
        }
    }
}

if (uscore > cscore) {
    console.log("Congratulations! You beat the computer. Make it a Winning Streak!!!");
} else if (uscore === cscore) {
    console.log("OH!!! So close. You almost beat the computer or you almost lost! 50-50! No ties in this game. Play again!");
} else {
    console.log("Unfortunately the Computer Whooped ya pal. Ready to play again? Or are you gonna walk? ")
}
