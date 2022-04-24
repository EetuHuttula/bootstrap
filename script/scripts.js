//autoni page button
function toggle() {
    let carInfo = document.querySelector("#car-info");
    if (carInfo.style.display === "none" || carInfo.style.display === "") {
        carInfo.style.display = "block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } else {
        carInfo.style.display = "none"
    }
}

//Galleria page button
function toggle2() {
    let carouselInfo = document.querySelector("#carousel");
    let cInner = document.querySelector("#cInner");
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
        wrong.innerHTML = "Väärä vastaus, mikä on kissan ja kalan yhdistys?"
    }
}

//formDataC

let form1 = document.querySelector("form")

form1.addEventListener("submit", sendData);

function sendData(event) {

    event.preventDefault();

    //Collect form value
    let formData = new FormData(form1);

    if (formData.get("address").length >= 1 && formData.get("city").length >= 1 && formData.get("zip").length >= 1) {
        //remove t01
        document.querySelector(".fun-container").remove();
    }

    //remove form and send alert
}

//button event

let btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", dangeralert)

function dangeralert() {

    let wrong2 = document.getElementById("danger2");

    if (wrong2.style.display === "none" || wrong2.style.display === "") {
        wrong2.style.display = "block";
        wrong2.innerHTML = "Valitettavasti kaikki on loppu.";
        document.querySelector("form").style.display = "none";
    }


    let btn3 = document.createElement("button");
    btn3.innerHTML = "take me to Etusivu";
    btn3.addEventListener("click", buttoncreate)

    btn3.classList.add("btn3")
    function buttoncreate() {

        location.href = "../etusivu.html";

    } document.body.appendChild(btn3);
}
