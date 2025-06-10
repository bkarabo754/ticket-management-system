'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      active: pathname === '/dashboard',
    },
    {
      href: '/dashboard/tickets',
      label: 'Tickets',
      active:
        pathname === '/dashboard/tickets' ||
        pathname.startsWith('/dashboard/tickets/'),
    },
    {
      href: '/dashboard/analytics',
      label: 'Analytics',
      active: pathname === '/dashboard/analytics',
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          'hidden md:flex items-center justify-center mx-auto space-x-4 lg:space-x-6',
          className
        )}
        {...props}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              route.active ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            {' '}
            <SheetTitle>TicketHub</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 py-2 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  route.active
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
