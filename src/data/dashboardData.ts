import type {
  KpiItem,
  CloudSplitItem,
  InsightItem,
  ChartDataPoint,
  TimeRangeOption,
} from '../types';

export const TIME_RANGE_OPTIONS: TimeRangeOption[] = [
  { id: '30d', label: 'Last 30 days', days: 30 },
  { id: '60d', label: 'Last 60 days', days: 60 },
  { id: '90d', label: 'Quarter to date', days: 90 },
];

export const MOCK_KPIS: Record<string, KpiItem[]> = {
  '30d': [
    {
      id: 'spend',
      label: '30-day spend',
      value: '$172,200',
      sub: '+6.2% vs prior',
      statusType: 'up',
    },
    {
      id: 'commitment',
      label: 'Commitment coverage',
      value: '71%',
      sub: 'Target 80%',
      statusType: 'normal',
    },
    {
      id: 'savings',
      label: 'Savings found',
      value: '$18.4k',
      sub: 'Per month',
      statusType: 'ok',
    },
  ],
  '60d': [
    {
      id: 'spend',
      label: '60-day spend',
      value: '$334,800',
      sub: '+4.1% vs prior',
      statusType: 'up',
    },
    {
      id: 'commitment',
      label: 'Commitment coverage',
      value: '73%',
      sub: 'Target 80%',
      statusType: 'normal',
    },
    {
      id: 'savings',
      label: 'Savings found',
      value: '$36.2k',
      sub: 'Total detected',
      statusType: 'ok',
    },
  ],
  '90d': [
    {
      id: 'spend',
      label: 'QTD spend',
      value: '$498,500',
      sub: '+3.5% vs budget',
      statusType: 'up',
    },
    {
      id: 'commitment',
      label: 'Commitment coverage',
      value: '75%',
      sub: 'Target 80%',
      statusType: 'normal',
    },
    {
      id: 'savings',
      label: 'Savings found',
      value: '$54.8k',
      sub: 'Cumulative YTD',
      statusType: 'ok',
    },
  ],
};

export const CHART_POINTS: ChartDataPoint[] = [
  { date: 'Sep 17', spend: 5450, x: 40.0, y: 102.0 },
  { date: 'Sep 18', spend: 5670, x: 54.9, y: 98.5 },
  { date: 'Sep 19', spend: 4400, x: 69.8, y: 118.5 },
  { date: 'Sep 20', spend: 4350, x: 84.7, y: 119.3 },
  { date: 'Sep 21', spend: 5550, x: 99.6, y: 100.4 },
  { date: 'Sep 22', spend: 5350, x: 114.5, y: 103.6 },
  { date: 'Sep 23', spend: 5250, x: 129.4, y: 105.1 },
  { date: 'Sep 24', spend: 5750, x: 144.3, y: 97.2 },
  { date: 'Sep 25', spend: 5820, x: 159.2, y: 96.0 },
  { date: 'Sep 26', spend: 4650, x: 174.1, y: 114.5 },
  { date: 'Sep 27', spend: 4910, x: 189.0, y: 110.4 },
  { date: 'Sep 28', spend: 5950, x: 203.9, y: 94.1 },
  { date: 'Sep 29', spend: 5520, x: 218.8, y: 100.8 },
  { date: 'Sep 30', spend: 5570, x: 233.7, y: 100.1 },
  { date: 'Oct 01', spend: 5940, x: 248.6, y: 94.3 },
  { date: 'Oct 02', spend: 5760, x: 263.4, y: 97.1 },
  { date: 'Oct 03', spend: 4800, x: 278.3, y: 112.2 },
  { date: 'Oct 04', spend: 5290, x: 293.2, y: 104.5 },
  { date: 'Oct 05', spend: 6200, x: 308.1, y: 90.0 },
  { date: 'Oct 06', spend: 5900, x: 323.0, y: 94.9 },
  { date: 'Oct 07', spend: 6150, x: 337.9, y: 90.9 },
  {
    date: 'Oct 08',
    spend: 9240,
    x: 352.8,
    y: 42.5,
    isAnomaly: true,
    anomalyTitle: 'Data Transfer Spike in us-east-1 (+$3.1k)',
  },
  { date: 'Oct 09', spend: 6720, x: 367.7, y: 81.9 },
  { date: 'Oct 10', spend: 4990, x: 382.6, y: 109.1 },
  { date: 'Oct 11', spend: 5380, x: 397.5, y: 103.0 },
  { date: 'Oct 12', spend: 6200, x: 412.4, y: 90.1 },
  { date: 'Oct 13', spend: 6220, x: 427.3, y: 89.7 },
  { date: 'Oct 14', spend: 6660, x: 442.2, y: 82.7 },
  { date: 'Oct 15', spend: 6510, x: 457.1, y: 85.1 },
  { date: 'Oct 16', spend: 6190, x: 472.0, y: 90.2 },
];

export const CLOUD_SPLIT: CloudSplitItem[] = [
  {
    name: 'AWS',
    share: 58,
    colorVar: 'var(--blue)',
    colorHex: '#34B1FE',
    spendFormatted: '$99,876',
  },
  {
    name: 'Azure',
    share: 27,
    colorVar: 'var(--violet)',
    colorHex: '#643CFD',
    spendFormatted: '$46,494',
  },
  {
    name: 'Google Cloud',
    share: 15,
    colorVar: 'var(--slate)',
    colorHex: '#5B6B8C',
    spendFormatted: '$25,830',
  },
];

export const MOCK_INSIGHTS: InsightItem[] = [
  {
    id: 'in-1',
    type: 'crit',
    typeLabel: 'Anomaly',
    title: 'Data transfer spike in us-east-1',
    subtitle: 'AWS · Oct 8 · NAT Gateway unrouted traffic',
    amount: '+$3.1k',
  },
  {
    id: 'in-2',
    type: 'good',
    typeLabel: 'Savings',
    title: '14 idle VMs in prod-eastus',
    subtitle: 'Azure · unattached disks for 21 days',
    amount: '$4.2k/mo',
  },
  {
    id: 'in-3',
    type: 'warn',
    typeLabel: 'Coverage',
    title: 'Compute Engine committed use at 54%',
    subtitle: 'Google Cloud · 3 projects under-covered',
    amount: '$1.8k/mo',
  },
];
