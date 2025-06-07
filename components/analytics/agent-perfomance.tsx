'use client';

import { useTheme } from 'next-themes';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'John D.',
    tickets: 45,
    avgTime: 2.4,
  },
  {
    name: 'Sarah K.',
    tickets: 38,
    avgTime: 3.1,
  },
  {
    name: 'Mike T.',
    tickets: 52,
    avgTime: 1.8,
  },
  {
    name: 'Emma R.',
    tickets: 29,
    avgTime: 4.2,
  },
  {
    name: 'David L.',
    tickets: 41,
    avgTime: 2.7,
  },
];

export function AgentPerformance() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 60, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
          stroke={theme === 'dark' ? '#333' : '#eee'}
        />
        <XAxis
          type="number"
          stroke={theme === 'dark' ? '#888' : '#888'}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
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
        <Bar
          dataKey="tickets"
          fill="hsl(var(--chart-2))"
          radius={[0, 4, 4, 0]}
          animationDuration={1500}
          animationEasing="ease-out"
        >
          <LabelList
            dataKey="tickets"
            position="right"
            style={{
              fill: theme === 'dark' ? '#f9fafb' : '#111827',
              fontSize: 12,
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
