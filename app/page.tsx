import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';
import { auth } from '@clerk/nextjs/server';
import { ArrowRight, LayoutDashboard, Menu, X } from 'lucide-react';
import Link from 'next/link';
export default async function Home() {
  const { userId } = await auth();
  const isAuthenticated = !!userId;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 w-full border-b bg-white dark:bg-zinc-950 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">TicketHub</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                    })}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <UserNav />
                  <ModeToggle />
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                    })}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className={buttonVariants({ size: 'sm' })}
                  >
                    Get Started
                  </Link>
                  <ModeToggle />
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Simplify Your Customer Support
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    TicketHub streamlines your support workflow, helping you
                    resolve customer issues faster and more efficiently.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {isAuthenticated ? (
                    <Link
                      href="/dashboard"
                      className={buttonVariants({
                        size: 'lg',
                        className: 'gap-1.5',
                      })}
                    >
                      Go to Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/sign-up"
                        className={buttonVariants({
                          size: 'lg',
                          className: 'gap-1.5',
                        })}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/about"
                        className={buttonVariants({
                          variant: 'outline',
                          size: 'lg',
                        })}
                      >
                        Learn More
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[550px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-muted/50 to-muted p-6 shadow-lg">
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="h-24 w-full rounded-lg bg-card p-4 shadow-sm">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                        <div className="space-y-1">
                          <div className="h-4 w-24 rounded bg-primary/10"></div>
                          <div className="h-3 w-32 rounded bg-muted"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-32 rounded-lg bg-card p-4 shadow-sm"
                        >
                          <div className="space-y-2">
                            <div className="h-4 w-16 rounded bg-primary/10"></div>
                            <div className="h-12 w-full rounded bg-muted"></div>
                            <div className="flex justify-between">
                              <div className="h-3 w-12 rounded bg-primary/10"></div>
                              <div className="h-3 w-8 rounded bg-muted"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-64 w-full rounded-lg bg-card p-4 shadow-sm">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="h-4 w-24 rounded bg-primary/10"></div>
                          <div className="h-6 w-6 rounded bg-muted"></div>
                        </div>
                        <div className="h-4 w-full rounded bg-muted"></div>
                        <div className="h-4 w-2/3 rounded bg-muted"></div>
                        <div className="h-20 w-full rounded bg-primary/5"></div>
                        <div className="flex justify-end">
                          <div className="h-8 w-20 rounded bg-primary/10"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features That Deliver Results
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage support tickets efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: 'Ticket Management',
                  description:
                    'Create, track, and resolve customer support tickets with ease.',
                },
                {
                  title: 'Role-Based Access',
                  description:
                    'Control who can view and manage tickets with customizable permissions.',
                },
                {
                  title: 'Analytics Dashboard',
                  description:
                    'Get insights into performance metrics and identify areas for improvement.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border bg-background p-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} TicketHub (Pty) Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
