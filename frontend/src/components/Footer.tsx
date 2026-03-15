import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.3!2d10.9054592!3d45.3881368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e086fc2cc6ad%3A0x19701a4fd08757c5!2sDonisi%20S.r.l.!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit';

const orari = [
  { giorno: 'Lunedì – Venerdì', ore: '07:30 – 18:00' },
  { giorno: 'Sabato', ore: 'Chiuso' },
  { giorno: 'Domenica', ore: 'Chiuso' },
];

const Footer: React.FC = () => {
  const [form, setForm] = useState({ nome: '', telefono: '', email: '', messaggio: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer className="footer" id="contatti" data-testid="footer">
      <div className="footer-inner">

        {/* COLONNA 1 — Form contatti */}
        <ScrollReveal direction="up" delay={0}>
          <div className="footer-col">
            <h4 className="footer-title">Contattaci</h4>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()} data-testid="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome e cognome"
                  value={form.nome}
                  onChange={handleChange}
                  className="form-input"
                  data-testid="input-nome"
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="form-input"
                  data-testid="input-telefono"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                data-testid="input-email"
              />
              <textarea
                name="messaggio"
                placeholder="Descrivi il tuo problema..."
                value={form.messaggio}
                onChange={handleChange}
                className="form-input form-textarea"
                rows={4}
                data-testid="input-messaggio"
              />
              <button type="submit" className="form-submit" data-testid="form-submit">
                Invia richiesta
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* COLONNA 2 — Orari */}
        <ScrollReveal direction="up" delay={150}>
          <div className="footer-col footer-col--orari">
            <h4 className="footer-title">Orari</h4>
            <ul className="orari-list">
              {orari.map(({ giorno, ore }) => (
                <li key={giorno} className="orari-item">
                  <span className="orari-giorno">{giorno}</span>
                  <span className={`orari-ore${ore === 'Chiuso' ? ' chiuso' : ''}`}>{ore}</span>
                </li>
              ))}
            </ul>
            <div className="footer-contact-info">
              <p>Via Staffali, 37 A - Verona</p>
              <a href="tel:+390000000000">+39 000 000 0000</a>
              <a href="mailto:info@donisi.it">info@donisi.it</a>
            </div>
          </div>
        </ScrollReveal>

        {/* COLONNA 3 — Google Maps */}
        <ScrollReveal direction="up" delay={300}>
          <div className="footer-col footer-col--map">
            <h4 className="footer-title">Dove siamo</h4>
            <div className="map-wrapper">
              <iframe
                src={MAPS_EMBED}
                title="Donisi S.r.l. su Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-maps"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Donisi S.r.l. — Tutti i diritti riservati</span>
      </div>
    </footer>
  );
};

export default Footer;
