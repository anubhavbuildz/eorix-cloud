import React from 'react';
import { Container } from '../common/Container';
import { Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="top-header" role="banner">
      <Container>
        <a href="/" className="brand-wrapper" aria-label="Eorix Home">
          <img
            className="brand-mark"
            src="/brand-mark.png"
            alt="Eorix brandmark"
            width="44"
            height="34"
          />
          <img
            className="brand-word"
            src="/brand-word.png"
            alt="Eorix"
            width="82"
            height="17"
          />
        </a>

        <div className="header-actions">
          <div className="status-badge" role="status" aria-label="Project Status: Coming Soon">
            <span className="status-dot" aria-hidden="true" />
            Coming soon
          </div>

          <a
            href="mailto:infrabyanubhav@gamil.com"
            className="btn-header-cta"
            aria-label="Contact infrabyanubhav@gamil.com"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Mail size={13} />
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
};
