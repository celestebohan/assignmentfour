
// get video from html id
document.getElementById('roots');
// get button, create onclick function so that when button is pressed, video plays 
document.getElementById('playVid').onclick = function(){
	if (roots.paused) 
    roots.play(); 
  else 
    roots.pause(); 
    
};


//other things i tried:
// var vid = document.getElementById("roots");


// function playVid(){
// console.log(click);
// }

// let button = document.querySelector('#play-vid');
// button.addEventListener('click', playVid);
