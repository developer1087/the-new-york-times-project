document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".top-nav");
  const navbarHeight = 200;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});