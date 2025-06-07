import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { isUserAgent } from '@/lib/auth';

export async function GET() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Determine the role from user metadata
    const role = (user.publicMetadata.role as string) || 'CUSTOMER';

    let tickets;

    // Filter tickets based on role
    if (role === 'ADMIN') {
      // Admins can see all tickets
      tickets = await db.ticket.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });
    } else if (role === 'AGENT') {
      // Agents see tickets assigned to them and unassigned tickets
      tickets = await db.ticket.findMany({
        where: {
          OR: [{ assignedToId: userId }, { assignedToId: null }],
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });
    } else {
      // Customers only see tickets they created
      tickets = await db.ticket.findMany({
        where: {
          createdById: userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });
    }

    return NextResponse.json(tickets);
  } catch (error) {
    console.error('[TICKETS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { title, description, priority } = body;

    if (!title || !description) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Create the ticket
    const ticket = await db.ticket.create({
      data: {
        title,
        description,
        priority: priority || 'MEDIUM',
        createdById: userId,
      },
    });

    // Log activity
    await db.activity.create({
      data: {
        action: 'CREATED',
        userId,
        ticketId: ticket.id,
        details: 'Ticket created',
      },
    });

    return NextResponse.json(ticket);
  } catch (error) {
    console.error('[TICKETS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
