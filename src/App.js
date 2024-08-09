import "./styles/App.scss";

import { offers } from "./data/offers";

import logo from "./static/svg/logo.svg";
import rocketIcon from "./static/rocket.png";
import cartIcon from "./static/svg/cart.svg";
import cartGradientIcon from "./static/svg/cart-gradient.svg";

function App() {
  return (
    <div className="page">
      <header className="main-header">
        <div className="main-header__wrapper">
          <a href="/#">
            <img src={logo} className="main-header__logo" alt="Go Logo" />
          </a>
          <div className="main-menu">
            <input
              type="checkbox"
              id="menu-toggle"
              className="main-menu__toggle"
            />
            <label htmlFor="menu-toggle" className="main-menu__burger">
              <span className=""></span>
            </label>
            <nav className="main-menu__nav">
              <ul className="main-menu__items">
                <li>
                  <a href="/#" className="menu-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#" className="menu-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/#" className="menu-link">
                    <img
                      src={cartIcon}
                      alt="Cart"
                      className="menu-link__icon"
                    />
                    <img
                      src={cartGradientIcon}
                      alt="Cart"
                      className="menu-link__gradient-icon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main-contnet">
        <section className="hero-banner">
          <div className="hero-banner__wrapper">
            <div className="hero-banner__content">
              <header>
                <h2 className="hero-banner__title">
                  Discover the vast expanses of
                  <span className="text-highlight-secondary"> space</span>
                </h2>
              </header>
              <h4 className="hero-banner__subtitle">
                Where the possibilities are
                <span className="text-highlight"> endless!</span>
              </h4>
              <a href="/#" className="button button--primary button--large">
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <header className="section__header">Offers</header>
          <div className="section__content">
            <div className="offers-list">
              {offers.map((offer) => (
                <article
                  className="offers-list__item offers-item"
                  key={offer.id}
                >
                  <div className="offers-item__content">
                    <header>
                      <h3 className="offers-item__title">{offer.title}</h3>
                    </header>
                    <p className="offers-item__description">
                      {offer.description}
                    </p>
                    <a href="/#" className="button">
                      Load more
                    </a>
                  </div>
                  <img
                    src={offer.img}
                    className="offers-item__img"
                    alt={offer.title}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <header className="section__header">Embark on a space journey</header>
          <div className="section__content ">
            <div className="text-collapser section__text">
              <input
                type="checkbox"
                id="view-more-toggle"
                className="text-collapser__toggle"
              />
              <p className="text-collapser__content">
                Traveling into space is one of the most exciting and
                unforgettable adventures that can change your life forever. And
                if you have ever dreamed of exploring stars, planets and
                galaxies, then our company is ready to help you realize this
                dream. We offer a unique experience that will allow you to go on
                a space journey and see all the secrets of the universe. We
                guarantee that every moment in space will be filled with
                incredible impressions, excitement and new discoveries. Our team
                of professionals takes care of your safety and comfort so that
                you can fully enjoy your adventure in space. We offer various
                options for space excursions.
              </p>
              <label
                htmlFor="view-more-toggle"
                className="text-collapser__more"
              >
                Read more
              </label>
              <label
                htmlFor="view-more-toggle"
                className="text-collapser__less"
              >
                Read less
              </label>
            </div>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <img src={rocketIcon} alt="rocket" className="main-footer__img" />
        <span className="main-footer__text">Exciting space adventure!</span>
      </footer>
    </div>
  );
}

export default App;
