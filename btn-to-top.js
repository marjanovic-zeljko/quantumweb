var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // Koristi smooth scroll
  if (window.scrollTo) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    // Fallback za starije pretraživače
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}