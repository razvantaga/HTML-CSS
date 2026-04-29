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
    this.openMenu = $("#openMenu");
    this.closeMenu = $("#closeMenu");
    this.navbar = $("#navbar");
    this.toggleMenu = $("#toggleMenu");

    // Selectăm counters
    this.counters = document.querySelectorAll(".counter__item h4");

    // custom scroll
    this.openParagraphs = document.querySelectorAll(".openParagraph");
    this.paragraphs = document.querySelectorAll(".paragraph");
  }

  /**
   * Listen for events
   */
  handleEvents() {
    this.openMenu.on("click", () => {
      this.toggleMenu.addClass("active");
      this.navbar.addClass("active");
    });

    this.closeMenu.on("click", () => {
      this.toggleMenu.removeClass("active");
      this.navbar.removeClass("active");
    });

    const introSwiper = new Swiper(".intro .swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    const ctaSwiper = new Swiper(".cta .swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
    });

    // Pornim animația pentru counters
    this.initCounters();

    // custom scroll
    this.openParagraphs.forEach((icon) => {
      icon.addEventListener("click", () => {
        // scoatem active de la toate paragrafele
        this.paragraphs.forEach((p) => p.classList.remove("active"));
        // adăugăm active DOAR la paragraful frate al iconului apăsat
        const paragraph = icon
          .closest(".inner__content--item")
          .querySelector(".paragraph");
        paragraph.classList.add("active");
      });
    });
  }

  /**
   * Counter animation
   */
  initCounters() {
    const animateCounter = (el) => {
      const target = +el.textContent;
      let count = 0;
      const increment = Math.ceil(target / 100);

      const update = () => {
        count += increment;
        if (count > target) count = target;
        el.textContent = count;
        if (count < target) {
          requestAnimationFrame(update);
        }
      };
      el.textContent = 0;
      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.counters.forEach((counter) => {
      observer.observe(counter);
    });
  }
}
