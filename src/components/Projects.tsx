import ProjectLink from "./ProjectLink";

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
          src="src\images\Screenshot_20230625_163557_Chrome.jpg"
          title="number guess game project"
        />
        <ProjectLink
          altText="image of my love calculator  project"
          link="http://successfullovecalculator.netlify.app"
          src="src\images\Screenshot_20230625_163638_Chrome.jpg"
          title="love calculator  project"
        />
        <ProjectLink
          altText="image of my todo list project"
          link="http://successfultodolist.netlify.app"
          src="src\images\Screenshot_20230625_163650_Chrome.jpg"
          title="todo list project"
        />
        <ProjectLink
          altText="image of my weather forecast project"
          link="http://successfulweatherforecast.netlify.app"
          src="src\images\Screenshot_20230625_163706_Chrome.jpg"
          title="weather forecast project"
        />
        <ProjectLink
          altText="image of my currency conversion project"
          link="http://successfulcurrencyconversioncalculato.netlify.app"
          src="src\images\Screenshot_20230625_163813_Chrome.jpg"
          title="currency conversion project"
        />
        <ProjectLink
          altText="image of my random password generator project"
          link="http://successfulrandompasswordgenerator.netlify.app"
          src="src\images\Screenshot_20230625_163831_Chrome.jpg"
          title="random password generator project"
        />
        <ProjectLink
          altText="image of my tic tac toe project"
          link="http://successfultictactoe.netlify.app"
          src="src\images\Screenshot_20230625_163849_Chrome.jpg"
          title="tic tac toe project"
        />
      </div>
    </section>
  );
}

export default Projects;
