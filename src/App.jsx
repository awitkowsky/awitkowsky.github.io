import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Reptiles = lazy(() => import("./pages/Reptiles"));

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/reptiles"
            element={
              <Suspense
                fallback={
                  <section style={{ textAlign: "center" }}>
                    Loading reptiles...
                  </section>
                }
              >
                <Reptiles />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

function Header() {
  return (
    <header>
      <h1>About the Man Who Wrote Websites</h1>
      <p></p>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/reptiles">Reptiles</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section>
      <div>
        <h2>A Bit About Me</h2>
        <p>
          I've been building websites for a few years. I genuinely enjoy it, and
          I’d love to do it professionally someday.
        </p>
        <blockquote>
          "A programmer is someone who turns coffee into code."
        </blockquote>
        <p>
          My favorite quote about what I do and what I hope to do in the future.
        </p>
      </div>

      <div>
        <h2>My Hobbies</h2>
        <p>
          Since I was a child, I’ve been interested in technology and the animal
          world. I enjoy gaming and sports, but reptiles have truly stolen my
          heart.
        </p>
        <p>
          I have <strong>three crested geckos</strong> – each with different
          colors and temperaments.
        </p>
        <p>
          I also have a <strong>bearded dragon</strong> who is incredibly gentle
          and friendly.
        </p>
        <p>
          I dream of creating larger terrariums and sharing my knowledge with
          others.
        </p>
      </div>

      <div>
        <h2>My Little Companions 🦎</h2>
        <p>Here are some pictures of my reptiles:</p>
        <div id="gallery">
          <img src="/samczy.jpeg" alt="Crested Gecko" />
          <img src="/smoczyca.jpeg" alt="Second Gecko" />
          <img src="/sisi.jpeg" alt="Bearded Dragon" />
          <img src="/agamuski.jpeg" alt="Bearded Dragon" />
        </div>
      </div>

      <p id="link">
        <Link to="/reptiles">(see them here)</Link>
      </p>
    </section>
  );
}
