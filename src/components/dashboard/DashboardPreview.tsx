import React, { useState } from 'react';
import { KpiCards } from './KpiCards';
import { SpendChart } from './SpendChart';
import { CloudSplit } from './CloudSplit';
import { InsightsList } from './InsightsList';
import {
  MOCK_KPIS,
  CHART_POINTS,
  CLOUD_SPLIT,
  MOCK_INSIGHTS,
  TIME_RANGE_OPTIONS,
} from '../../data/dashboardData';

export const DashboardPreview: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>('30d');

  const currentKpis = MOCK_KPIS[selectedRange] || MOCK_KPIS['30d'];

  return (
    <div className="preview-container">
      <div className="preview-label-bar">
        <span className="eyebrow">Preview with sample data</span>
      </div>

      <div
        className="dash-card"
        role="group"
        aria-label="Preview of the Eorix multi-cloud overview dashboard, using sample data"
      >
        <div className="dash-head">
          <div className="dash-title-group">
            <span className="dash-title">Multi-cloud overview</span>
          </div>

          {/* Interactive Range Filter Tabs */}
          <div className="range-tabs" role="tablist" aria-label="Dashboard time ranges">
            {TIME_RANGE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={selectedRange === opt.id}
                className={`range-tab-btn ${selectedRange === opt.id ? 'active' : ''}`}
                onClick={() => setSelectedRange(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Key Performance Indicators */}
        <KpiCards kpis={currentKpis} />

        {/* Daily Spend Graph with Anomaly Marker */}
        <SpendChart points={CHART_POINTS} />

        {/* Cloud Proportional Split */}
        <CloudSplit splits={CLOUD_SPLIT} />

        {/* Real-time FinOps Insights & Savings */}
        <InsightsList insights={MOCK_INSIGHTS} />
      </div>
    </div>
  );
};
