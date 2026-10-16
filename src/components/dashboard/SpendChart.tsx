import React, { useState } from 'react';
import type { ChartDataPoint } from '../../types';

interface SpendChartProps {
  points: ChartDataPoint[];
}

export const SpendChart: React.FC<SpendChartProps> = ({ points }) => {
  const [activePoint, setActivePoint] = useState<ChartDataPoint | null>(null);

  // Construct SVG paths
  const areaPath = `${points.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')} L472.0,188 L40.0,188 Z`;
  const linePath = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  const anomalyPoint = points.find((p) => p.isAnomaly);
  const latestPoint = points[points.length - 1];

  return (
    <div className="chart-box" role="region" aria-label="Daily cloud spend chart">
      <svg
        viewBox="0 0 480 224"
        className="chart-svg"
        role="img"
        aria-label="Daily cloud spend over 30 days with one anomaly on October 8. Sample data."
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34B1FE" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#643CFD" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="chart-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34B1FE" />
            <stop offset="100%" stopColor="#7A5CFF" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines & currency values */}
        <line x1="40" x2="472" y1="188.0" y2="188.0" stroke="#1F2635" strokeWidth="1" />
        <text x="32" y="192.0" textAnchor="end" className="chart-grid-text">
          $0
        </text>

        <line x1="40" x2="472" y1="140.6" y2="140.6" stroke="#1F2635" strokeWidth="1" />
        <text x="32" y="144.6" textAnchor="end" className="chart-grid-text">
          $3k
        </text>

        <line x1="40" x2="472" y1="93.2" y2="93.2" stroke="#1F2635" strokeWidth="1" />
        <text x="32" y="97.2" textAnchor="end" className="chart-grid-text">
          $6k
        </text>

        <line x1="40" x2="472" y1="45.8" y2="45.8" stroke="#1F2635" strokeWidth="1" />
        <text x="32" y="49.8" textAnchor="end" className="chart-grid-text">
          $9k
        </text>

        {/* Gradient Area Fill */}
        <path d={areaPath} fill="url(#chart-fill)" />

        {/* Trend Line with draw-in animation */}
        <path
          d={linePath}
          fill="none"
          stroke="url(#chart-stroke)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="chart-animated-path"
        />

        {/* Anomaly Indicator */}
        {anomalyPoint && (
          <g>
            <line
              x1={anomalyPoint.x}
              x2={anomalyPoint.x}
              y1={anomalyPoint.y + 8}
              y2="188"
              stroke="#FF6F7D"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.75"
            />
            {/* Ping pulse circle */}
            <circle
              cx={anomalyPoint.x}
              cy={anomalyPoint.y}
              r="10"
              fill="rgba(255, 111, 125, 0.25)"
              className="anomaly-ping"
            />
            <circle
              cx={anomalyPoint.x}
              cy={anomalyPoint.y}
              r="5.5"
              fill="#0E131C"
              stroke="#FF6F7D"
              strokeWidth="2"
            />
            <text
              className="chart-anomaly-text"
              x={anomalyPoint.x}
              y={anomalyPoint.y - 11}
              textAnchor="middle"
            >
              Anomaly
            </text>
          </g>
        )}

        {/* Latest Point Indicator */}
        {latestPoint && (
          <g>
            <circle
              cx={latestPoint.x}
              cy={latestPoint.y}
              r="7"
              fill="#643CFD"
              opacity="0.3"
            />
            <circle
              cx={latestPoint.x}
              cy={latestPoint.y}
              r="3.5"
              fill="#F2F5FA"
            />
          </g>
        )}

        {/* Interactive Hover Targets */}
        {points.map((point) => (
          <circle
            key={point.date}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="transparent"
            className="chart-point-target"
            onMouseEnter={() => setActivePoint(point)}
            onMouseLeave={() => setActivePoint(null)}
          />
        ))}

        {/* X-Axis Dates */}
        <text x="40.0" y="218" textAnchor="start" className="chart-axis-text">
          Sep 17
        </text>
        <text x="189.0" y="218" textAnchor="middle" className="chart-axis-text">
          Sep 27
        </text>
        <text x="337.9" y="218" textAnchor="middle" className="chart-axis-text">
          Oct 7
        </text>
        <text x="472.0" y="218" textAnchor="end" className="chart-axis-text">
          Oct 16
        </text>
      </svg>

      {/* Floating Active Point Tooltip */}
      {activePoint && (
        <div
          className="chart-tooltip"
          style={{
            left: `${(activePoint.x / 480) * 100}%`,
            top: `${(activePoint.y / 224) * 100}%`,
          }}
        >
          <div className="tooltip-date">{activePoint.date}</div>
          <div className="tooltip-val">${activePoint.spend.toLocaleString()}</div>
          {activePoint.isAnomaly && (
            <div style={{ color: 'var(--crit)', fontSize: '0.625rem', marginTop: '2px' }}>
              Anomaly: {activePoint.anomalyTitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
