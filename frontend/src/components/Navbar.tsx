import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar" data-testid="navbar">
      <div className="logo">
        <img src="/img/logo/donisi.webp" alt="Donisi logo" className="logo" width="38px" />
      </div>

      <nav className="menu">
        <a href="#storia" data-testid="nav-storia">Storia</a>
        <a href="#lavori" data-testid="nav-lavori">Lavori</a>
        <a href="#contatti" className="cta" data-testid="nav-cta">Chiamaci</a>
      </nav>
    </header>
  );
};

export default Navbar;
