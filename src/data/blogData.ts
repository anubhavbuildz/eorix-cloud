import type { BlogCardItem } from '../types';

export const BLOG_CARDS: BlogCardItem[] = [
  {
    id: 'blog-1',
    title: 'The 2026 Multi-Cloud FinOps Playbook: Moving Beyond Vendor Silos',
    slug: 'multi-cloud-finops-playbook-2026',
    excerpt:
      'Why modern engineering teams are ditching fragmented cloud console bills in favor of unified normalized cost telemetry across AWS, Azure, and Google Cloud.',
    category: 'Cloud Strategy',
    readTime: '5 min read',
    publishDate: '2026-10-14',
    formattedDate: 'Oct 14, 2026',
    metricsHighlight: '22% average spend saved',
    author: {
      name: 'Anubhav Sharma',
      role: 'Cloud Infrastructure & FinOps Lead',
    },
  },
  {
    id: 'blog-2',
    title: 'Hunting Zombie Resources: How to Eliminate Unattached Storage & Idle Compute',
    slug: 'hunting-zombie-cloud-resources-waste',
    excerpt:
      'Unattached EBS volumes, orphan snapshots, and forgotten development VMs quietly siphon thousands each month. Here is an actionable checklist to automate cleanup.',
    category: 'Waste Elimination',
    readTime: '4 min read',
    publishDate: '2026-10-09',
    formattedDate: 'Oct 9, 2026',
    metricsHighlight: '$4.2k/mo typical recovery',
    author: {
      name: 'Eorix Research',
      role: 'FinOps Optimization Team',
    },
  },
  {
    id: 'blog-3',
    title: 'Savings Plans vs. Reserved Instances: Real-World Coverage Calibration',
    slug: 'savings-plans-vs-reserved-instances-guide',
    excerpt:
      'How to hit 80%+ commitment utilization without locking your engineering roadmap into legacy instance families or suffering costly under-utilization penalties.',
    category: 'Rate Optimization',
    readTime: '6 min read',
    publishDate: '2026-10-03',
    formattedDate: 'Oct 3, 2026',
    metricsHighlight: 'Target 80% coverage',
    author: {
      name: 'Anubhav Sharma',
      role: 'Cloud Infrastructure & FinOps Lead',
    },
  },
  {
    id: 'blog-4',
    title: 'Kubernetes Cost Allocation at Scale: Pods, Namespaces & Shared Ingress',
    slug: 'kubernetes-cost-attribution-guide',
    excerpt:
      'A practical framework for attributing multi-tenant Kubernetes cluster costs back to product squads with fair-share CPU/memory requests and network egress tracking.',
    category: 'Container FinOps',
    readTime: '7 min read',
    publishDate: '2026-09-28',
    formattedDate: 'Sep 28, 2026',
    metricsHighlight: '100% squad attribution',
    author: {
      name: 'Eorix Research',
      role: 'FinOps Optimization Team',
    },
  },
];
