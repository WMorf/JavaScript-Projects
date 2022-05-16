function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1; //decreases seconds by 1
        timer.innerHTML = seconds;//prints to <p> element with "timer" ID
        var time = setTimeout(tick, 1000); //program pauses for 1,000 milliseconds or 1 second
        if (seconds == -1) { //makes aleert window when time is up
            alert("Times up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick() //calls the nested function
}

// -------------- SlideShow ------------------ //

var slideIndex = 1;

// nav controls
function plustSlides(n) { //n = 1 or -1 , moving through the index
    showSlides(slideIndex += n);
}

// Thumbnail icontrols
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides"); // targets all elements with myslides class
    var dots = document.getElementsByClassName("dot"); //targets dot class elements
    console.log(slides.length);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}