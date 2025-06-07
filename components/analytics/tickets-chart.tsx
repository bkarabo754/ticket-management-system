'use client';

import { useTheme } from 'next-themes';
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

const data = [
  {
    name: 'Jan',
    Open: 20,
    'In Progress': 14,
    Resolved: 35,
    Closed: 12,
  },
  {
    name: 'Feb',
    Open: 25,
    'In Progress': 18,
    Resolved: 32,
    Closed: 15,
  },
  {
    name: 'Mar',
    Open: 18,
    'In Progress': 22,
    Resolved: 30,
    Closed: 20,
  },
  {
    name: 'Apr',
    Open: 22,
    'In Progress': 19,
    Resolved: 27,
    Closed: 18,
  },
  {
    name: 'May',
    Open: 15,
    'In Progress': 21,
    Resolved: 36,
    Closed: 24,
  },
  {
    name: 'Jun',
    Open: 19,
    'In Progress': 16,
    Resolved: 34,
    Closed: 22,
  },
];

export function TicketsChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke={theme === 'dark' ? '#333' : '#eee'}
        />
        <XAxis
          dataKey="name"
          stroke={theme === 'dark' ? '#888' : '#888'}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={theme === 'dark' ? '#888' : '#888'}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
            borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
            color: theme === 'dark' ? '#f9fafb' : '#111827',
          }}
        />
        <Legend />
        <Bar
          dataKey="Open"
          fill="hsl(var(--chart-1))"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
        <Bar
          dataKey="In Progress"
          fill="hsl(var(--chart-2))"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
        <Bar
          dataKey="Resolved"
          fill="hsl(var(--chart-3))"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
        <Bar
          dataKey="Closed"
          fill="hsl(var(--chart-4))"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
