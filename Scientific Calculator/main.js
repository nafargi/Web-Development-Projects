var screen =document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
var equal = document.querySelector"("#eval");
for(item of btn ){
 item.addEventListener('click', (e)=>{
  let btnValue = e.target.innerText;
hhhhuhuhuhuhuh
  if(btnValue == '÷'){
    btnValue = '/';
  }
  screen.value+= btnValue;
 });
}

equal.addEventListener('click', ()=>{
  try{
   screen.value = eval(screen.value);
  }
 catch(error){
  screen.value = "Error";
 }
 });

function sin(){
    screen.value = Math.sin(screen.value);
}
function cos(){][[
    screen.value = Math.cos(screen.value);
}
function tan(){
    screen.value = Math.tan(screen.value);
}
function log(){
    screen.value = Math.log(screen.value);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function power(){
    screen.value=Math.pow(screen.value,2);
}
function e(){
    screen.value = 2.71828182846;
}
function pi(){
    screen.value= 3.14159265359;
}function fact(){
    var num,f,i;
    f=1;
    num= screen.value;

    for(i = 1; i <= num; i++){
         f=f*i;
    }
    i= i-1;
    screen.value = f;
}
function backspace(){
 screen.value= screen.value.substr(0,screen.value.length-1);
}
