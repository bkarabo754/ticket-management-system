'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const tickets = [
  {
    id: '1',
    title: 'Login page not working',
    status: 'OPEN',
    priority: 'HIGH',
    createdAt: '2023-06-01T09:00:00.000Z',
    user: {
      name: 'Timothy Wales',
      email: 'timothy.wales@gmail.com',
      image: '',
    },
  },
  {
    id: '2',
    title: 'Cannot upload images to profile',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    createdAt: '2023-06-02T11:30:00.000Z',
    user: {
      name: 'Sarah Johnson',
      email: 'sarahj45@gmail.com',
      image: '',
    },
  },
  {
    id: '3',
    title: 'Payment processing error',
    status: 'RESOLVED',
    priority: 'URGENT',
    createdAt: '2023-06-03T14:15:00.000Z',
    user: {
      name: 'Michael Brown',
      email: 'mbrown@gmail.com',
      image: '',
    },
  },
  {
    id: '4',
    title: 'Notification settings not saving',
    status: 'OPEN',
    priority: 'LOW',
    createdAt: '2023-06-04T16:45:00.000Z',
    user: {
      name: 'Emily Wilson',
      email: 'emily26@gmail.com',
      image: '',
    },
  },
];

export function RecentTickets() {
  return (
    <div className="space-y-8">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={ticket.user.image} alt={ticket.user.name} />
            <AvatarFallback>
              {ticket.user.name.charAt(0)}
              {ticket.user.name.split(' ')[1]?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <Link
              href={`/dashboard/tickets/${ticket.id}`}
              className="text-sm font-medium leading-none hover:underline"
            >
              {ticket.title}
            </Link>
            <p className="text-sm text-muted-foreground">{ticket.user.email}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge
              variant={
                ticket.status === 'OPEN'
                  ? 'default'
                  : ticket.status === 'IN_PROGRESS'
                    ? 'secondary'
                    : 'outline'
              }
            >
              {ticket.status.replace('_', ' ')}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
