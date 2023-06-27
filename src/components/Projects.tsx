import ProjectLink from "./ProjectLink";
import project1 from "../images/Screenshot_20230625_163557_Chrome.jpg";
import project2 from "../images/Screenshot_20230625_163638_Chrome.jpg";
import project3 from "../images/Screenshot_20230625_163650_Chrome.jpg";
import project4 from "../images/Screenshot_20230625_163706_Chrome.jpg";
import project5 from "../images/Screenshot_20230625_163813_Chrome.jpg";
import project6 from "../images/Screenshot_20230625_163831_Chrome.jpg";
import project7 from "../images/Screenshot_20230625_163849_Chrome.jpg";

function Projects() {
  return (
    <section className="lg:px-20 p-4" id="projects">
      <h2 className="font-bold text-green-700 text-xl">Projects</h2>
      <p className="font-bold my-4 text-center text-4xl">
        These are some of my projects
      </p>
      <div className="gap-4 grid grid-cols-2 lg:grid-cols-4">
        <ProjectLink
          altText="image of my number guess game project"
          link="http://successfulnumberguessgame.netlify.app"
          src={project1}
          title="number guess game project"
        />
        <ProjectLink
          altText="image of my love calculator  project"
          link="http://successfullovecalculator.netlify.app"
          src={project2}
          title="love calculator  project"
        />
        <ProjectLink
          altText="image of my todo list project"
          link="http://successfultodolist.netlify.app"
          src={project3}
          title="todo list project"
        />
        <ProjectLink
          altText="image of my weather forecast project"
          link="http://successfulweatherforecast.netlify.app"
          src={project4}
          title="weather forecast project"
        />
        <ProjectLink
          altText="image of my currency conversion project"
          link="http://successfulcurrencyconversioncalculato.netlify.app"
          src={project5}
          title="currency conversion project"
        />
        <ProjectLink
          altText="image of my random password generator project"
          link="http://successfulrandompasswordgenerator.netlify.app"
          src={project6}
          title="random password generator project"
        />
        <ProjectLink
          altText="image of my tic tac toe project"
          link="http://successfultictactoe.netlify.app"
          src={project7}
          title="tic tac toe project"
        />
      </div>
    </section>
  );
}

export default Projects;
