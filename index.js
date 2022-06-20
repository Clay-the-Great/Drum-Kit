//Detecting button click;
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < 7; i++) {
  buttons[i].addEventListener("click", needSounds);
}

function needSounds() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

//Alternatively
// for (var i = 0; i < 7; i++) {
//   buttons[i].addEventListener("click", function(){
//     makeSound(this.innerHTML);
//   });
// }


//Detecting keyboard press;
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Making sound;
function makeSound(token) {
  switch (token) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    default:
      console.log(event);
  }
  return;
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
  return;
}
