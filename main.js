"use strict";

jQuery(document).ready(function($) {

    //preloader

    setTimeout(() => {
        $('.preloader').css("display", "none");
    }, 1500);

    //background-change animation for jumbotron
    const jumbotron = document.querySelector('.jumbotron');
    let isImage1 = true;

    setInterval(() => {
    if (isImage1) {
        jumbotron.classList.add('jumbotron-active');
    } else {
        jumbotron.classList.remove('jumbotron-active');
    }
    isImage1 = !isImage1;
    }, 3000); // change in every 3 seconds

    // Get the button:
    let mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Event listener for the button click
    mybutton.addEventListener("click", topFunction);
    
    //End

});



