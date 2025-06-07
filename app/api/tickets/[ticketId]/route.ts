import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { isUserAdmin, isUserAgent } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { ticketId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const ticket = await db.ticket.findUnique({
      where: {
        id: params.ticketId,
      },
      include: {
        comments: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    }

    // Check permissions based on role
    const isAdmin = await isUserAdmin(userId);
    const isAgent = await isUserAgent(userId);

    if (!isAdmin && !isAgent && ticket.createdById !== userId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    return NextResponse.json(ticket);
  } catch (error) {
    console.error('[TICKET_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { ticketId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const isAdmin = await isUserAdmin(userId);
    const isAgent = await isUserAgent(userId);

    // Only admins and agents can update tickets
    if (!isAdmin && !isAgent) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const body = await req.json();
    const { title, description, status, priority, assignedToId } = body;

    const ticket = await db.ticket.findUnique({
      where: {
        id: params.ticketId,
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    }

    // Update the ticket
    const updatedTicket = await db.ticket.update({
      where: {
        id: params.ticketId,
      },
      data: {
        title,
        description,
        status,
        priority,
        assignedToId,
      },
    });

    // Log activity
    await db.activity.create({
      data: {
        action: 'UPDATED',
        userId,
        ticketId: params.ticketId,
        details: 'Ticket updated',
      },
    });

    return NextResponse.json(updatedTicket);
  } catch (error) {
    console.error('[TICKET_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { ticketId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Only admins can delete tickets
    const isAdmin = await isUserAdmin(userId);

    if (!isAdmin) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const ticket = await db.ticket.findUnique({
      where: {
        id: params.ticketId,
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    }

    // Delete the ticket
    await db.ticket.delete({
      where: {
        id: params.ticketId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[TICKET_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
