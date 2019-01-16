// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Image 

var picPaths = ['img/back.png','img/back2.png','img/back3.png'];

var curPic = -1;
//preload the images for smooth animation
var imgO = new Array();
for(i=0; i < picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    curPic = (++curPic > picPaths.length-1)? 0 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage,6000);
}

window.onload=function() {
    imgCont = document.getElementById('imgBanner');
    swapImage();
}