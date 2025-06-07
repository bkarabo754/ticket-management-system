'use client';

import { Badge } from '@/components/ui/badge';

const statusColorMap = {
  OPEN: 'default',
  IN_PROGRESS: 'secondary',
  RESOLVED: 'destructive',
  CLOSED: 'outline',
} as const;

const statusLabels = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
} as const;

interface TicketStatusBadgeProps {
  status: keyof typeof statusColorMap;
}

export function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  return <Badge variant={statusColorMap[status]}>{statusLabels[status]}</Badge>;
}
