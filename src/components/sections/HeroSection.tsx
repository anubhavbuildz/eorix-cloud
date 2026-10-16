import React, { useState } from 'react';
import { Container } from '../common/Container';
import { DashboardPreview } from '../dashboard/DashboardPreview';
import { APP_METADATA } from '../../data/finopsContent';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

const CONTACT_EMAIL = 'infrabyanubhav@gamil.com';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className="hero" aria-label="Introduction">
      <Container>
        <div className="hero-grid">
          {/* Left Column: Animated Headline, Lead, and Direct Email Card */}
          <div className="hero-text-col">
            <p className="eyebrow animate-hero-eyebrow">{APP_METADATA.heroEyebrow}</p>

            <h1 className="animate-hero-title">
              {APP_METADATA.heroTitlePrefix}{' '}
              <span className="grad-text-animated">{APP_METADATA.heroTitleHighlight}</span>.
            </h1>

            <p className="lead animate-hero-lead">{APP_METADATA.heroLead}</p>

            {/* Direct Contact Email Card */}
            <div className="hero-contact-card animate-hero-contact">
              <div className="contact-card-label">
                <span className="contact-card-badge">
                  <Mail size={14} aria-hidden="true" />
                  Direct Contact & Inquiries
                </span>
                <span>Active</span>
              </div>

              <div className="contact-card-content">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-email-link"
                  title="Click to send email"
                  aria-label={`Send email to ${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>

                <div className="contact-actions">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn-contact-action btn-contact-copy"
                    aria-label="Copy email address to clipboard"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} color="var(--good)" />
                        <span style={{ color: 'var(--good)' }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="btn-contact-action btn-contact-send"
                    aria-label="Send email"
                  >
                    <span>Write</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Meta Information */}
            <div className="meta animate-hero-meta">
              <div className="meta-row">
                <span>Status</span>
                <span>
                  <strong>{APP_METADATA.metaStatus}</strong>
                </span>
              </div>
              <div className="meta-row">
                <span>Contact</span>
                <span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{ color: 'var(--blue)', textDecoration: 'none' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Dashboard Preview with entrance animation */}
          <div className="animate-hero-preview">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
};
