import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { FINOPS_FEATURES } from '../../data/finopsContent';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section" id="features" aria-label="FinOps Core Coverage">
      <Container>
        <SectionHeader
          eyebrow="What Eorix will cover"
          title="The questions finance and engineering ask every month"
        />

        <div className="features-grid">
          {FINOPS_FEATURES.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="feature-header">
                <h3>{feature.title}</h3>
                <span className="feature-category">{feature.category}</span>
              </div>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
