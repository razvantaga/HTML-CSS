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
  }
}
