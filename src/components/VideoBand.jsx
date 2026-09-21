export default function VideoBand({ t }) {
  return (
    <section className="video" aria-labelledby="video-title">
      <video
        className="video__media"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="video__shade" aria-hidden="true" />
      <div className="container video__inner">
        <p className="video__eyebrow">{t.video.eyebrow}</p>
        <h2 id="video-title" className="video__title">{t.video.title}</h2>
        <p className="video__text">{t.video.text}</p>
        <a className="btn btn--light" href="#contact">{t.video.cta}</a>
      </div>
    </section>
  );
}
