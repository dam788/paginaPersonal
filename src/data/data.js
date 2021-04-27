import pomodoro from "../assets/img/proyects/pomodoro.png";
import lyrics from "../assets/img/proyects/lyrics.png";
import sion from "../assets/img/proyects/sion.png";
import ahorcado from "../assets/img/proyects/ahorcado.png";
import delibery from "../assets/img/proyects/delibery.png";
import todo from "../assets/img/proyects/todo.png";
import payment from "../assets/img/proyects/payment.png";

export const proyects = [
  {
    title: "Pomodoro React",
    description:
      "Sencilla cuenta regresiva, pueden setearse los valores y parar cuando sea necesario.",
    photo: `${pomodoro}`,
    link1: "https://pomodoro-dam.netlify.app/",
    link2: "https://github.com/dam788/Pomodoro/tree/main/src",
    tecnology: ["React"],
  },
  {
    title: "Delibery Foods",
    description:
      "Interfaz de App de comidas rápidas construida en React Hooks y Redux. ",
    photo: `${delibery}`,
    link1: "https://delibery-app-dam.netlify.app/",
    link2: "https://github.com/dam788/deliberyApp",
    tecnology: ["React"],
  },
  {
    title: "React TodoList",
    description:
      "Sencilla App para agregar tareas, tachar y borrarlas, creada con React Redux. ",
    photo: `${todo}`,
    link1: "https://todo-list-dam.netlify.app/",
    link2: "https://github.com/dam788/reactTodoList",
    tecnology: ["React"],
  },
  {
    title: "Juego Ahorcado",
    description:
      "Ingresa una palabra para que la adivine alguien mas. Solo puede jugarse en PC, con teclado.",
    photo: `${ahorcado}`,
    link1: "https://ahorcado-juego-dam.netlify.app/",
    link2: "https://github.com/dam788/ahorcado",
    tecnology: ["Javascript"],
  },
  {
    title: "Página Web SION GRAFIX",
    description:
      "Una Página Web Porfolio de un cliente construida con HTML, CSS, Javascript, PHP y Bootstrap",
    photo: `${sion}`,
    link1: "https://sion-muestra.netlify.app/",
    link2: "https://github.com/dam788/paginaSION",
    tecnology: ["Maquetado"],
  },
  {
    title: "Data payment",
    description:
      "Maqueta de pasarela de pago, hecha en css grid y flexbos. No funcional.",
    photo: `${payment}`,
    link1: "https://ui-payment.netlify.app/",
    link2: "https://github.com/dam788/uiPayment",
    tecnology: ["Maquetado"],
  },
  {
    title: "Buscador de Letras",
    description:
      "Un buscador de letras de temas de artistas musicales, con una vista previa del tema.",
    photo: `${lyrics}`,
    link1: "https://music-find-lyrics-dam.netlify.app/",
    link2: "https://github.com/dam788/fetch-find-lyrics-morales",
    tecnology: ["Javascript"],
  },
];
