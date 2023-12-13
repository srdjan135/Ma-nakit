let images = document.querySelectorAll(" .col-md-4 .images");
let overlay = document.querySelector(" .dark-overlay");
let btnClose = document.querySelector(" .dark-overlay button");
let FocusImages = document.querySelector(" .dark-overlay .focusImages");
let FcImage = document.querySelector(" .dark-overlay .focusImages #slika11");
let FcImage2 = document.querySelector(" .dark-overlay .focusImages #slika22");
let FcImage3 = document.querySelector(" .dark-overlay .focusImages #slika33");

images.forEach((e) => {
  e.addEventListener("click", () => {
    overlay.classList.add("active");
    FocusImages.classList.add("active");
    if (e.id === "slika1") {
      FcImage.classList.add("active");
    }
    if (e.id === "slika2") {
      FcImage2.classList.add("active");
    }
    if (e.id === "slika3") {
      FcImage3.classList.add("active");
    }
  });
});

btnClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  FcImage.classList.remove("active");
  FcImage2.classList.remove("active");
  FcImage3.classList.remove("active");
  FocusImages.classList.remove("active");
});
