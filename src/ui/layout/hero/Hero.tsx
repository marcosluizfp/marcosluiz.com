export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    /* MAIN CONTENT */
    <main className="hero grid__2col-sm-up">
      <div className="hero__content">
        {/* <p className="hero__subtitle">Software Engineer</p> */}
        <h1 className="hero__title">
          Hi, I am <span className="hero__name">Marcos Luiz</span>
        </h1>
        <p className="hero__tags tag-container">
          <span className="tag">Software Engineer</span>
          <span className="tag">26+ Years Experience</span>
          <span className="tag">Leadership</span>
          <span className="tag">System Design</span>
          <span className="tag">Fullstack Dev</span>
        </p>
        <p className="hero__text">
          Focused on delivering results in time-to-market, cost, efficiency,
          user satisfaction, and legal compliance. Problem-solving approach to
          technology selection, considering current and future business needs.
          Equally capable of in-house development, procurement or a blend of
          both.
        </p>
        <a href="#contact" className="button">
          Contact Me
        </a>
      </div>
      <picture>
        <source
          srcSet="/images/marcos-with-logos.webp 875w, /images/marcos-with-logos@2x.webp 1500w"
          sizes="50vw"
          type="image/webp"
        />
        <source
          srcSet="/images/marcos-with-logos.png 875w, /images/marcos-with-logos@2x.png 1500w"
          sizes="50vw"
          type="image/png"
        />
        <img
          src="/images/marcos-with-logos.png"
          alt="Marcos with Technical Logos"
          className="hero__image"
        />
      </picture>
    </main>
  );
}
