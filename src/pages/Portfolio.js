import React from "react";
import PortfolioItem from "../components/PortfolioItem"
import Project1 from "../pictures/home.jpg";
import Project2 from "../pictures/weather.png";
import Project3 from "../pictures/planner.png";
import Project4 from "../pictures/burger.png";
import Project6 from "../pictures/archer.jpg";

function Portfolio() {

    return (
        <div className="container">
            {projects.map((project,index) =>{
                return (
                    <PortfolioItem key={index} src = {project.image} title={project.name} git={project.repo} live={project.live} />
                );
            })}
        </div>
    )
}




const projects = [
    {
        name: "Rick and Morty site",
        repo: "https://github.com/rforde1/Rick-and-Morty",
        live: "https://rforde1.github.io/Rick-and-Morty/",
        image: Project1
    },
    {
        name: "City Weather App",
        repo: "https://github.com/GReichman/weather-dashboard",
        live: "https://greichman.github.io/weather-dashboard/",
        image: Project2
    },
    {
        name: "Day Planner",
        repo: "https://github.com/GReichman/day-planner",
        live: "https://greichman.github.io/day-planner/",
        image: Project3
    },
    {
        name: "Burger Eater",
        repo: "https://github.com/GReichman/burger-eater",
        live: "https://frozen-island-56616.herokuapp.com/",
        image: Project4
    },
    {
        name: "Note Taker",
        repo: "https://github.com/GReichman/note-taker",
        live:"https://stormy-wave-49425.herokuapp.com/",
        image: "https://github.com/GReichman/note-taker/raw/master/public/assets/pictures/home.png"
    },
    {
        name: "Archer Forums",
        repo:"https://github.com/rforde1/project-2",
        live:"https://fast-bayou-13599.herokuapp.com/",
        image: Project6
    }
];

export default Portfolio;