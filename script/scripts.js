//autoni page button
function toggle() {
    let carInfo = document.getElementById("car-info");
    if (carInfo.style.display === "none" || carInfo.style.display === "") {
        carInfo.style.display = "block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } else {
        carInfo.style.display = "none"
    }
}

//Galleria page button
function toggle2() {
    let carouselInfo = document.getElementById("carousel");
    let cInner = document.getElementById("cInner");
    if (carouselInfo.style.display === "none" || carouselInfo.style.display === ""
        && cInner.style.display === "none" || cInner.style.display === "") {
        carouselInfo.style.display = "block";
        cInner.style.display = "block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } else {
        carouselInfo.style.display = "none"
        cInner.style.display = "none"
    }
}

//Kalastus page (TÄSSÄ ON EVENTTIEN KÄYTTÖÄ)

//popover

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

//button event

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", check)

//form1 hidden
document.getElementById("form1").style.display = "none";

function check() {

    let inputField = document.getElementById("tehtava");
    let wrong = document.getElementById("danger");
    let right = document.getElementById("success");

    if (inputField.value === "kissakala" || inputField.value === "Kissakala") {
        document.querySelector("#t01").style.display = "none";
        right.style.display = "block"
        right.innerHTML = "Oikea vastaus!" + " Alla pääset tilaamaan voitto tuotteen kotiisi! :)"
        wrong.style.display = "none"
        document.querySelector("#form1").style.display = "block"
    } else {
        wrong.style.display = "block"
        wrong.innerHTML = "Vastaus ei ole " + inputField.value + " Oikea vastaus on Kissakala :)"
    }
}

//button event
//formData
let btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", check2)
//hide button

function check2(event) {

    event.preventDefault();

    let right = document.getElementById("success");
    let wrong = document.getElementById("danger");
    
  
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let zip = document.getElementById("zip").value;

      if ( address == null || address <= 2 ) {
        wrong.style.display = "block";
        wrong.innerHTML = "Address needs more than 2 characters";
        right.style.display = "none";
        return
      } else if ( city == null || city <= 2 ) {
        wrong.style.display = "block";
        wrong.innerHTML = "City needs more than 2 characters";
        right.style.display = "none";
        return
      } else if ( zip == null || zip <= 5 ) {
        wrong.style.display = "block";
        wrong.innerHTML = "Zip needs more than 2 numbers";
        right.style.display = "none";
        return
        } else { 
        right.style.display = "none"
        console.log("Hello world!");
        wrong.style.display = "block"
        wrong.innerHTML = "Valitettavasti kaikki on loppu.";
        document.querySelector("form").style.display = "none";
    }
}