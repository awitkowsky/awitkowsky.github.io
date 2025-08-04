import Card from "./TechCard";

function TechStack() {
  const techs = [
    { title: "HTML", imgSrc: "html-5.png" },
    { title: "CSS", imgSrc: "css-3.png" },
    { title: "JavaScript", imgSrc: "js.png" },
    { title: "PHP", imgSrc: "php.png" },
    { title: "SQL", imgSrc: "sql.png" },
    { title: "phpMyAdmin", imgSrc: "phpmyadmin.png" },
    { title: "Tailwind CSS", imgSrc: "tailwind.svg" },
    { title: "React", imgSrc: "react.png" },
    { title: "Vite", imgSrc: "vite.png" },
    { title: "GitHub", imgSrc: "github.png" },
    { title: "Netlify", imgSrc: "netlify.svg" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 my-3">
      {techs.map((tech, i) => (
        <Card key={i} title={tech.title} imgSrc={tech.imgSrc} />
      ))}
    </div>
  );
}

export default TechStack;
