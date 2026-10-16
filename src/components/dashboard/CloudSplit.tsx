import React from 'react';
import type { CloudSplitItem } from '../../types';

interface CloudSplitProps {
  splits: CloudSplitItem[];
}

export const CloudSplit: React.FC<CloudSplitProps> = ({ splits }) => {
  return (
    <div role="region" aria-label="Spend breakdown by cloud provider">
      <div className="split-header">
        <span>Spend by cloud</span>
        <span>Share of total spend</span>
      </div>

      <div
        className="split-bar"
        role="img"
        aria-label={splits.map((s) => `${s.name} ${s.share}%`).join(', ')}
      >
        {splits.map((item) => (
          <i
            key={item.name}
            className="split-segment"
            style={{ width: `${item.share}%`, background: item.colorVar }}
            title={`${item.name}: ${item.share}% (${item.spendFormatted})`}
          />
        ))}
      </div>

      <div className="split-legend">
        {splits.map((item) => (
          <span key={item.name} className="split-legend-item">
            <i
              className="split-legend-dot"
              style={{ background: item.colorVar }}
              aria-hidden="true"
            />
            {item.name} <b>{item.share}%</b>
          </span>
        ))}
      </div>
    </div>
  );
};
