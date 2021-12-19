window.addEventListener("DOMContentLoaded", () => {
  const call = document.querySelector(".call"),
    wrapper = document.querySelector(".portfolio__body");

  function callDisplay() {
    call.style.right = "30px";
  }

  setTimeout(callDisplay, 5000);

  const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getResource("../db.json").then((res) => createCards(res));

  function createCards(response) {
    response.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("portfolio__item");
      card.innerHTML = `
            <div class="portfolio__item" style="background-image: url(${item.bg});">
                <div class="item__overlay-top">
                  <a href=${item.github}>Github Pages</a>
                </div>
                <div class="item__overlay-bottom">
                  <a href=${item.source}>Source code</a>
                </div>
              </div>
      `;
      wrapper.appendChild(card);
    });
  }

  function callByScroll() {
    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        call.style.right = "-300px";
      } else {
        call.style.right = "30px";
      }
    });
  }
  callByScroll();
  // ===============================================================

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
});
