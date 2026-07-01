let lastScrollTop = 0;
window.onscroll = () => {
  const navebar = document.getElementById("navebar");
  const scrollTop =
    document.documentElement.scrollTop 

  if (scrollTop < lastScrollTop) {
    navebar.classList.remove("navbar-hidden");
    navebar.classList.add("navbar-visible");
  } else {
    navebar.classList.remove("navbar-visible");
    navebar.classList.add("navbar-hidden");
  }
  lastScrollTop = scrollTop;
};
