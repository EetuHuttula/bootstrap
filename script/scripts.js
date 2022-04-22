
function toggle() {
    let carInfo = document.getElementById("car-info");
        if(carInfo.style.display === "none" || carInfo.style.display === "") {
            carInfo.style.display = "block";
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        } else {
            carInfo.style.display = "none"
        }
}

//popover 

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function toggle2() {
    let carouselInfo = document.getElementById("carousel");
    let cInner = document.getElementById("cInner");
        if(carouselInfo.style.display === "none" || carouselInfo.style.display === "" &&
            cInner.style.display === "none" || cInner.style.display === "") {
            carouselInfo.style.display = "block";
            cInner.style.display = "block";
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        } else {
            carouselInfo.style.display = "none"
            cInner.style.display = "none"
        }
}