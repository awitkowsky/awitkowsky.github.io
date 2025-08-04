import ProjectsCard from "./ProjectsCard";

function Projects() {
  const projects = [
    {
      title: "AdopTails",
      imgSrc: "adoptails.png",
      link: "https://adoptails.maventplan.pl/",
    },
    {
      title: "Flirtini",
      imgSrc: "flirtini.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-3">
      {projects.map((project, i) => (
        <ProjectsCard
          key={i}
          title={project.title}
          imgSrc={project.imgSrc}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;
