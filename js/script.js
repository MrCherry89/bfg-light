document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion-item');
  
      items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');
  
        // Если активен по умолчанию — раскрыть
        if (item.classList.contains('active')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
  
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
  
          // Закрыть все
          items.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-body').style.maxHeight = null;
          });
  
          // Открыть выбранный, если он был закрыт
          if (!isActive) {
            item.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        });
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.cases-item');
  
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        items.forEach(el => {
          if (el !== item) {
            el.classList.add('opacity');
          } else {
            el.classList.add('zoom-img');
          }
        });
      });
  
      item.addEventListener('mouseleave', () => {
        items.forEach(el => {
          el.classList.remove('opacity', 'zoom-img');
        });
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marquee");
    let offset = 0;

    const startMarquee = () => {
      setInterval(() => {
        offset -= 1;
        marquee.style.transform = `translateX(${offset}px)`;

        // Чтобы бесконечно крутилось — сбрасываем, если дошли до конца
        if (Math.abs(offset) >= marquee.scrollWidth / 2) {
          offset = 0;
        }
      }, 16); // примерно 60 FPS
    };

    // Задержка старта (2000 мс = 2 секунды)
    setTimeout(startMarquee, 200);
  });

  const dropMenu = document.querySelector(".drop-menu");
  const headerMenuWrap = document.querySelector(".menu-wrap");
  const body = document.body;
  const html = document.documentElement;

  if (dropMenu && headerMenuWrap) {
    dropMenu.addEventListener("click", function () {
      this.classList.toggle("is-active");
      headerMenuWrap.classList.toggle("open");
      body.classList.toggle("overflow");
      html.classList.toggle("overflow");
    });
  }

  document.querySelectorAll('.button_su_inner').forEach(button => {
    button.addEventListener('mouseenter', function (e) {
        const parentOffset = this.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;

        const circle = this.previousElementSibling;
        if (circle && circle.classList.contains('button_circle')) {
            circle.style.left = `${relX}px`;
            circle.style.top = `${relY}px`;
            circle.classList.remove('desplode-circle');
            circle.classList.add('explode-circle');
        }
    });

    button.addEventListener('mouseleave', function (e) {
        const parentOffset = this.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;

        const circle = this.previousElementSibling;
        if (circle && circle.classList.contains('button_circle')) {
            circle.style.left = `${relX}px`;
            circle.style.top = `${relY}px`;
            circle.classList.remove('explode-circle');
            circle.classList.add('desplode-circle');
        }
    });
});
  
document.querySelectorAll('.discuss-btn').forEach(btn => {
  const effect = btn.querySelector('.hover-effect');
  if (!effect) return; // ⛔ Пропустить, если .hover-effect не найден

  const updateEffectPosition = e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    effect.style.left = `${x - 150}px`;
    effect.style.top = `${y - 150}px`;
  };

  btn.addEventListener('mouseenter', updateEffectPosition);
  btn.addEventListener('mousemove', updateEffectPosition);
});

document.querySelectorAll('.main-menu li a').forEach(link => {
  const text = link.textContent.trim();
  link.textContent = '';

  [...text].forEach((char, index) => {
    const wrap = document.createElement('span');
    wrap.className = 'letter-wrap';

    const original = document.createElement('span');
    original.className = 'letter original';
    original.textContent = char;

    const clone = document.createElement('span');
    clone.className = 'letter clone';
    clone.textContent = char;
    clone.style.transitionDelay = `${index * 50}ms`;

    wrap.appendChild(original);
    wrap.appendChild(clone);
    link.appendChild(wrap);
  });
});

const header = document.querySelector('.header');

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 1) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop;
});

gsap.registerPlugin(ScrollTrigger);

const isMobile = window.innerWidth < 768; // или другой breakpoint

gsap.to(".move-left", {
  x: isMobile ? -40 : -100, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(".move-right", {
  x: isMobile ? 40 : 100, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(".move-left-slow", {
  x: isMobile ? -30 : -80, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 2,
  },
});





  
  