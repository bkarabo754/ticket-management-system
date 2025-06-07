'use client';

import { useTheme } from 'next-themes';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Week 1',
    'Low Priority': 4.5,
    'Medium Priority': 3.2,
    'High Priority': 2.1,
    Urgent: 1.5,
  },
  {
    name: 'Week 2',
    'Low Priority': 4.2,
    'Medium Priority': 3.0,
    'High Priority': 1.9,
    Urgent: 1.3,
  },
  {
    name: 'Week 3',
    'Low Priority': 3.8,
    'Medium Priority': 2.8,
    'High Priority': 1.8,
    Urgent: 1.4,
  },
  {
    name: 'Week 4',
    'Low Priority': 4.1,
    'Medium Priority': 3.1,
    'High Priority': 2.0,
    Urgent: 1.2,
  },
  {
    name: 'Week 5',
    'Low Priority': 3.9,
    'Medium Priority': 2.9,
    'High Priority': 1.7,
    Urgent: 1.1,
  },
  {
    name: 'Week 6',
    'Low Priority': 3.6,
    'Medium Priority': 2.7,
    'High Priority': 1.6,
    Urgent: 1.0,
  },
];

export function ResolutionTimeChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
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
          label={{
            value: 'Hours',
            angle: -90,
            position: 'insideLeft',
            style: {
              textAnchor: 'middle',
              fill: theme === 'dark' ? '#888' : '#888',
            },
          }}
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
        <Area
          type="monotone"
          dataKey="Low Priority"
          stroke="hsl(var(--chart-4))"
          fill="hsl(var(--chart-4)/0.5)"
          activeDot={{ r: 6 }}
          animationDuration={1500}
        />
        <Area
          type="monotone"
          dataKey="Medium Priority"
          stroke="hsl(var(--chart-3))"
          fill="hsl(var(--chart-3)/0.5)"
          activeDot={{ r: 6 }}
          animationDuration={1500}
        />
        <Area
          type="monotone"
          dataKey="High Priority"
          stroke="hsl(var(--chart-2))"
          fill="hsl(var(--chart-2)/0.5)"
          activeDot={{ r: 6 }}
          animationDuration={1500}
        />
        <Area
          type="monotone"
          dataKey="Urgent"
          stroke="hsl(var(--chart-1))"
          fill="hsl(var(--chart-1)/0.5)"
          activeDot={{ r: 6 }}
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
