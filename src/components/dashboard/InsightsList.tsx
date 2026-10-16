import React from 'react';
import type { InsightItem } from '../../types';
import { Pill } from '../common/Pill';

interface InsightsListProps {
  insights: InsightItem[];
}

export const InsightsList: React.FC<InsightsListProps> = ({ insights }) => {
  return (
    <div className="insights-group" role="region" aria-label="FinOps actionable insights">
      {insights.map((item) => (
        <div key={item.id} className="insight-row">
          <Pill type={item.type}>{item.typeLabel}</Pill>
          <div className="insight-content">
            <div>{item.title}</div>
            <small>{item.subtitle}</small>
          </div>
          <span className="amt">{item.amount}</span>
        </div>
      ))}
    </div>
  );
};
