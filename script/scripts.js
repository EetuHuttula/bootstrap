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

  if (address == null || address <= 2) {
    wrong.style.display = "block";
    wrong.innerHTML = "Address needs more than 2 characters";
    right.style.display = "none";
    return
  } else if (city == null || city <= 2) {
    wrong.style.display = "block";
    wrong.innerHTML = "City needs more than 2 characters";
    right.style.display = "none";
    return
  } else if (zip == null || zip <= 5) {
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
//käytin Steve Griffith:n youtube videota apuna 
const APP = {

  urls: {
    base: 'https://swapi.dev/api/',
    people: 'people/',
    planets: 'planets/',
    films: 'films/',
    species: 'species/',
    vehicles: 'vehicles/',
    starships: 'starships/',
  },
  init: () => {
    APP.addListeners();
    APP.buildNav();
  },
  addListeners: () => {
    let nav = document.getElementById('nav');
    nav.addEventListener('click', APP.getData);
    footer.addEventListener('click', APP.getData);
  },
  buildNav: () => {
    let df = new DocumentFragment();
    for (let nm in APP.urls) {
      if (nm != 'base') {
        let link = document.createElement('a');
        link.href = `${APP.urls.base}${APP.urls[nm]}`;
        link.textContent = nm;
        link.setAttribute('data-link', `${APP.urls.base}${APP.urls[nm]}`);
        df.append(link);
      }
    }
    document.getElementById('nav').append(df);
  },
  getData: (ev) => {
    if (ev) ev.preventDefault();
    //show overlay / loader
    document.querySelector('.overlay').classList.add('active');
    //get the url
    let link = ev.target;
    let url = link.getAttribute('data-link');
    //fetch the data
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then(APP.buildList)
      .catch((err) => {
        console.log(err)
        ;
        document.querySelector('.overlay').classList.remove('active');
      });

  },
  buildList: (data) => {

    let m = document.getElementById('main');
    console.log("hello world!")
    document.querySelector('.overlay').classList.remove('active');
    //add the data
    m.innerHTML = data.results
      .map((item) => {
        let nm = item.name || item.title;
        return `<p>${nm}</p>`; }).join(' ');


    //add the prev/next navigation

    let footer = document.getElementById('footer');
    footer.innerHTML = '';

    if (data.previous) {
      //previous link
      let prev = document.createElement('a');
       prev.href = data.previous;
        let url = new URL(data.previous);
        let labels = url.pathname.split('/');
         let label = labels[labels.length - 2];
           prev.textContent = `<< Previous ${label}`;
            prev.setAttribute('data-link', data.previous);
            footer.append(prev);
    }
    if (data.next) {
      //next link
          let next = document.createElement('a');
          next.href = data.next;
          let url = new URL(data.next);
          let labels = url.pathname.split('/');
          let label = labels[labels.length - 2];
          next.textContent = `Next ${label} >>`;
          next.setAttribute('data-link', data.next);
          footer.append(next);
    }
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
