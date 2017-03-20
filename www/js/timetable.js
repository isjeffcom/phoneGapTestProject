
var indicator = document.querySelectorAll(".t_indicator");
var allTitle = document.querySelectorAll(".t_all_title");
/*indicator.addEventListener('click', function() {
  var id = this.parentNode.id;
  console.log(id);
});*/
for(i=0;i<indicator.length; i++){
  indicator[i].addEventListener('click', function() {
    var tstation = this.parentNode;
    var status = this.dataset.status;
    var title = this.nextElementSibling;
    var detail = this.nextElementSibling.nextElementSibling;
    var triangle = this.childNodes[1];
    console.log(tstation);
    if(status % 2 == 0){
      title.style.WebkitAnimationName = 'fadeIn';
      detail.style.WebkitAnimationName = 'fadeOut';
      triangle.style.WebkitAnimationName = 'rotateUp';
      tstation.style.height = '2%';
    }else{
      title.style.WebkitAnimationName = 'fadeOut';
      detail.style.WebkitAnimationName = 'fadeIn';
      triangle.style.WebkitAnimationName = 'rotateDown';
      tstation.style.height = '22%';
    }
    this.dataset.status++
  }, false);

}
