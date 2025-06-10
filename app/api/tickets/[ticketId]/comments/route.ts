import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function POST(
  req: Request,
  { params }: { params: { ticketId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { ticketId } = params;

    const body = await req.json();
    const { content } = body;

    if (!content) {
      return new NextResponse('Missing content', { status: 400 });
    } // Check if ticket exists

    const ticket = await db.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    } // Create comment

    const comment = await db.comment.create({
      data: {
        content,
        authorId: userId,
        ticketId: ticketId, // --- UPDATED: Use the awaited ticketId ---
      },
    }); // Log activity

    await db.activity.create({
      data: {
        action: 'COMMENT_ADDED',
        userId,
        ticketId: ticketId, // --- UPDATED: Use the awaited ticketId ---
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
  { params }: { params: { ticketId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { ticketId } = params; // Check if ticket exists

    const ticket = await db.ticket.findUnique({
      where: {
        id: ticketId, // Use the awaited ticketId ---
      },
    });

    if (!ticket) {
      return new NextResponse('Ticket not found', { status: 404 });
    } // Get comments

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
