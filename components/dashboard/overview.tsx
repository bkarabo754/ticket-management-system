'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '@/components/ui/card';

const data = [
  {
    name: 'Jan',
    Open: 40,
    'In Progress': 24,
    Resolved: 35,
  },
  {
    name: 'Feb',
    Open: 30,
    'In Progress': 28,
    Resolved: 45,
  },
  {
    name: 'Mar',
    Open: 20,
    'In Progress': 29,
    Resolved: 51,
  },
  {
    name: 'Apr',
    Open: 27,
    'In Progress': 25,
    Resolved: 48,
  },
  {
    name: 'May',
    Open: 18,
    'In Progress': 28,
    Resolved: 57,
  },
  {
    name: 'Jun',
    Open: 23,
    'In Progress': 35,
    Resolved: 42,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Open" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
        <Bar
          dataKey="In Progress"
          fill="hsl(var(--chart-2))"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="Resolved"
          fill="hsl(var(--chart-3))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
