export type StatusType = 'crit' | 'good' | 'warn' | 'neutral';

export interface KpiItem {
  id: string;
  label: string;
  value: string;
  sub: string;
  statusType?: 'up' | 'ok' | 'normal';
}

export interface ChartDataPoint {
  date: string;
  spend: number;
  x: number;
  y: number;
  isAnomaly?: boolean;
  anomalyTitle?: string;
}

export interface CloudSplitItem {
  name: string;
  share: number;
  colorVar: string;
  colorHex: string;
  spendFormatted: string;
}

export interface InsightItem {
  id: string;
  type: 'crit' | 'good' | 'warn';
  typeLabel: string;
  title: string;
  subtitle: string;
  amount: string;
}

export interface CloudPlatformItem {
  id: string;
  name: string;
  description: string;
  chipText: string;
  iconType: 'aws' | 'azure' | 'gcp' | 'all';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface CycleStepItem {
  stepNumber: number;
  stepLabel: string;
  name: string;
  description: string;
}

export interface TimeRangeOption {
  id: string;
  label: string;
  days: number;
}

export interface BlogCardItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  formattedDate: string;
  metricsHighlight?: string;
  author: {
    name: string;
    role: string;
  };
}
