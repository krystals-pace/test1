export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Krystal</h1>
        <p className="tagline">program manager at PACE</p>
      </header>

      <main>
        <section className="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            Hi, I&apos;m Krystal, program manager at PACE. I work on building
            useful systems and running programs that help students learn and
            create.
          </p>
        </section>

        <section className="semester" aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>Building a room reservation system</li>
            <li>Running a student leadership program</li>
            <li>Running 2 makerspaces and a recording studio</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {year} Krystal
        </p>
      </footer>
    </>
  );
}
