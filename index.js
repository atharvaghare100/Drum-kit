var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var nameofbutton = this.innerHTML;
    soundbutton(nameofbutton);
    buttonanimation(nameofbutton);
}

document.addEventListener("keydown",keyboard_click);

function keyboard_click(event)
{
    soundbutton(event.key);
    buttonanimation(event.key);
}


function soundbutton(key)
{
    switch (key) {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
         break;

         case "a":  
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":  
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

         case "d":  
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":  
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":  
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":  
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:console.log(nameofbutton);
            break;
    }
    
}

function buttonanimation(currentKey)
{
    var animation=document.querySelector("." + currentKey);
    animation.classList.add("pressed");
    
    setTimeout(function() {
        animation.classList.remove("pressed");
    }, 100)
}