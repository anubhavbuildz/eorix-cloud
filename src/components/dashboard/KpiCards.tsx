import React from 'react';
import type { KpiItem } from '../../types';

interface KpiCardsProps {
  kpis: KpiItem[];
}

export const KpiCards: React.FC<KpiCardsProps> = ({ kpis }) => {
  return (
    <div className="kpis" role="region" aria-label="Key Performance Indicators">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="kpi-card">
          <div className="kpi-label">{kpi.label}</div>
          <div className="kpi-value">{kpi.value}</div>
          <div
            className={`kpi-sub ${
              kpi.statusType === 'up'
                ? 'up'
                : kpi.statusType === 'ok'
                ? 'ok'
                : ''
            }`}
          >
            {kpi.sub}
          </div>
        </div>
      ))}
    </div>
  );
};
