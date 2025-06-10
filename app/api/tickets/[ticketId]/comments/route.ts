import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

interface RouteContext {
  params: {
    ticketId: string;
  };
}

export async function POST(req: Request, context: RouteContext) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { ticketId } = context.params; // Access ticketId via context.params

    const body = await req.json();
    const { content } = body;

    if (!content) {
      return new NextResponse('Missing content', { status: 400 });
    }

    const ticket = await db.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    }

    const comment = await db.comment.create({
      data: {
        content,
        authorId: userId,
        ticketId: ticketId,
      },
    });

    await db.activity.create({
      data: {
        action: 'COMMENT_ADDED',
        userId,
        ticketId: ticketId,
        details: 'Comment added to ticket',
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('[TICKET_COMMENTS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  context: RouteContext // Use the explicit context object
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { ticketId } = context.params; // Access ticketId via context.params

    const ticket = await db.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    }

    const comments = await db.comment.findMany({
      where: {
        ticketId: ticketId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('[TICKET_COMMENTS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
