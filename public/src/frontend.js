
body = document.getElementsByTagName('body')[0],

bg = document.getElementById('background');

classes = document.getElementsByClassName('same-colour-as-bg');

function scroll() {
  var newColor = window.scrollY/12;

  bg.style.webkitFilter = "hue-rotate(" + newColor + "deg)";

  for (i = 0; i < classes.length; i++) {

      classes[i].style.webkitFilter = "hue-rotate(" + newColor + "deg)";

  }

}
const leyen = document.getElementById('LEGEND');
const atrav = document.getElementById('atrav-gaming');  

width = screen.width;
if(width <= 1000 || innerWidth <= 1000){
  
    leyen.addEventListener('mouseover', function() {
      leyen.classList.add('animate-small-pc');
  });
  leyen.addEventListener('transitioned', function() {
      leyen.classList.remove('animate-small-pc');
  });

    function checkCollision_small_pc(){
      leyenpos = leyen.getBoundingClientRect()
      atravLeft = atrav.getBoundingClientRect().left
      atravRight = atrav.getBoundingClientRect().right
      // console.log(leyenpos.right + " " + atravLeft)
      if (leyenpos.right >= (atravLeft)) {
        atrav.classList.add('animateAtrav-small-pc');  
      } 
      
      setTimeout(checkCollision_small_pc, 10);
  }(checkCollision_small_pc());


}


else if((width || innerWidth) <= 400){
  document.getElementById("animation-container").remove();
}

else{


  function checkCollision(){
  leyenpos = leyen.getBoundingClientRect()
  atravLeft = atrav.getBoundingClientRect().left
  atravRight = atrav.getBoundingClientRect().right

  if (leyenpos.right >= atravLeft) {
    atrav.classList.add('animateAtrav');  
  } 
  
  setTimeout(checkCollision, 10);
}(checkCollision());

leyen.addEventListener('mouseover', function() {
  leyen.classList.add('animate');
});
leyen.addEventListener('transitioned', function() {
  leyen.classList.remove('animate');
});

}

obj = document.getElementsByClassName("screenshot")
for (var i = 0; i < obj.length; i++) {
obj[i].addEventListener('click', function() {
window.open(this.src, '_blank');
});
}