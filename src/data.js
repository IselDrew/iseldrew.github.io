import uniqid from "uniqid"

import snakeImg from "./images/SnakeImage.png"
import todoImg from "./images/TodoImage.png"
import websiteImg from "./images/WebsiteImage.png"

export const projects = [
  {
    id: uniqid(),
    img:
      snakeImg,
    name: "Retro Snake Game",
    githubLink: "https://github.com/IselDrew/Snake-js-canvas",
    checkLink: "",
    year: "2018",
  },
  {
    id: uniqid(),
    img:
      todoImg,
    name: "Todo Application",
    githubLink: "https://github.com/IselDrew/React-ToDo",
    checkLink: "",
    year: "2019",
  },
  {
    id: uniqid(),
    img:
      websiteImg,
    name: "Website",
    githubLink: "https://github.com/IselDrew/wix-template-website",
    checkLink: "",
    year: "2019",
  },
]

export const skills = [
  {
    id: uniqid(),
    name: "JavaScript",
    percent: "60%",
  },
  {
    id: uniqid(),
    name: "HTML",
    percent: "55%",
  },
  {
    id: uniqid(),
    name: "CSS",
    percent: "55%",
  },
  {
    id: uniqid(),
    name: "React.js",
    percent: "35%",
  },
  {
    id: uniqid(),
    name: "Node.js",
    percent: "10%",
  },
  {
    id: uniqid(),
    name: "Linux",
    percent: "50%",
  },
]

export const languages = [
  {
    id: uniqid(),
    name: "Russian",
    percent: "100%",
  },
  {
    id: uniqid(),
    name: "Ukrainian",
    percent: "100%",
  },
  {
    id: uniqid(),
    name: "English",
    percent: "70%",
  },
  {
    id: uniqid(),
    name: "Polish",
    percent: "65%",
  },
]

export const degrees = [
  {
    id: uniqid(),
    years: "2017 - Present",
    speciality: "Computer Science",
    university: 'National Technical University "Dnipro Politechnic", Ukraine',
  },
  {
    id: uniqid(),
    years: "2016 - 2017",
    speciality: "Applied Computer Science",
    university: "Jagiellonian University, Poland",
  },
]
