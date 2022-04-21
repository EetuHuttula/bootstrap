
function toggle() {
    let carInfo = document.getElementById("car-info");
        if(carInfo.style.display === "none") {
            carInfo.style.display = "block";
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        } else {
            carInfo.style.display = "none"
        }
}
function toggle2() {
    let carouselInfo = document.getElementById("carousel");
    let cInner = document.getElementById("cInner");
        if(carouselInfo.style.display && cInner.style.display  === "none") {
            carouselInfo.style.display = "block";
            cInner.style.display = "block";
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        } else {
            carouselInfo.style.display = "none"
            cInner.style.display = "none"
        }
}