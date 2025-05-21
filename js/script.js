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
  


  
  