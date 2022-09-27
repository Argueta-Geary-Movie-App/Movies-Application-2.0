"use strict";
// test merge
/* FETCH GLITCH API */
function fetchMovies () {
    fetch('https://aluminum-coral-comic.glitch.me/movies')
        .then(response => {
            console.log(response);
            if(!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        })
        .then(movieData => {
            console.log(movieData);
            $('#app').insertAdjacentHTML('afterbegin', '<h1>Hurry Up, Cas!</h1>');
        }).catch(error => {
        console.log(error);
    });
}
fetchMovies();

//hello

/* LOADER */
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 1000);

    }
};

/* EVENT LISTENERS */
$('#find-movie').on('click', function () {
    alert("Search button works.");
});









