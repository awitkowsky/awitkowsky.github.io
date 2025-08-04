import Card from "./TechCard";

function Certifications() {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-3">
      {["WORK", "IN", "PROGRESS"].map((cert, i) => (
        <Card key={i} title={cert} />
      ))}
    </div>
  );
}

export default Certifications;
