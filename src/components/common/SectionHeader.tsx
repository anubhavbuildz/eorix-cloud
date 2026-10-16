import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string | React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  className = '',
}) => {
  return (
    <div className={`section-head ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
};
