const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");



const viewMorebtn = document.getElementById("ViewMore").addEventListener("click", function() {

    if (card10.classList.contains("hidden")) {
        card10.classList.remove("hidden");
        card11.classList.remove("hidden");
        card12.classList.remove("hidden");

    }
    // If the hidden cards are currently shown, hide them and change the button text back to "View More"
    else {
        card10.classList.add("hidden");
        card11.classList.add("hidden");
        card12.classList.add("hidden");

    }

});