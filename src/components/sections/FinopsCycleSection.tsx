import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { FINOPS_CYCLE } from '../../data/finopsContent';

export const FinopsCycleSection: React.FC = () => {
  return (
    <section className="section" id="how-it-works" aria-label="FinOps Cycle Framework">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Built around the FinOps cycle"
        />

        <ol className="cycle-list">
          {FINOPS_CYCLE.map((step) => (
            <li key={step.stepNumber} className="cycle-step">
              <span className="cycle-step-tag">{step.stepLabel}</span>
              <span className="cycle-step-name">{step.name}</span>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
