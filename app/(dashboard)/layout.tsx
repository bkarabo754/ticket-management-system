// app/(dashboard)/layout.tsx
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="pl-4 lg:pl-8 mr-4 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">TicketHub</span>
            </Link>
          </div>
          <MainNav />
          <div className="ml-auto flex items-center space-x-4 pr-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
