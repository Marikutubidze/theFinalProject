// burger element

const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById("nav");
const blue = document.getElementById("blue");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon1.classList.toggle("active-burger");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  icon3.classList.toggle("active-burger");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
});

// portfolio carousel

let data = [];

let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slidercontent = document.getElementById("slider-content");
let dotslist = document.getElementsByClassName("dot");

let sliderindex = 0;

function createatag(item) {
  let atag = document.createElement("a");
  atag.setAttribute("href", item.url);
  atag.classList.add("slide");

  return atag;
}

function createimgtag(item) {
  slidercontent.style.backgroundImage = "url(" + item.imageUrl + ")";
  slidercontent.style.backgroundRepeat = "no-repeat";
  slidercontent.style.backgroundSize = "cover";
}

function createh2tag(item) {
  let tagtitle = document.createElement("h2");
  tagtitle.classList.add("slider-title");
  tagtitle.append(item.title);

  return tagtitle;
}

function createdots(item) {
  let dots = document.createElement("div");
  dots.classList.add("dots");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", element.id - 1);

    dot.onclick = function (event) {
      let id = event.target.getAttribute("data-id");
      sliderindex = id;
      setslide();
    };
    dots.appendChild(dot);
  });
  return dots;
}

function setslide() {
  slidercontent.innerHTML = " ";

  createimgtag(data[sliderindex]);

  let slideitem = createatag(data[sliderindex]);
  let h2tag = createh2tag(data[sliderindex]);
  let dots = createdots();

  slideitem.appendChild(h2tag);

  slidercontent.appendChild(slideitem);
  slidercontent.appendChild(dots);

  currentdotactive();
}

function currentdotactive() {
  dotslist[sliderindex].classList.add("active");
}

function arrowleftclick() {
  if (sliderindex <= 0) {
    sliderindex = data.length - 1;
    setslide();
    return;
  }
  sliderindex--;
  setslide();
}

function arrowrightclick() {
  if (sliderindex >= data.length - 1) {
    sliderindex = 0;
    setslide();
    return;
  }
  sliderindex++;
  setslide();
}

arrowleft.addEventListener("click", arrowleftclick);
arrowright.addEventListener("click", arrowrightclick);

setInterval(() => {
  arrowrightclick();
}, 4000);

function getImages() {
  fetch("https://photos-api-36ptw.ondigitalocean.app/photos")
    .then((response) => response.json())
    .then((photos) => {
      data = photos;
      setslide();
    });
}

getImages();
