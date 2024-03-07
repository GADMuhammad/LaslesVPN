const navs = document.querySelectorAll(".btn__javascript");

const changingOpacity = function (motion, opacity = 1) {
  navs.forEach((nav) => {
    nav.addEventListener(motion, function (e) {
      if (e.target.classList.contains("btn__javascript")) {
        const link = e.target;

        const siblings = link
          .closest(".header")
          .querySelectorAll(".linksContent__link");

        const bars = link.closest(".header").querySelector(".burger-menu");

        const logo = link
          .closest(".header")
          .querySelector(".logoContent__image");

        const signButton1 = link
          .closest(".header")
          .querySelector(".signContent__signInButton");

        const signButton2 = link
          .closest(".header")
          .querySelector(".signContent__signUpButton");

        // ---------------------

        siblings.forEach((element) => {
          if (element !== link) element.style.opacity = opacity;
        });

        if (bars !== link) bars.style.opacity = opacity;

        if (logo !== link) logo.style.opacity = opacity;
        if (signButton1 !== link) signButton1.style.opacity = opacity;
        if (signButton2 !== link) signButton2.style.opacity = opacity;
      }
    });
  });
};

changingOpacity("mouseover", 0.5);
changingOpacity("mouseout", 1);

const slides = document.querySelectorAll(".opinions-section__opinions");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * index})%`;
});
