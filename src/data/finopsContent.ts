import type { CloudPlatformItem, FeatureItem, CycleStepItem } from '../types';

export const CLOUD_PLATFORMS: CloudPlatformItem[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    description:
      'Cost and Usage Report views by service, account and tag, with Savings Plans and Reserved Instance coverage and utilization.',
    chipText: 'Coming soon',
    iconType: 'aws',
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    description:
      'Cost Management exports by subscription and resource group, with reservation and Azure Hybrid Benefit tracking.',
    chipText: 'Coming soon',
    iconType: 'azure',
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    description:
      'Billing export views in BigQuery by project and label, with committed use discount coverage.',
    chipText: 'Coming soon',
    iconType: 'gcp',
  },
  {
    id: 'all',
    name: 'All clouds together',
    description:
      "Costs from every provider normalized into one model, so a team's total spend sits in one place and one currency.",
    chipText: 'Coming soon',
    iconType: 'all',
  },
];

export const FINOPS_FEATURES: FeatureItem[] = [
  {
    id: 'allocate',
    title: 'Allocate spend',
    description:
      'Break costs down by team, product and environment using tags and labels, then share showback reports.',
    category: 'Cost Allocation',
  },
  {
    id: 'anomalies',
    title: 'Catch anomalies',
    description:
      'Get an alert when daily spend leaves its normal range, with the service and account behind it.',
    category: 'Alerting',
  },
  {
    id: 'commitments',
    title: 'Track commitments',
    description:
      'See coverage and utilization for Savings Plans, reservations and committed use in a single table.',
    category: 'Rate Optimization',
  },
  {
    id: 'forecast',
    title: 'Forecast and budget',
    description:
      'Project month-end spend for each cloud and set budgets that warn you before you cross them.',
    category: 'Budgeting',
  },
  {
    id: 'waste',
    title: 'Find waste',
    description:
      'List idle, oversized and unattached resources with the monthly cost of leaving them running.',
    category: 'Usage Optimization',
  },
  {
    id: 'finance',
    title: 'Report to finance',
    description:
      'Export month-end numbers by cost center in the layout your finance team already uses.',
    category: 'Reporting',
  },
];

export const FINOPS_CYCLE: CycleStepItem[] = [
  {
    stepNumber: 1,
    stepLabel: 'Step 1',
    name: 'Inform',
    description:
      'See where the money goes and which team owns each line. Visibility is the baseline of control.',
  },
  {
    stepNumber: 2,
    stepLabel: 'Step 2',
    name: 'Optimize',
    description:
      'Act on commitments, rightsizing and idle resources before small leaks compound into monthly shocks.',
  },
  {
    stepNumber: 3,
    stepLabel: 'Step 3',
    name: 'Operate',
    description:
      'Keep budgets, alerts and monthly reviews running without a single manual spreadsheet.',
  },
];

export const APP_METADATA = {
  brandName: 'Eorix',
  tagline: 'Multi-cloud FinOps dashboards',
  heroEyebrow: 'Multi-cloud FinOps dashboards',
  heroTitlePrefix: 'One view of every',
  heroTitleHighlight: 'cloud bill',
  heroLead:
    'Eorix is building FinOps dashboards for AWS, Microsoft Azure and Google Cloud. See spend by team, catch anomalies the day they start, and track the savings you actually keep.',
  metaStatus: 'In development',
  metaLaunch: 'Date to be announced',
  statusBadge: 'Coming soon',
  closingHeading: 'Eorix is coming soon.',
  closingDescription:
    'The first dashboards are in development. Early access details will appear on this page when they are ready.',
  copyright: '© 2026 Eorix. All rights reserved.',
};
