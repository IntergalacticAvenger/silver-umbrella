
//all elements with the class="slides" -> our images basically
//queryselectall -> returns HTML collection (basically an array of images)
let slideShow = document.querySelectorAll('.slides'),
    arrowPrevious = document.querySelector('.arrowBack'),
    arrowNext = document.querySelector('.arrowNext'),
    dots = document.getElementsByClassName('.dots'),
    slideIndex = 0;

startSlideShow(); //Open so we only see first image

function hideImages() {
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }

}

function dotSlide(n) {
    slideIndex = n; //0 1 2 3
    hideImages();
    // if (slideIndex === dots[slideIndex-1]) {
    //     slideShow[slideIndex-1].style.display = "block";
    // }

    slideShow[slideIndex].style.display = 'block';
    dots[slideIndex].className = ' ';

}



// dots.addEventListener('click', function () {
//     hideImages();
//     slideShow[slideIndex].style.display = 'block';
//
//
// });








//Previous Slide Button
function previousSlide() {
    hideImages();
    slideShow[slideIndex-1].style.display = 'block'; //display prev slide
    slideIndex--; //moved back a slide, so adjust index
}

arrowPrevious.addEventListener('click', function() {
    if (slideIndex === 0) {
        slideIndex = slideShow.length;
    }
    previousSlide();
});


//Next Slide Button
function nextSlide() {
    hideImages();
    slideShow[slideIndex+1].style.display = 'block';
    slideIndex++; //we are now on next slide
}

arrowNext.addEventListener('click', function() {
    if (slideIndex === slideShow.length-1) {
        slideIndex = -1;
    }
    // } if (slideIndex > slideShow.length) {
    //     slideIndex = 1;
    // } if (slideIndex < 1) {
    //     slideIndex = slideShow.length;
    // }


    nextSlide(); // -1 + 1 = 0 aka starting Slide 1 :)
});


function startSlideShow() {
    hideImages(); //hide all images first
    slideShow[0].style.display = 'block';
}

//     function nextSlide() {
//         hideImages();
//         slideShow[slideIndex+1].style.display = 'block';
//         slideIndex++; //we are now on next slide
//     }


// arrowPrevious.addEventListener('click', function() {
//     if (slideIndex === 0) {
//         slideIndex = slideShow.length;
//     }
//     previousSlide();
// });




// Countdown Timer
let interval = setInterval(function () {

        var finishTime = new Date("May 10, 2020 17:00:00");
        var today = new Date();

        var timeLeft = Math.floor((finishTime - today) / 1000);
        var n = timeLeft.toLocaleString();

        document.getElementById("timer").innerHTML = n;
    }
    ,1000);

//Highlighting the top left string
var topLeftText = document.getElementById("museum-title");
//jan shrem and maria manetti shrem museum





