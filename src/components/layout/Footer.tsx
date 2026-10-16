import React from 'react';
import { Container } from '../common/Container';

interface FooterProps {
  copyright?: string;
  tagline?: string;
}

export const Footer: React.FC<FooterProps> = ({
  copyright = '© 2026 Eorix. All rights reserved.',
  tagline = 'Multi-cloud FinOps dashboard',
}) => {
  return (
    <footer className="foot" role="contentinfo">
      <Container>
        <div className="foot-brand">
          <img
            className="brand-mark"
            src="/brand-mark.png"
            alt="Eorix logo"
            width="31"
            height="24"
          />
          <span>{copyright}</span>
        </div>
        <span className="foot-tagline">{tagline}</span>
      </Container>
    </footer>
  );
};
