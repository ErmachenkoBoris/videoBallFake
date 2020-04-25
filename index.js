var ball = document.getElementsByClassName('ball')[0];

document.getElementsByClassName('ball')[0].onclick = function() {
    ball.classList.add('horizTranslate');
  }

//   document.body.onkeyup = function(e){
//     if(e.keyCode == 32){
//         ball.classList.add('horizTranslate');
//     }
// }