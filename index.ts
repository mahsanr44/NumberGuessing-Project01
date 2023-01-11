#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,40)
    });
}
async function welcome(){
    let title=chalkAnimation.rainbow(`
 
     ██████  ██    ██ ███████ ███████ ███████   
    ██       ██    ██ ██      ██      ██        
    ██   ███ ██    ██ █████   ███████ ███████       
    ██    ██ ██    ██ ██           ██      ██        
     ██████   ██████  ███████ ███████ ███████        
                                                                                                                                     
                                                                                                                                     
    `);
    await sleep();
    title.stop();
}
await welcome();

async function Guess(){
const guess=Math.floor(Math.random()*10)
const answer=await inquirer.prompt([
    {
        type:"number",
        name:"guessnumber",
        message:"Write a number between 1-10"
}
]);
if(answer.guessnumber==guess){
    console.log("Correct Answer. \n You Win!")
} else {
    console.log("Wrong Answer. ")
}
};
async function Repeat(){
do{
    await Guess();
    
    var reset= await inquirer.prompt({
        type:'input',
        name:'restart',
        message:" Press y to Try again!"
    })
}
while(reset.restart=='y' || reset.restart=='Y')
}
await Repeat();

