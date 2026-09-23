export default function About({ t }) {
  const a = t.about;
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section__title">{a.title}</h2>
        <p className="about__text">{a.text}</p>
      </div>
    </section>
  );
}
