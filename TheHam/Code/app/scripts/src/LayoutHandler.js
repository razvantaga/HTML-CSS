class LayoutHandler {
  constructor() {
    this.init();
    this.handleDOM();
    this.handleEvents();
  }

  init() {}

  handleDOM() {
    this.openMenu = $("#btnOpenMenu");
    this.closeMenu = $("#btnCloseMenu");
    this.navbar = $("#navbar");
    this.tabButtons = document.querySelectorAll(".tab-filter");
  }

  handleEvents() {
    // the menu
    this.openMenu.on("click", (e) => {
      e.preventDefault();
      this.navbar.addClass("active");
    });

    this.closeMenu.on("click", (e) => {
      e.preventDefault();
      this.navbar.removeClass("active");
    });

    // intro swiper
    const swiper = new Swiper(".intro .swiper", {
      loop: true,
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
    });

    this.tabFilter.forEach((button) => {
      button.addEventListener("click", () => {
        const parentSection = button.closest("section");

        const localButtons = parentSection.querySelectorAll(".tab-filter");
        const localTabs = parentSection.querySelectorAll(".tab");

        // eliminăm active de peste tot
        localButtons.forEach((btn) => btn.classList.remove("active"));
        localTabs.forEach((tab) => tab.classList.remove("active"));

        // activăm doar pe cel curent
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        const tab = parentSection.querySelector(`#${tabId}`);
        if (tab) tab.classList.add("active");
      });
    });
  }
}
