let body=document.querySelector("body");
let opt=document.querySelectorAll(".options");
let msg=document.getElementById("msgbox");
let compcnt=document.getElementById("compcnt");
let usercnt=document.getElementById("usercnt");
let displayu=document.getElementById("display");
let displayc=document.getElementById("displayc");
let reset=document.getElementById("resetbtn");

opt.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    
    const userchoice=choice.getAttribute("id");
    
    displayu.innerText=` your choice is ${userchoice}`;
    playgame(userchoice);
  });
})
function  computerturn() {

  let arr=["rock","paper","sissors"] ;
  let randomnum=Math.floor(Math.random()*3);
   return arr[randomnum];
    
}
let countc=0;
let countu=0;
const showwinner=(userwin)=>{
 
  if(userwin)
  
  {
   
    msg.innerText="user won!";
    msg.style.color="green";
   
    countu++;
    usercnt.innerText= countu;
    
  }
  else{
    msg.innerText="computer won!";
    
    msg.style.color="red";
    countc++;
    compcnt.innerText=countc;
  }

}


 const playgame=(userchoice)=>{
  console.log(userchoice);
  const comp=computerturn();
  console.log(comp);
  displayc.innerText=`computer choice is ${comp}`;
  if(userchoice===comp){
    msg.innerText="IT'S A DRAW!"
    msg.style.color="C76D7E";
  }
  else{
    let userwin=true;
    if(userchoice==="rock"){
     userwin= comp==="paper"? false :true;
    }
    else if(userchoice==="paper"){
       userwin=comp==="sissors"? false:true;
    }
    else{
      userwin=comp==="rock"?false:true;
    }
    showwinner(userwin);
  }
  
 }
 reset.addEventListener("click",resetfun);
  function resetfun(){
    displayu.innerText="";
    displayc.innerText="";
    msg.innerText="";
    countc=0;
   countu=0;
    compcnt.innerText=0;
    usercnt.innerText=0;
  } 
