import { Suspense } from 'react';
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/tickets/data-table';
import { columns } from '@/components/tickets/columns';
import { TableSkeleton } from '@/components/tickets/table-skeleton';
import { getUserRole } from '@/lib/utils/client-auth-utils';

export default async function TicketsPage() {
  const user = await currentUser();
  if (!user) return null;

  const role = getUserRole(
    user as unknown as import('@clerk/types').UserResource
  );

  return (
    <div className="flex flex-col space-y-4 p-4 pt-6 sm:p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Tickets
        </h2>
        {role !== 'CUSTOMER' && (
          <Link href="/dashboard/tickets/new">
            <Button className="flex items-center gap-2 cursor-pointer">
              <Plus className="h-4 w-4" />
              <span>New Ticket</span>
            </Button>
          </Link>
        )}
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} />
      </Suspense>
    </div>
  );
}
