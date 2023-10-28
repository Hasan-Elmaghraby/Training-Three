// Start MegaMenu
const navElement = document.querySelector(".nav-box");

const magaMenu = document.createElement("div");
document.body.append(magaMenu);
magaMenu.classList.add("mega-menu");
magaMenu.style.opacity = "0";
magaMenu.style.width = "0";

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
  magaMenu.style.opacity = "1";
  magaMenu.style.width = "320px";
  mainNav.style.display = "flex";
  overLay.style.display = "block";
  magaMenu.style.zIndex = "11111";
  magaMenu.style.transition = ".5s";
});

closeMenu.addEventListener("click", function close() {
  magaMenu.style.opacity = "0";
  magaMenu.style.zIndex = "-1";
  magaMenu.style.width = "0";
  overLay.style.display = "none";
});

window.onclick = function (e) {
  if (e.target == overLay) {
    overLay.style.display = "none";
    magaMenu.style.opacity = "0";
    magaMenu.style.zIndex = "-1";
    magaMenu.style.width = "0";
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
var i = 0;
var txt =
  "Dr. Mahmoud Alkholany is a Consultant in Pain Medicine and Anaesthesia based in the UK working between the NHS at Liverpool University Hospitals and the independent sector in Manchester and Liverpool.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
// End Effect Write
