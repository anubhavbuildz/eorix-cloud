import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { CLOUD_PLATFORMS } from '../../data/finopsContent';

export const CloudListSection: React.FC = () => {
  return (
    <section className="section" id="dashboards" aria-label="Cloud Provider Dashboards">
      <Container>
        <SectionHeader
          eyebrow="Dashboards"
          title="A dashboard for each cloud, and one for all of them"
        />

        <div className="cloud-list" role="list">
          {CLOUD_PLATFORMS.map((cloud) => (
            <div key={cloud.id} className="cloud-row" role="listitem">
              <div className="cloud-name">{cloud.name}</div>
              <p className="cloud-desc">{cloud.description}</p>
              <span className="cloud-chip">{cloud.chipText}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
