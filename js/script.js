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
      const moreBtn = item.querySelector('.more'); // кнопка внутри item
  
      item.addEventListener('mouseenter', () => {
        items.forEach(el => {
          if (el !== item) {
            el.classList.add('opacity');
          } else {
            el.classList.add('zoom-img');
            if (moreBtn) {
              moreBtn.classList.add('active'); // добавляем класс
            }
          }
        });
      });
  
      item.addEventListener('mouseleave', () => {
        items.forEach(el => {
          el.classList.remove('opacity', 'zoom-img');
          const btn = el.querySelector('.more');
          if (btn) {
            btn.classList.remove('active'); // убираем класс
          }
        });
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marquee");
  
    // Если элемента нет — выходим, ничего не делаем
    if (!marquee) return;
  
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
  
    // Задержка старта (200мс)
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

const grayStar = 'img/star-gray.svg';
const greenStar = 'img/star-gray2.svg';

document.querySelectorAll('.star-rating').forEach(ratingBlock => {
  const stars = ratingBlock.querySelectorAll('.star');
  let currentRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      currentRating = index + 1;

      stars.forEach((s, i) => {
        s.src = i < currentRating ? greenStar : grayStar;
      });

      // если нужно — можно сохранить рейтинг:
      ratingBlock.dataset.rating = currentRating;
    });
  });
});
  


/* Анимация заливки кнопок */
const btn_circle = document.querySelectorAll('.btn-custom');
if (btn_circle.length > 0) {
    btn_circle.forEach(item => {
        let bg = item.querySelector('.btn-custom__bg');

        item.addEventListener('mouseenter', (e) => {
            btn_circle_func(item, e);

            if (bg) {
                bg.classList.remove('desplode-circle');
                bg.classList.add('explode-circle');
            }
        });

        item.addEventListener('mouseleave', (e) => {
            btn_circle_func(item, e);

            if (bg) {
                bg.classList.add('desplode-circle');
                bg.classList.remove('explode-circle');
            }
        });
    });

    function btn_circle_func(item, e) {
        let parentOffset = 0,
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top,
            bg = item.querySelector('.btn-custom__bg');

        if (bg) {
            bg.style.left = relX + 'px';
            bg.style.top = relY + 'px';
        }
    }
}

/* Магнитные кнопки */
const magnets = document.querySelectorAll('[data-magnetic]');

if (magnets.length > 0 && window.innerWidth > 1025) {
    const magnetStrength = 80;           // Мощность магнита для блока
    const magnetTextStrength = 40;       // Мощность магнита для текста
    const animationDuration = 0.4;       // Быстрее: 0.4 секунды
    const leaveDuration = 0.6;           // Анимация возврата
    const easeIn = "power3.out";         // Плавный, но быстрый easing
    const easeOut = "back.out(1.7)";     // Возврат с небольшим bounce

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (event) => {
            const rect = magnet.getBoundingClientRect();
            const relX = ((event.clientX - rect.left) / magnet.offsetWidth - 0.5);
            const relY = ((event.clientY - rect.top) / magnet.offsetHeight - 0.5);

            gsap.to(magnet, {
                duration: animationDuration,
                x: relX * magnetStrength,
                y: relY * magnetStrength,
                rotate: 0.001,
                ease: easeIn,
            });

            const text = magnet.querySelector('[data-magnetic-text]');
            if (text) {
                gsap.to(text, {
                    duration: animationDuration,
                    x: relX * magnetTextStrength,
                    y: relY * magnetTextStrength,
                    rotate: 0.001,
                    ease: easeIn,
                });
            }
        });

        magnet.addEventListener('mouseleave', (event) => {
            gsap.to(event.currentTarget, {
                duration: leaveDuration,
                x: 0,
                y: 0,
                ease: easeOut,
            });

            const text = magnet.querySelector('[data-magnetic-text]');
            if (text) {
                gsap.to(text, {
                    duration: leaveDuration,
                    x: 0,
                    y: 0,
                    ease: easeOut,
                });
            }
        });
    });
}




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
  x: isMobile ? -10 : -150, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(".move-right", {
  x: isMobile ? 40 : 150, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(".move-left-slow", {
  x: isMobile ? -30 : -180, // меньше на мобилках
  ease: "none",
  scrollTrigger: {
    trigger: ".home-top-info",
    start: "top center",
    end: "bottom top",
    scrub: 2,
  },
});


const btn = document.querySelector('.discuss-btn');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let rafId;

const animate = () => {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  btn.style.transform = `translate(${currentX}px, ${currentY}px)`;
  rafId = requestAnimationFrame(animate);
};

btn.addEventListener('mouseenter', () => {
  cancelAnimationFrame(rafId);
  animate();
});

btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  targetX = x * 0.1;
  targetY = y * 0.1;
});

btn.addEventListener('mouseleave', () => {
  targetX = 0;
  targetY = 0;
  cancelAnimationFrame(rafId);
  animate();
});

const swiper = new Swiper('.techSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: "20px", // Убираем отступы между слайдами
  navigation: {
    nextEl: '.slider-btn.next',
    prevEl: '.slider-btn.prev',
  },
});

document.querySelector('.theme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

document.querySelectorAll('.theme-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.querySelector('.circle').classList.toggle('translate');
  });
});









  
  