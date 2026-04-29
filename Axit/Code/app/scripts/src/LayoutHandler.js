class LayoutHandler {
  constructor() {
    this.init();
    this.handleDOM();
    this.handleEvents();
  }

  /**
   * Declare global variables
   */
  init() {}

  /**
   * Handle DOM queries
   */
  handleDOM() {
    this.toggleMenu = $("#toggleMenu");
    this.navMenu = $("#navMenu");
    this.closeMenu = $("#closeMenu");

    this.swiper = null;
  }

  /**
   * Listen for events
   */
  handleEvents() {
    this.toggleMenu.on("click", (e) => {
      e.preventDefault();
      this.navMenu.addClass("active");
    });

    this.closeMenu.on("click", (e) => {
      e.preventDefault();
      this.navMenu.removeClass("active");
    });

    this.swiper = new Swiper(".swiper", {
      spaceBetween: 16,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
}
