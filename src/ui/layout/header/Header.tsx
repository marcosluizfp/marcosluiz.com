export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    /* NAVIGATION */
    <header className="header">
      <nav className="navbar navbar-expand-sm">
        <a href="#" className="navbar-brand">
          <picture>
            <source
              srcSet="/images/marcos-avatar.webp 40w, /images/marcos-avatar@2x.webp 80w"
              sizes="4rem"
              type="image/webp"
            />
            <source
              srcSet="/images/marcos-avatar.png 40w, /images/marcos-avatar@2x.png 80w"
              sizes="4rem"
              type="image/png"
            />
            <img
              src="/images/marcos-avatar.png"
              alt="Marcos Luiz Avatar"
              className="avatar"
            />
          </picture>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex align-items-center gap-4">
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          {/* <ul className="menu">
            <li>
              <a href="#portfolio" className="menu__item">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="button">
                Contact Me
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </header>
  );
}
