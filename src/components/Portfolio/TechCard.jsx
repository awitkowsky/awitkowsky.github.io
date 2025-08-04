function TechCard({ title, imgSrc }) {
  return (
    <div className="w-55 h-55 bg-neutral-900 border border-stone-400 rounded-2xl flex flex-col items-center justify-around p-1 hover:scale-105 transition-transform overflow-hidden">
      <div className="w-4/5 p-2 flex items-center justify-center overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-white text-center text-sm font-semibold">{title}</h3>
    </div>
  );
}

export default TechCard;
