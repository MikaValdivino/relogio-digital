// Elementos do relógio
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Elementos para efeito de flip
const flipClass = "animate-flip";

// Elemento de áudio
const tickSound = new Audio("sounds/Sofa - Dyalla.mp3");
tickSound.preload = "auto";
tickSound.volume = 0.5; // Ajuste o volume se necessário

// Função para adicionar zero à esquerda
function fixTime(time) {
  return time < 10 ? "0" + time : time;
}

// Função para atualizar o tempo com efeito de flip
function updateElement(element, newValue) {
  if (element.textContent !== newValue) {
    element.classList.add(flipClass);
    setTimeout(() => {
      element.textContent = newValue;
      element.classList.remove(flipClass);
    }, 500); // Duração da animação
  }
}

// Função para atualizar o tempo
function newTime() {
  const date = new Date();
  const hours = fixTime(date.getHours());
  const minutes = fixTime(date.getMinutes());
  const seconds = fixTime(date.getSeconds());

  updateElement(hoursElement, hours);
  updateElement(minutesElement, minutes);
  updateElement(secondsElement, seconds);

  // Só toca o som de "tick" se o segundo mudar, e não reinicia o áudio
  if (tickSound.paused) {
    tickSound.play().catch((error) => {
      console.error("Erro ao reproduzir o som do tick:", error);
    });
  }
}

// Inicializar o tempo
newTime();
setInterval(newTime, 1000);

// Inicializar as partículas
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
