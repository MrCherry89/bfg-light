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

    document.addEventListener('DOMContentLoaded', () => {
      const marquee = document.getElementById("marquee");
    
      if (!marquee) return; // ✅ теперь return внутри функции
    
      let offset = 0;
    
      const startMarquee = () => {
        setInterval(() => {
          offset -= 1;
          marquee.style.transform = `translateX(${offset}px)`;
    
          if (Math.abs(offset) >= marquee.scrollWidth / 2) {
            offset = 0;
          }
        }, 16);
      };
    
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


document.querySelectorAll('.cost-website .items .item').forEach(item => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 50%',
    toggleClass: { targets: item, className: 'active' },
    once: true
  });
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
    clone.style.transitionDelay = `${index * 20}ms`;

    wrap.appendChild(original);
    wrap.appendChild(clone);
    link.appendChild(wrap);
  });
});

const scrollBtn = document.querySelector('.top-scroll');

if (scrollBtn) {
  // Показ/скрытие кнопки при скролле
  window.addEventListener('scroll', function () {
    const scroll = window.scrollY;

    if (scroll >= 200) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  // Плавный скролл вниз на 100px при клике
  scrollBtn.addEventListener('click', function () {
    const start = window.scrollY;
    const target = start + 700;  // вниз на 100px
    const duration = 1000;
    const startTime = performance.now();

    function scrollDown(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      window.scrollTo(0, start + (target - start) * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(scrollDown);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollDown);
  });
}

$(".filter-button").on("click", function() {
  const $el = $(".links-item-wrap");
  if ($el.hasClass("open")) {
    $el.removeClass("open").addClass("closing");
    setTimeout(() => {
      $el.removeClass("closing");
    }, 500); // Время совпадает с длительностью анимации
  } else {
    $el.addClass("open");
  }
});


document.querySelectorAll('.fancy-link').forEach(link => {
  const text = link.dataset.text;
  link.innerHTML = `
    <span class="text-top">${text}</span>
    <span class="text-bottom">${text}</span>
  `;

  link.addEventListener('mouseenter', () => {
    link.classList.add('animate');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('animate');
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

if (btn) {
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

  btn.addEventListener('mouseleave', () => {
    cancelAnimationFrame(rafId);
    targetX = 0;
    targetY = 0;
  });

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    targetX = (e.clientX - rect.left - rect.width / 2) * 0.3;
    targetY = (e.clientY - rect.top - rect.height / 2) * 0.3;
  });
}



$(function() {
  // Инициализация ripples на элементе .home-banner
  $('.home-banner').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
    interactive: false // отключаем стандартные эффекты плагина
  });

  // Общая функция создания капли по координатам
  function createDrop($el, x, y) {
    $el.ripples('drop', x, y, 25, 0.06);
  }

  // Капли при движении мыши
  $('.home-banner').on('mousemove', function(e) {
    const $el = $(this);
    const offset = $el.offset();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    createDrop($el, x, y);
  });

  // Капли при клике
  $('.home-banner').on('click', function(e) {
    const $el = $(this);
    const offset = $el.offset();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    createDrop($el, x, y);
  });
});




$(function(){
  $('.top-radio-info').on('click touchstart', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings('.radio-style').toggleClass('open');
  });

  $(document).on('change', '.radio-style input[type="radio"]', function(){
    const label = $('label[for="'+ this.id +'"]').text().trim();
    $(this).closest('.radio-wrapper').find('.selected-text').text(label);
    $('.radio-style').removeClass('open');
  });

  $(document).on('click touchstart', function(e){
    if (!$(e.target).closest('.radio-wrapper').length) {
      $('.radio-style').removeClass('open');
    }
  });
});

$('[data-fancybox]').fancybox({
  // выведет стандартный крестик
  buttons: ["close"],
  smallBtn: true // или false если нужно только стандартный крестик
});

// Кнопка внутри попапа закрывает окно
$(document).on('click', '#popup-close-btn', function() {
  $.fancybox.close();
});


// btn.addEventListener('mousemove', (e) => {
//   const rect = btn.getBoundingClientRect();
//   const x = e.clientX - rect.left - rect.width / 2;
//   const y = e.clientY - rect.top - rect.height / 2;

//   targetX = x * 0.1;
//   targetY = y * 0.1;
// });

// btn.addEventListener('mouseleave', () => {
//   targetX = 0;
//   targetY = 0;
//   cancelAnimationFrame(rafId);
//   animate();
// });

const swiper = new Swiper('.techSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: "20px", // Убираем отступы между слайдами
  navigation: {
    nextEl: '.slider-btn.next',
    prevEl: '.slider-btn.prev',
  },
});

const swiper11 = new Swiper('.videoSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: "40px", 
  navigation: {
    nextEl: '.promo-video .slider-btn.next',
    prevEl: '.promo-video .slider-btn.prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 'auto', // включается scroll
    },
    0: {
      spaceBetween: "10px", 
    }
  }
});



const swiper5 = new Swiper('.teamSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: "20px", // Убираем отступы между слайдами
  navigation: {
    nextEl: '.about-wrap .slider-btn.next',
    prevEl: '.about-wrap .slider-btn.prev',
  },
});

const swiper6 = new Swiper('.recommendationsSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.recommendations .slider-btn.next',
    prevEl: '.recommendations .slider-btn.prev',
  },
});

const swiper16 = new Swiper('.clientsSwiper', {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 10,
});

const swiper7 = new Swiper('.certificatesSwiper', {
  speed: 1000,
  slidesPerView: 4, // по умолчанию — 4 слайда
  spaceBetween: 20,
  navigation: {
    nextEl: '.recommendations .slider-btn.next',
    prevEl: '.recommendations .slider-btn.prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 'auto', // включается scroll
    },
    0: {
      slidesPerView: 'auto', // на самых маленьких
    }
  }
});

document.querySelector('.theme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

document.querySelectorAll('.theme-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.querySelector('.circle').classList.toggle('translate');
  });
});

gsap.to(".sites h2", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sites h2",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// ✨ Анимация .sites-item по очереди
gsap.utils.toArray(".sites-item").forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.2,
    scrollTrigger: {
      trigger: ".sites-items",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

gsap.to(".case-name-wrap h2", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".case-name-wrap",
    start: "top center+=200",  // <--- вот тут задержка
    toggleActions: "play none none none"
  }
});

// Внутренние элементы по очереди
gsap.utils.toArray(".case-name-wrap .texts > *").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.2,
    scrollTrigger: {
      trigger: ".case-name-wrap",
      start: "top center+=200",  // <--- задержка здесь тоже
      toggleActions: "play none none none"
    }
  });
});

gsap.utils.toArray(".case-name-wrap .style-text").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: i * 0.2, // плавное поочередное появление
    scrollTrigger: {
      trigger: el,
      start: "top 90%", // появляется, когда почти входит в экран
      toggleActions: "play none none none"
    }
  });
});

gsap.to(".video-info h1", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".video-info h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".services-wrap h1", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".services-wrap h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".prices-info h1", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".prices-info h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".prices-info p", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2.5,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.fromTo(".home-banner h1",
  {
    opacity: 0,
    y: 100  // стартовая позиция — 100px ниже
  },
  {
    opacity: 1,
    y: 0,   // финальная позиция — на месте
    duration: 3,
    delay: 1,
    ease: "power3.out"
  }
);
gsap.fromTo(".home-banner h4",
  {
    opacity: 0,
    y: 100  // стартовая позиция — 100px ниже
  },
  {
    opacity: 1,
    y: 0,   // финальная позиция — на месте
    duration: 3,
    delay: 1.5,
    ease: "power3.out"
  }
);
gsap.fromTo(".home-banner .texts",
  {
    opacity: 0,
    x: 100  // стартовая позиция — 100px ниже
  },
  {
    opacity: 1,
    x: 0,   // финальная позиция — на месте
    duration: 3,
    delay: 1.7,
    ease: "power3.out"
  }
);
gsap.to(".contacts h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".top-info > a", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".top-info .links", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2.5,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".text-information .title-style", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".text-information .image", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power4.out"  // можно изменить на любую другую
});

gsap.to(".cases-wrap h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".blog-wrap h2", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".blog-wrap .title-wrap-style", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});
gsap.to(".cases-wrap .filter-button", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".about-wrap h1", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 1,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.to(".about-wrap .title-style", {
  opacity: 1,
  duration: 3,     // сколько длится сама анимация
  delay: 2,        // задержка перед началом
  ease: "power3.out"  // можно изменить на любую другую
});

gsap.utils.toArray(".blog-item").forEach((item, i) => {
  gsap.fromTo(item,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1, // плавная последовательность
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );
});
gsap.utils.toArray(".services-wrap .services-item").forEach((item, i) => {
  gsap.fromTo(item,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1, // плавная последовательность
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );
});

gsap.to(".seo-block .title-style", {
  opacity: 1,
  delay: 1,
  duration: 1, // 1 секунда
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".seo-block",
    start: "top 80%", // когда блок входит в экран
    toggleActions: "play none none none"
  }
});

gsap.fromTo(".about-information",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    ease: "none", // скролл-связанная анимация — без инерции
    scrollTrigger: {
      trigger: ".about-information",
      start: "top bottom",      // когда блок заходит в низ экрана
      end: "top center",        // когда доходит до середины
      scrub: true,              // << ВАЖНО!
      // markers: true,         // включи, если хочешь увидеть границы
    }
  }
);

gsap.fromTo(".recommendations .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".recommendations .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".large-clients .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".large-clients .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".information-wrap .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".information-wrap .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".video-rolik .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".video-rolik .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".promo-video .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".promo-video .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".certificates .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".certificates .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".our-cases .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".our-cases .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".technologies .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".technologies .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".cost-website .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".cost-website .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);
gsap.fromTo(".asked-questions .title-wrap",
  { opacity: 0, scale: 0.8 }, // начальное состояние — уменьшенный и прозрачный
  {
    opacity: 1,
    scale: 1,                  // возвращаем к нормальному размеру
    ease: "none",
    scrollTrigger: {
      trigger: ".asked-questions .title-wrap",
      start: "top bottom",     // когда верх элемента заходит в нижнюю часть окна
      end: "top center",       // и доходит до центра
      scrub: true
      // markers: true
    }
  }
);

gsap.to(".information-block .title-style", {
  opacity: 1,
  y: 0,
  delay: 1,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".information-block",
    start: "top 80%", // когда блок входит в зону видимости
    toggleActions: "play none none none",
    // markers: true, // можешь включить для отладки
  }
});

gsap.fromTo(".partners-bank .title-style2",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".partners-bank",
      start: "top bottom",
      end: "top center",
      scrub: true
    }
  }
);

// Логотип справа (fade + справа налево)
gsap.fromTo(".partners-bank img",
  { opacity: 0, x: 50 },
  {
    opacity: 1,
    x: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".partners-bank",
      start: "top bottom",
      end: "top center",
      scrub: true
    }
  }
);

// Тексты по очереди (fade-in, плавно с прокруткой)
gsap.utils.toArray(".partners-bank p").forEach((p, i) => {
  gsap.fromTo(p,
    { opacity: 0 },
    {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: p,
        start: "top 90%",
        end: "top 60%",
        scrub: true
      }
    }
  );
});

// Кнопка (fade-in снизу с прокруткой)
gsap.fromTo(".partners-bank .button-hover",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".partners-bank .button-hover",
      start: "top 95%",
      end: "top 70%",
      scrub: true
    }
  }
);


gsap.utils.toArray('.cases-wrap .case-item').forEach((item) => {
  gsap.fromTo(item,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",    // раньше появится
        end: "bottom 10%",   // позже исчезнет
        toggleActions: "play reverse play reverse",
        // markers: true, // можно включить для отладки
      }
    }
  );
});







  
  