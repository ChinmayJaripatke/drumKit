// Function to pop out an alert whenever a button is clicked(not used here):

function handleClick(){
  alert("I was Clicked!");
}

// For Button Press:

var noOfDrumButtons = document.querySelectorAll(".drum").length; // Storing the total no of buttons with the class "drum".


// Adding an "addEventListener" method to listen to the "click" of the button and then call the funtion to grab the inner HTML.

for(var i = 0; i < noOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){ // Calling an anonymous function.

    var buttonInnerHTML = this.innerHTML; // Grabs the inner HTML i.e 'w','a'.. and passes it to the makeSound function.

    makeSound(buttonInnerHTML); // Pass the inner HTML the 'makeSound' function.

    buttonAnimation(buttonInnerHTML); // Pass the inner HTML to the 'buttonAnimation' function.


  });
}

// For Keyboard Press:

document.addEventListener("keydown", function(event){ // event gives us all the information.

  makeSound(event.key); // Grab the key which is pressed from the Keyboard.

  buttonAnimation(event.key); // Grab and pass the key to the 'buttonAnimation' function.

});

// makeSound  function actually plays the sound of the drums. It takes in a key.


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      alert("Press one of the drums or the corresponding keys!");

  }

}

// Button Animation:

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey); // Getting the button which is actually pressed or clicked.

  activeButton.classList.add("pressed"); // Adding the class 'pressed' to that button.

  setTimeout(function() { // The Animation will stay for 1s i.e the 'pressed' class would be removed after 1s, returning the normal style of the button.
    activeButton.classList.remove("pressed");
  }, 100);
}
