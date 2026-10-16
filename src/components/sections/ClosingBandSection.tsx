import React, { useState } from 'react';
import { Container } from '../common/Container';
import { APP_METADATA } from '../../data/finopsContent';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

const CONTACT_EMAIL = 'infrabyanubhav@gamil.com';

export const ClosingBandSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className="closing-band" aria-label="Status and Contact">
      <Container>
        <div className="band-grid">
          <div>
            <span className="eyebrow">Status</span>
            <h2>{APP_METADATA.closingHeading}</h2>
            <p>
              The first dashboards are in development. For inquiries, partnerships, or early previews, reach out directly:
            </p>

            <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-contact-action btn-contact-send"
                style={{ padding: '10px 18px', fontSize: '0.8125rem' }}
              >
                <Mail size={15} />
                <span>Contact {CONTACT_EMAIL}</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-contact-action btn-contact-copy"
                style={{ padding: '10px 16px', fontSize: '0.8125rem' }}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} color="var(--good)" />
                    <span style={{ color: 'var(--good)' }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <img
            className="band-logo"
            src="/band-logo.png"
            alt="Eorix logo symbol"
            width="250"
            height="180"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};
