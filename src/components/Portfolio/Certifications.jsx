import CertificationsCard from "./CertificationsCard";

function Certifications() {
  const certifications = [
    {
      title: "INF.02",
      imgSrc: "./cert.png",
    },
    {
      title: "Junior Penetration Tester",
      imgSrc: "./ejpt.png",
    },
    {
      title: "INF.03",
      imgSrc: "./cert.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-3">
      {certifications.map((cert, i) => (
        <CertificationsCard key={i} title={cert.title} imgSrc={cert.imgSrc} />
      ))}
    </div>
  );
}

export default Certifications;
