//Sidebar contorller
window.onload = function(){
    var canvas = document.getElementById("hamMenu"); //get canvas
    var icon = whooper.create(canvas);             //create whooper instance
    var sidebar = document.getElementById("sb");      //get sidebar
    var logo = document.getElementById('logo');
    var map = document.getElementById('map')
    icon.color = "#333333";                       //change color (default is white)
    icon.set(0);                                 //draw frame No 0

    //add click listener to the canvas
    canvas.addEventListener("click", function(){ icon.rotate(200); });
    canvas.addEventListener("click", function(){

      if(icon.state != ''){
        var c = icon.state/50;
        var b = c % 2;
        if(b == 0){
          sidebar.style.WebkitAnimationName = "moveLeft";
          canvas.style.marginLeft='-6pt';
          icon.color = "#333333";
        }else{
          sidebar.style.WebkitAnimationName = "moveRight";
          canvas.style.marginLeft='6pt';
          icon.color = "#ffffff";
        }
      }
    });

    logo.addEventListener("click", function(){ icon.rotate(200); });
    logo.addEventListener("click", function(){
      console.log(icon.state);
        var c = icon.state/50;
        var b = c % 2;
        if(b == 0){
          sidebar.style.WebkitAnimationName = "moveLeft";
          canvas.style.marginLeft='-6pt';
          icon.color = "#333333";
        }else{
          sidebar.style.WebkitAnimationName = "moveRight";
          canvas.style.marginLeft='6pt';
          icon.color = "#ffffff";
        }
    });

    map.addEventListener('click', function(){
      var c = icon.state/50;
      var b = c % 2;
      console.log(b);
      if(b == 0){
        // do nothing
      }else{
        sidebar.style.WebkitAnimationName = "moveLeft";
        canvas.style.marginLeft='-6pt';
        icon.color = "#333333";
        icon.rotate(200);
        }
    });


};
