import React from 'react';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const Navbar: React.FC = () => {
  return (
    <header className="navbar" data-testid="navbar">
      <a
        href="#home"
        className="logo"
        aria-label="Torna su"
        data-testid="navbar-logo-link"
        onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
      >
        <img src="/img/logo/donisi.webp" alt="Donisi logo" className="logo" width="38px" />
      </a>

      <nav className="menu">
        <a
          href="#storia"
          data-testid="nav-storia"
          onClick={(e) => { e.preventDefault(); scrollTo('storia'); }}
        >
          Servizi
        </a>
        <a
          href="#lavori"
          data-testid="nav-lavori"
          onClick={(e) => { e.preventDefault(); scrollTo('lavori'); }}
        >
          Lavori
        </a>
        <a
          href="#contatti"
          className="cta"
          data-testid="nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('contatti'); }}
        >
          Chiamaci
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
