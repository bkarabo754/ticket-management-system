import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/90',
            footerActionLink: 'text-primary hover:text-primary/90',
          },
        }}
      />
    </div>
  );
}
