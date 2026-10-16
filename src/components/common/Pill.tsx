import React from 'react';
import type { StatusType } from '../../types';

interface PillProps {
  type: StatusType;
  children: React.ReactNode;
  className?: string;
}

export const Pill: React.FC<PillProps> = ({ type, children, className = '' }) => {
  return <span className={`pill ${type} ${className}`.trim()}>{children}</span>;
};
