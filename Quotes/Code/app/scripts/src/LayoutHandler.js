class LayoutHandler {
  constructor() {
    this.init();
    this.handleDOM();
    this.handleEvents();
  }

  /**
   * Declare global variables
   */
  init() {
    this.openMenu = $("#openMenu");
    this.closeMenu = $(".close-menu");
  }

  /**
   * Handle DOM queries
   */
  handleDOM() {
    this.openMenu.on("click", function () {
      document.querySelector("#headerMenu").classList.remove("hidden");
    });

    this.closeMenu.on("click", function () {
      document.querySelector("#headerMenu").classList.add("hidden");
    });

    const introSwiper = new Swiper(".intro .swiper", {
      spaceBetween: 45,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    const testimonialsSwiper = new Swiper(".testimonials .swiper", {
      spaceBetween: 45,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  /**
   * Listen for events
   */
  handleEvents() {}
}
