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

if (!!dropdownBtn) {
  dropdownBtn.addEventListener("mouseover", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.add("show");
  });
}

document.documentElement.addEventListener("mouseout", function () {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
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
// Start home faq
let cordians = document.querySelectorAll(".faq-card-title");
let faqCards = document.querySelectorAll(".faq-card");
for (let i = 0; i < faqCards.length; i++) {
  faqCards[i].addEventListener("click", function name() {
    cordians[i].classList.toggle("rotate-after-faq-card-title");
  });
}
// End home faq

//Start Slider
Fancybox.bind("[data-fancybox]", {});
// End Slider

// Start footer
let footerQuickLinks = $(".footer-quick-links h2");
let footerServices = $(".footer-services h2");
let listHiddenServices = $(".list-our-services");
let listHiddenLinks = $(".list-quick-links");

$(document).ready(function () {
  $(footerQuickLinks).click(function () {
    $(listHiddenLinks).slideToggle(1700);
    $(footerQuickLinks).toggleClass("footer-rotate");
  });
  $(footerServices).click(function () {
    $(listHiddenServices).slideToggle(1700);
    $(footerServices).toggleClass("footer-rotate");
  });
});

// End footer
