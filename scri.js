let userscore=0;
let compscore=0;

const usescorepara =document.querySelector('#user-score');
const compscorepara =document.querySelector('#comp-score');

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const gencompchoice=() =>{
const options =["rock","paper","sci"];
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];
}
const  showwinner=(userwin)=>{
if(userwin){
    userscore++;
    usescorepara.innerText=userscore;
    console.log("you win!");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
}
else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you lose!");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
}
}

const drawgame= () => {
    console.log("draw game");
    msg.innerText = "Game Draw.Play again.";
}
const playgame=(userchoice) =>{
console.log("userchocie=",userchoice);
//generate computer choice
const compchoice =gencompchoice();
console.log("comp choice",compchoice);

if(userchoice==compchoice){
drawgame();
}
else{
    let userwin=true;
    if(userchoice=="rock"){
        userchoice=compchoice==="paper"? false :true;

    }
    else if(userchoice=="paper"){
        userwin =compchoice==="sci"? true :false;
    }  
    else{
       userchoice= compchoice ==='rock' ?false:true ;
    }
    showwinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice) =>{
    console.log(choice);
choice.addEventListener("click",() =>{
 const userchoice =choice.getAttribute("id");
    playgame(userchoice);
});
});
