let footerQuickLinks = $(".footer-quick-links h2");
let footerServices = $(".footer-services h2");
let listHiddenServices = $(".list-our-services");
let listHiddenLinks = $(".list-quick-links");

$(document).ready(function () {
  $(footerQuickLinks).click(function () {
    $(listHiddenLinks).toggle(2000);
  });
  $(footerServices).click(function () {
    $(listHiddenServices).toggle(2000);
  });
});
