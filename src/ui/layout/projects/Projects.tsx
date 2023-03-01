import * as React from "react";

interface IProjectImageProps {
  name: string;
  alt: string;
}

function ProjectImage({ name, alt }: IProjectImageProps) {
  return (
    <picture>
      <source
        srcSet={`/images/${name}.webp 480w, /images/${name}@2x.webp 960w`}
        sizes="50vw"
        type="image/webp"
      />
      <source
        srcSet={`/images/${name}.png 480w, /images/${name}@2x.png 960w`}
        sizes="50vw"
        type="image/png"
      />
      <img src="/images/${name}.png" alt={alt} className="project__image" />
    </picture>
  );
}

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <>
      {/* PAGE ANCHOR */}
      <p className="subtitle" id="portfolio">
        Portfolio
      </p>

      {/* PROJECT SECTION */}
      <section className="project belefit grid__2col-sm-up">
        <div className="project__content">
          <h2 className="project__title">Belefit</h2>
          <a
            href="https://belefit.com/app"
            target="_blank"
            className="link project__link"
          >
            https://belefit.com/app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="link__icon"
              viewBox="0 0 512 512"
            >
              <title>Open</title>
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </a>
          <p className="project__description">
            Designed and built a Progressive Web App (PWA) for beauty clinics to
            manage their expenses, services, clients, as well as schedule
            appointments for their customers.
          </p>
          <p className="project_skills tag-container">
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">React.js</span>
            <span className="tag">Material_UI</span>
            <span className="tag">Redux.js</span>
            <span className="tag">Next.js</span>
            <span className="tag">Firebase</span>
            <span className="tag">Google Cloud Platform (GCP)</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Github Actions</span>
          </p>
        </div>
        <ProjectImage name="portfolio-belefit" alt="Belefit App Screenshots" />
      </section>
      {/* END PROJECT SECTION */}

      <section className="project tryon grid__2col-sm-up">
        <ProjectImage name="portfolio-tryon" alt="TryOn Screenshots" />
        <div className="project__content">
          <h2 className="project__title">TryOn</h2>
          <a
            href="https://github.com/marcosluizfp/tryon"
            target="_blank"
            className="link project__link"
          >
            https://github.com/marcosluizfp/tryon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="link__icon"
              viewBox="0 0 512 512"
            >
              <title>Open</title>
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </a>
          <p className="project__description">
            The tryon is a NPM package and open source project made to simplify
            error control in JavaScript/TypeScript, with a cleaner usage and a
            default error handling function (which may be customized). It
            reduces code verbosity, unifies the method to treat sync and async
            errors, and includes a default error handling function.
          </p>
          <p className="project_skills tag-container">
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">NPM</span>
            <span className="tag">Open Source</span>
          </p>
        </div>
      </section>
      <section className="project criapage grid__2col-sm-up">
        <div className="project__content">
          <h2 className="project__title">Cria Page</h2>
          <a
            href="https://app.cria.page/"
            target="_blank"
            className="link project__link"
          >
            https://app.cria.page/
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="link__icon"
              viewBox="0 0 512 512"
            >
              <title>Open</title>
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </a>
          <p className="project__description">
            Cria Page is a comprehensive and user-friendly landing page builder
            and hosting service. I was involved in business modeling, system
            design, and full-stack development. The service was used by over 200
            users, resulting in the creation of more than 300 landing pages.
          </p>
          <p className="project_skills tag-container">
            <span className="tag">Business Modeling</span>
            <span className="tag">JavaScript</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">Vue.js</span>
            <span className="tag">Bulma (Framework CSS)</span>
            <span className="tag">Nuxt.js</span>
            <span className="tag">Firebase</span>
            <span className="tag">Google Cloud Platform (GCP)</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Node.js</span>
          </p>
        </div>
        <ProjectImage
          name="portfolio-criapage"
          alt="Cria Page App Screenshots"
        />
      </section>
      <section className="project fidelizai grid__2col-sm-up">
        <ProjectImage
          name="portfolio-fidelizai"
          alt="FidelizAi App Screenshots"
        />
        <div className="project__content">
          <h2 className="project__title">FidelizAi</h2>
          <a
            href="https://fidelizai.com/"
            target="_blank"
            className="link project__link"
          >
            https://fidelizai.com/
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="link__icon"
              viewBox="0 0 512 512"
            >
              <title>Open</title>
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </a>
          <p className="project__description">
            FidelizAí was a startup I co-founded with a partner. The solution
            was designed to improve customer loyalty for small and micro retail
            businesses. My main responsibilities included business modeling,
            system design, and full-stack development, while also collaborating
            with an external marketing firm. The solution was proven to be
            effective, delivering a 13% increase in revenue for companies after
            only 6 months of usage.
          </p>
          <p className="project_skills tag-container">
            <span className="tag">Business Modeling</span>
            <span className="tag">Scrum</span>
            <span className="tag">Kanban</span>
            <span className="tag">JavaScript</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">Vue.js</span>
            <span className="tag">Vuetify</span>
            <span className="tag">Nuxt.js</span>
            <span className="tag">Firebase</span>
            <span className="tag">Google Cloud Platform (GCP)</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Node.js</span>
          </p>
        </div>
      </section>
      <section className="project ongroups grid__2col-sm-up">
        <div className="project__content">
          <h2 className="project__title">On Groups</h2>
          <a
            href="https://ongroups.com/"
            target="_blank"
            className="link link project__link"
          >
            https://ongroups.com/
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="link__icon"
              viewBox="0 0 512 512"
            >
              <title>Open</title>
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </a>
          <p className="project__description">
            OnGroups was a startup that I co-founded with a partner. Its main
            objective was to create a social network for neighbors and local
            businesses to share local news, alerts, organize donations, and
            coordinate community events like sports activities. My primary
            responsibilities included business modeling, system design, and
            full-stack development, while also collaborating with an external
            marketing firm.
          </p>
          <p className="project_skills tag-container">
            <span className="tag">Business Modeling</span>
            <span className="tag">Scrum</span>
            <span className="tag">Kanban</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React Native</span>
            <span className="tag">Redux.js</span>
            <span className="tag">Firebase</span>
            <span className="tag">Google Cloud Platform (GCP)</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Node.js</span>
          </p>
        </div>
        <ProjectImage
          name="portfolio-ongroups"
          alt="On Groups App Screenshots"
        />
      </section>
    </>
  );
}
