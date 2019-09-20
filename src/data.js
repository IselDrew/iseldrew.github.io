import uniqid from "uniqid"

import snakeImg from "./images/SnakeImage.png"
import todoImg from "./images/TodoImage.png"
import websiteImg from "./images/WebsiteImage.png"

export const projects = [
  {
    id: uniqid(),
    img:
      // "https://www.rajeevmasand.com/admin/wp-content/uploads/2014/06/test1-300x300.jpg",
      snakeImg,
    name: "Retro Snake Game",
    githubLink: "",
    checkLink: "",
    year: "2018",
  },
  {
    id: uniqid(),
    img:
      // "https://www.rajeevmasand.com/admin/wp-content/uploads/2014/06/test1-300x300.jpg",
      todoImg,
    name: "Todo Application",
    githubLink: "",
    checkLink: "",
    year: "2019",
  },
  {
    id: uniqid(),
    img:
      // "https://www.rajeevmasand.com/admin/wp-content/uploads/2014/06/test1-300x300.jpg",
      websiteImg,
    name: "Website",
    githubLink: "",
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
