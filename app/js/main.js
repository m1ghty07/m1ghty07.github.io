window.addEventListener("DOMContentLoaded", () => {
  const call = document.querySelector(".call"),
    wrapper = document.querySelector(".portfolio__body");

  function callDisplay() {
    call.style.right = "30px";
  }

  setInterval(callDisplay, 5000);

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

  //  <div
  //    class="portfolio__item"
  //    style="background-image: url('./img/projects/oku.jpg');"
  //  >
  //    <div class="item__overlay-top">
  //      <a href="">Github Pages</a>
  //    </div>
  //    <div class="item__title">
  //      <span>Title</span>
  //    </div>
  //    <div class="item__overlay-bottom">
  //      <a href="">Source code</a>
  //    </div>
  //  </div>;
});
