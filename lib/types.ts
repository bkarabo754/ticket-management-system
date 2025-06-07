export type Role = 'ADMIN' | 'AGENT' | 'CUSTOMER';

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  imageUrl: string;
}

export interface TicketWithRelations {
  id: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
  assignedToId: string | null;
  createdBy?: UserProfile;
  assignedTo?: UserProfile;
  comments?: CommentWithUser[];
  _count?: {
    comments: number;
  };
}

export interface CommentWithUser {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  ticketId: string;
  author?: UserProfile;
}

export interface ActivityWithDetails {
  id: string;
  action: string;
  createdAt: Date;
  userId: string;
  ticketId: string;
  details: string | null;
  user?: UserProfile;
}

export interface TicketStats {
  total: number;
  open: number;
  inProgress: number;
  resolved: number;
  closed: number;
}

export interface AgentPerformance {
  agentId: string;
  agentName: string;
  ticketsResolved: number;
  averageResolutionTime: number;
}
