// Start MegaMenu
const navElement = document.querySelector(".nav-box");

const magaMenu = document.createElement("div");
document.body.append(magaMenu);
magaMenu.classList.add("mega-menu");

const closeMenu = document.querySelector(".close");
magaMenu.append(closeMenu);

const changeLang = document.querySelector(".change-lang").cloneNode(true);
magaMenu.append(changeLang);

const logo = document.querySelector(".logo").cloneNode(true);
magaMenu.append(logo);

const mainNav = document.querySelector(".main-nav").cloneNode(true);
magaMenu.append(mainNav);

const barSocial = document.querySelector(".toolbar-social").cloneNode(true);
magaMenu.append(barSocial);

const barContact = document.querySelector(".toolbar-contact").cloneNode(true);
magaMenu.append(barContact);

const overLay = document.querySelector(".overlay");

navElement.addEventListener("click", function open(e) {
  magaMenu.style.right = "0";
  magaMenu.style.width = "320px";
  mainNav.style.display = "flex";
  overLay.style.display = "block";
  magaMenu.style.zIndex = "11111";
  magaMenu.style.transition = ".8s";
});

closeMenu.addEventListener("click", function close() {
  magaMenu.style.zIndex = "-1";
  magaMenu.style.right = "-320px";
  overLay.style.display = "none";
});

window.onclick = function (e) {
  if (e.target == overLay) {
    overLay.style.display = "none";
    magaMenu.style.zIndex = "-1";
    magaMenu.style.right = "-320px";
  }
};

//End MegaMenu
// Start dropdown services
const dropdownBtn = document.getElementById("button-services");
const dropdownMenu = document.getElementById("dropdown-services");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};
if (!!dropdownBtn) {
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });
}

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});
// End dropdown services
// Start sticky Header
window.addEventListener("scroll", function () {
  let headerElement = document.querySelector(".sticky-header");

  if (document.documentElement.scrollTop > 800) {
    headerElement.classList.add("sticky");
    document.body.style.marginTop = "125px";
  } else {
    headerElement.classList.remove("sticky");
    document.body.style.marginTop = "0";
  }
});

// End sticky Header
// Start Effect Write
let i = 0;
let txt =
  "Dr. Mahmoud Alkholany is a Consultant in Pain Medicine and Anaesthesia based in the UK working between the NHS at Liverpool University Hospitals and the independent sector in Manchester and Liverpool.";
let speed = 50;
let test = document.querySelector(".home-header-image-wrapper figure");
function typeWriter() {
  if (!!document.getElementById("type-1")) {
    if (i < txt.length) {
      document.getElementById("type-1").innerHTML += txt.charAt(i);
      i++;
      test.style.top = i;
      setTimeout(typeWriter, speed);
    }
  }
}
typeWriter();
// End Effect Write

// Start Slider
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("swiper-slide");
  let bullets = document.querySelectorAll(".testimonial-bullet-swipper");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active-bullets", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  bullets[slideIndex - 1].className += " active-bullets";
}
// End Slider
// Start home faq
let cordians = document.querySelectorAll(".faq-card-title");
let faqCards = document.querySelectorAll(".faq-card");
for (let i = 0; i < faqCards.length; i++) {
  faqCards[i].addEventListener("click", function name(params) {
    cordians[i].classList.toggle("rotate-after-faq-card-title");
  });
}
// End home faq
// Start footerLink footer
let footerQuickLinks = document.querySelector(".footer-quick-links h2");
let footerServices = document.querySelector(".footer-services h2");
let listHidden = document.querySelectorAll(".list-hidden");

footerQuickLinks.onclick = function () {
  listHidden[0].classList.toggle("show-list");
};
footerServices.onclick = function () {
  listHidden[1].classList.toggle("show-list");
};

// End footerLink footer
