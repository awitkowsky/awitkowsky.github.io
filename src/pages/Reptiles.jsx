import { useState } from "react";

const gadzichy = [
  { id: 1, name: "Smoczyca", opis: "Opis smoka", zdjecie: "/smoczyca.jpeg" },
  { id: 2, name: "Samczy", opis: "Opis samczego", zdjecie: "/samczy.jpeg" },
  {
    id: 3,
    name: "Agamuski",
    opis: "Opis agamemnona",
    zdjecie: "/agamuski.jpeg",
  },
  { id: 4, name: "Sisi", opis: "Opis siski", zdjecie: "/sisi.jpeg" },
];

export default function Reptiles() {
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    if (index > 0) setIndex(index - 1);
  }

  function handleNext() {
    if (index < gadzichy.length - 1) setIndex(index + 1);
  }

  const gad = gadzichy[index];

  return (
    <section>
      <div style={{ textAlign: "center" }}>
        <h2>{gad.name}</h2>
        <p>{gad.opis}</p>

        <div id="gallery">
          <button onClick={handlePrevious} disabled={index === 0}>
            Previous
          </button>
          <img src={gad.zdjecie} alt={gad.name} />
          <button onClick={handleNext} disabled={index === gadzichy.length - 1}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
