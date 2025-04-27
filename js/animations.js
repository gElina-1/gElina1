// Инициализация частиц для фона с улучшенными параметрами
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#4e7bff", "#08fdd8", "#ff5e5e"] // Добавим несколько цветов
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true, // Добавим случайную прозрачность
        "anim": {
          "enable": true, // Включим анимацию прозрачности
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true, // Включим анимацию размера
          "speed": 2,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#4e7bff",
        "opacity": 0.3, // Увеличим прозрачность линий
        "width": 1.5 // Увеличим толщину линий
      },
      "move": {
        "enable": true,
        "speed": 1.5, // Уменьшим скорость для плавности
        "direction": "none",
        "random": true, // Добавим случайность движения
        "straight": false,
        "out_mode": "bounce", // Частицы будут "отскакивать" от краев
        "bounce": true,
        "attract": {
          "enable": true, // Включим притяжение частиц
          "rotateX": 800,
          "rotateY": 800
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" // Частицы будут притягиваться к курсору
        },
        "onclick": {
          "enable": true,
          "mode": "push" // При клике частицы будут разлетаться
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200, // Увеличим радиус притяжения
          "line_linked": {
            "opacity": 0.8 // Увеличим видимость линий при наведении
          }
        },
        "push": {
          "particles_nb": 10 // Количество частиц при клике
        }
      }
    },
    "retina_detect": true
  });