/* eslint-disable unicorn/prefer-number-properties */

/* eslint-disable radix */
(function () {
  /* toggle nav */

  const el = document.querySelector(".nav-toggle");
  const navs = document.querySelectorAll(".nav-item");
  el.addEventListener("click", _e => {
    navs.forEach(nav => nav.classList.toggle("collapse"));
  });
  /* scroll navigation */

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 150;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  });
  /* slider */

  const slider = document.querySelector(".slider");
  const innerSlider = document.querySelector(".slider-inner");
  let pressed = false;
  let startx;
  let x;
  slider.addEventListener("mousedown", e => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });
  slider.addEventListener("mouseenter", _e => {
    slider.style.cursor = "grab";
  });
  slider.addEventListener("mouseup", _e => {
    slider.style.cursor = "grab";
  });
  window.addEventListener("mouseup", _e => {
    pressed = false;
  });
  slider.addEventListener("mousemove", e => {
    if (!pressed) {
      return;
    }

    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startx}px`;
    checkBoundary();
  });

  function checkBoundary() {
    const outer = slider.getBoundingClientRect();
    const inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
})();
//# sourceMappingURL=main.bundle.js.map
