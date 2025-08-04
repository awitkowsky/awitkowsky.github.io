function ProjectsCard({ title, imgSrc, link }) {
  return (
    <div className="w-3/10 h-120 bg-neutral-900 border border-stone-400 rounded-2xl flex flex-col items-center justify-between p-3 hover:scale-105 transition-transform overflow-hidden">
      <div className="w-full flex items-center justify-center overflow-hidden p-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </a>
      </div>
      <h3 className="text-white text-center text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default ProjectsCard;
