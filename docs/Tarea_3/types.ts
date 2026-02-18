
import React from 'react';

export interface Activity {
  id: string;
  title: string;
  type: 'Inicio' | 'Desarrollo' | 'Cierre';
  objective: string;
  description: string[];
  timing: string;
  space: string;
  grouping: string;
  evaluation: string;
  color: string;
  icon: React.ReactNode;
  materials: string[];
  adaptations: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}
