export default function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <h1>About the Man Who Wrote Websites</h1>
        <p></p>
      </header>
    </>
  );
}
function Body() {
  return (
    <>
      <main>
        <Nav />
        <Main />
      </main>
    </>
  );
}
function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Index</a>
          </li>
          <li>
            <a href="#">Reptiles</a>
          </li>
          <li>
            <a href="#">Demo</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Main() {
  return (
    <>
      <section>
        <div>
          <h2>A Bit About Me</h2>
          <p>
            I've been building websites for a few years. I genuinely enjoy it,
            and I’d love to do it professionally someday.
          </p>
          <blockquote>
            "A programmer is someone who turns coffee into code."
          </blockquote>
          <p>
            My favorite quote about what I do and what I hope to do in the
            future.
          </p>
        </div>

        <br />

        <div>
          <h2>My Hobbies</h2>
          <p>
            Since I was a child, I’ve been interested in technology and the
            animal world. I enjoy gaming and sports, but reptiles have truly
            stolen my heart. They’re fascinating, have unique personalities, and
            every day with them is something new.
          </p>
          <p>
            I have <strong>three crested geckos</strong> – each with different
            colors and temperaments. One is very active, another is a typical
            “night owl,” and the third likes to sit in one place, staring at me
            like I’m from another planet.
          </p>
          <p>
            I also have a <strong>bearded dragon</strong> who is incredibly
            gentle and friendly. She loves basking under the UV lamp and
            watching what’s happening in the room.
          </p>
          <p>
            I dream of creating larger terrariums with natural decorations one
            day and sharing my knowledge about reptile care with other
            enthusiasts.
          </p>
        </div>

        <br />

        <div>
          <h3>My Little Companions 🦎</h3>
          <p>Here are some pictures of my reptiles:</p>
          <br />
          <div id="gallery">
            <img src="public/crest_2.jpeg" alt="Crested Gecko" />
            <img src="public/crest_1.jpeg" alt="Second Gecko" />
            <img src="public/agamuski.jpeg" alt="Bearded Dragon" />
          </div>
        </div>

        <p id="link">
          <a href="species.html">(see them here)</a>
        </p>
      </section>
    </>
  );
}
