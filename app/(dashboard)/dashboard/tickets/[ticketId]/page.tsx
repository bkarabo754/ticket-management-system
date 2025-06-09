'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '@clerk/nextjs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { CommentList } from '@/components/tickets/comment-list';
import { TicketStatusBadge } from '@/components/tickets/ticket-status-badge';

const statusColorMap = {
  OPEN: 'default',
  IN_PROGRESS: 'secondary',
  RESOLVED: 'success',
  CLOSED: 'outline',
} as const;

const priorityColorMap = {
  LOW: 'outline',
  MEDIUM: 'secondary',
  HIGH: 'default',
  URGENT: 'destructive',
} as const;

export default function TicketPage() {
  const params = useParams();
  const router = useRouter();
  const { getToken, isLoaded, isSignedIn } = useAuth();
  type Priority = keyof typeof priorityColorMap;
  type Ticket = {
    id: string;
    title: string;
    description: string;
    status: keyof typeof statusColorMap;
    priority: Priority;
    assignedToId?: string | null;
    createdAt: string;
    comments?: any[];
    // add other fields as needed
  };
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const token = await getToken();
        const response = await axios.get(`/api/tickets/${params.ticketId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTicket(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load ticket');
      } finally {
        setLoading(false);
      }
    };

    if (params.ticketId) {
      fetchTicket();
    }
  }, [params.ticketId]);

  const handleSubmitComment = async () => {
    if (!comment.trim()) return;

    setSubmittingComment(true);
    try {
      const token = await getToken();
      await axios.post(
        `/api/tickets/${params.ticketId}/comments`,
        { content: comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success('Comment added');
      setComment('');

      // Refresh ticket data to get the new comment
      const response = await axios.get(`/api/tickets/${params.ticketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTicket(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to add comment');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-10">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <Skeleton className="h-8 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between">
              <div className="space-y-1">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
            <Skeleton className="h-32 w-full" />
            <Separator />
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-16 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="container py-10">
        <Card className="max-w-4xl mx-auto text-center p-6">
          <h3 className="text-xl font-semibold mb-2">Ticket Not Found</h3>
          <p className="text-muted-foreground mb-4">
            The ticket you are looking for does not exist or has been deleted.
          </p>
          <Button onClick={() => router.push('/dashboard/tickets')}>
            Back to Tickets
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">{ticket.title}</CardTitle>
            <CardDescription>
              Ticket #{ticket.id.substring(0, 8)} · Created{' '}
              {formatDistanceToNow(new Date(ticket.createdAt), {
                addSuffix: true,
              })}{' '}
              <Badge variant={priorityColorMap[ticket.priority as Priority]}>
                {ticket.priority}
              </Badge>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Status</p>
              <TicketStatusBadge status={ticket.status} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Priority</p>
              <Badge variant={priorityColorMap[ticket.priority]}>
                {ticket.priority}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Assigned To</p>
              <div className="flex items-center gap-2">
                {ticket.assignedToId ? (
                  <>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                    <span>Agent Name</span>
                  </>
                ) : (
                  <span className="text-muted-foreground">Unassigned</span>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <div className="p-4 bg-muted rounded-md whitespace-pre-wrap">
              {ticket.description}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Comments</h3>
            <CommentList comments={ticket.comments || []} />

            <div className="space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmitComment}
                  disabled={!comment.trim() || submittingComment}
                  className="cursor-pointer"
                >
                  {submittingComment ? 'Submitting...' : 'Add Comment'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
