/*var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  elementIsClicked = true;

}*/
var drawer = document.getElementById('fb');
var dScreen1 = document.getElementById('dS1');
var dScreen2 = document.getElementById('dS2');
var floatBtn = document.getElementById('indicationAni');
//var dScreen2 = document.getElementById('dS2');
var drawerStatus = 1;
var drawerCheck;


//drawer.addEventListener('click', dragDrawer);



drawer.onclick = function drag(){
  drawerCheck = drawerStatus % 2;
  if(drawerCheck == 0){
    navBtn.style.display = 'block';
    changeBtn.style.display = 'none';
    drawer.style.WebkitAnimationName = "dDown";
    dScreen1.style.WebkitAnimationName = "fadeIn";
    dScreen2.style.WebkitAnimationName = "fadeOut";

  }else{
    navBtn.style.display = 'none';
    changeBtn.style.display = 'block';
    drawer.style.WebkitAnimationName = "dUp";
    dScreen1.style.WebkitAnimationName = "fadeOut";
    dScreen2.style.WebkitAnimationName = "fadeIn";
    floatBtn.style.WebkitAnimationName = "scale";
    setTimeout(function(){ floatBtn.style.display = 'none';; }, 1300);


  }

  drawerStatus++;
}
