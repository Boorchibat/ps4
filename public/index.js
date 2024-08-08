var dropdownBtn = document.querySelectorAll(".dropdown-button")
lastOpened = null;

console.log(dropdownBtn)

dropdownBtn.forEach(btn => btn.addEventListener('click', function () {
    // console.log('clicked')
    var menuContent = btn.parentElement.querySelector('.dropdown-content');

    if (!menuContent.classList.contains("show")) {
        menuContent.classList.add("show");
        menuContent.classList.remove("hide");
    } else {
        menuContent.classList.add("hide");
        menuContent.classList.remove("show");
    }

    //Add this for toggling dropdown
    if (lastOpened && lastOpened !== menuContent)
        lastOpened.classList.remove("show");
    lastOpened = menuContent;
}));

var i = 0;          // Start Point
var images = [];    // Images Array
var video = [];     // Video Array
var time = 3000;    // Time Between Switch





// Change Image
function swapscreen() {
    const slides = document.getElementsByClassName('slide')
    console.log(i)
    // Check If Index Is Under Max
    if (i < slides.length) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }
    slides[i - 1].style.display = 'none'
    slides[i].style.display = 'flex'
}

swapscreen()

function swapscreen2() {
    const slides = document.getElementsByClassName('slide')
    console.log(i)

    // Check If Index Is Under Max
    if (i > 0) {
        // Add 1 to Index
        i--;
    } else {
        // Reset Back To O
        i = slides.length - 1;
    }
    slides[i + 1].style.display = 'none'
    // slides[i - 1].style.display = 'none'
    slides[i].style.display = 'flex'


}

// JavaScript
const changeText = document.querySelector("#change-text");

function swapscreen3() {
    changeText.textContent = "Text has been changed!";
};
//   function